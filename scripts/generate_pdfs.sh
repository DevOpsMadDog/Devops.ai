#!/bin/bash


set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

VERSION="v20251036"

CONTENT_DIR="/home/ubuntu/devops-ai-website/content"
WHITEPAPERS_DIR="$CONTENT_DIR/whitepapers"
OUTPUT_DIR="/home/ubuntu/devops-ai-website/public/pdfs"

mkdir -p "$OUTPUT_DIR"

echo -e "${GREEN}Starting PDF generation...${NC}"

generate_pdf() {
    local input_file="$1"
    local output_file="$2"
    local title="$3"
    
    echo -e "${YELLOW}Generating: $output_file${NC}"
    
    pandoc "$input_file" \
        -o "$output_file" \
        --pdf-engine=xelatex \
        --variable geometry:margin=1in \
        --variable fontsize=11pt \
        --variable documentclass=article \
        --variable colorlinks=true \
        --variable linkcolor=blue \
        --variable urlcolor=blue \
        --variable toccolor=black \
        --variable mainfont="DejaVu Sans" \
        --toc \
        --toc-depth=2 \
        --number-sections \
        --highlight-style=tango \
        --metadata title="$title" \
        --metadata author="DevOps.ai" \
        --metadata date="January 2025"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Generated: $output_file${NC}"
    else
        echo -e "${RED}✗ Failed to generate: $output_file${NC}"
        return 1
    fi
}

echo -e "\n${GREEN}=== Generating AlDeci One-Pager ===${NC}"
generate_pdf \
    "$CONTENT_DIR/one-pager.md" \
    "$OUTPUT_DIR/aldeci-one-pager-${VERSION}.pdf" \
    "AlDeci One-Pager"

echo -e "\n${GREEN}=== Generating Risk Model Deep Dive Whitepaper ===${NC}"
generate_pdf \
    "$WHITEPAPERS_DIR/risk-model-deep-dive.md" \
    "$OUTPUT_DIR/risk-model-deep-dive-${VERSION}.pdf" \
    "AlDeci Risk Model Deep Dive"

echo -e "\n${GREEN}=== Generating APRA CPS 234 Automation Pack Whitepaper ===${NC}"
generate_pdf \
    "$WHITEPAPERS_DIR/apra-cps234-automation-pack.md" \
    "$OUTPUT_DIR/apra-cps234-automation-pack-${VERSION}.pdf" \
    "APRA CPS 234 Automation Pack"

echo -e "\n${GREEN}=== Generating Evidence-as-Code Architecture Guide Whitepaper ===${NC}"
generate_pdf \
    "$WHITEPAPERS_DIR/evidence-as-code-architecture-guide.md" \
    "$OUTPUT_DIR/evidence-as-code-architecture-guide-${VERSION}.pdf" \
    "Evidence-as-Code Architecture Guide"

echo -e "\n${GREEN}=== Generating SBOM Integration Best Practices Whitepaper ===${NC}"
generate_pdf \
    "$WHITEPAPERS_DIR/sbom-integration-best-practices.md" \
    "$OUTPUT_DIR/sbom-integration-best-practices-${VERSION}.pdf" \
    "SBOM Integration Best Practices"

echo -e "\n${GREEN}=== Generating Multi-Scanner Correlation Strategies Whitepaper ===${NC}"
generate_pdf \
    "$WHITEPAPERS_DIR/multi-scanner-correlation-strategies.md" \
    "$OUTPUT_DIR/multi-scanner-correlation-strategies-${VERSION}.pdf" \
    "Multi-Scanner Correlation Strategies"

echo -e "\n${GREEN}=== Generating SOC 2 Type II Evidence Automation Whitepaper ===${NC}"
generate_pdf \
    "$WHITEPAPERS_DIR/soc2-type-ii-evidence-automation.md" \
    "$OUTPUT_DIR/soc2-type-ii-evidence-automation-${VERSION}.pdf" \
    "SOC 2 Type II Evidence Automation"

echo -e "\n${GREEN}=== Generating Enterprise VM Competitive One-Pager ===${NC}"
generate_pdf \
    "$WHITEPAPERS_DIR/enterprise-vm-competitive-one-pager.md" \
    "$OUTPUT_DIR/enterprise-vm-competitive-one-pager-${VERSION}.pdf" \
    "Enterprise Vulnerability Management: Real-World Examples + Competitive Snapshot"

echo -e "\n${GREEN}=== PDF Generation Complete ===${NC}"
echo -e "${GREEN}Generated PDFs:${NC}"
ls -lh "$OUTPUT_DIR"/*.pdf

echo -e "\n${GREEN}All PDFs generated successfully!${NC}"
