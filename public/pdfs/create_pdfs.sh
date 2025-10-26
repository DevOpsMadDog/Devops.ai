#!/bin/bash

# Create a simple text-based PDF for AlDeci One-Pager
cat > aldeci-one-pager.txt << 'TXTEOF'
AlDeci Product One-Pager
========================

Automate Trust. Prove Security.

What is AlDeci?
--------------
AlDeci (formerly FixOps) is a unified security intelligence platform that transforms 
scanner noise and SBOM sprawl into risk-based actions and cryptographically signed evidence.

Key Features:
- Unified Intelligence: Correlate SBOMs, SARIF findings, CVE feeds, VEX, CNAPP outputs
- Context-Aware Risk: EPSS, KEV, version lag, exposure flags, data sensitivity
- Evidence-as-Code: Cryptographically signed bundles for SOC 2, ISO 27001, APRA CPS 234
- Seamless Integrations: GitHub Actions, GitLab CI, Azure DevOps, Jenkins

Contact: contact@devops.ai
Website: https://devops.ai
TXTEOF

# Create whitepaper PDFs
cat > risk-model-deep-dive.txt << 'TXTEOF'
AlDeci Risk Model Deep Dive
===========================

Understanding Context-Aware Risk Scoring

This whitepaper explores how AlDeci combines multiple intelligence sources
to provide accurate, context-aware risk scoring that goes beyond CVSS.

Topics covered:
- EPSS (Exploit Prediction Scoring System)
- CISA KEV (Known Exploited Vulnerabilities)
- Version lag analysis
- Exposure detection
- Business context integration

Contact: contact@devops.ai
Website: https://devops.ai
TXTEOF

cat > apra-cps234-automation-pack.txt << 'TXTEOF'
APRA CPS 234 Automation Pack
============================

Automating Information Security Compliance for Financial Institutions

This guide provides a comprehensive approach to automating APRA CPS 234
compliance using AlDeci's evidence generation capabilities.

Key sections:
- APRA CPS 234 requirements overview
- Automated evidence collection
- Continuous compliance monitoring
- Audit-ready reporting

Contact: contact@devops.ai
Website: https://devops.ai
TXTEOF

# Convert text files to PDF using a simple approach
# Since we don't have complex PDF tools, we'll create minimal valid PDFs
for txtfile in *.txt; do
    pdffile="${txtfile%.txt}.pdf"
    # Create a minimal valid PDF with the text content
    {
        echo "%PDF-1.4"
        echo "1 0 obj"
        echo "<< /Type /Catalog /Pages 2 0 R >>"
        echo "endobj"
        echo "2 0 obj"
        echo "<< /Type /Pages /Kids [3 0 R] /Count 1 >>"
        echo "endobj"
        echo "3 0 obj"
        echo "<< /Type /Page /Parent 2 0 R /Resources 4 0 R /MediaBox [0 0 612 792] /Contents 5 0 R >>"
        echo "endobj"
        echo "4 0 obj"
        echo "<< /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >>"
        echo "endobj"
        echo "5 0 obj"
        echo "<< /Length 200 >>"
        echo "stream"
        echo "BT"
        echo "/F1 12 Tf"
        echo "50 750 Td"
        head -1 "$txtfile" | sed 's/^/(/' | sed 's/$/) Tj/'
        echo "0 -20 Td"
        echo "(Download from: https://devops.ai) Tj"
        echo "ET"
        echo "endstream"
        echo "endobj"
        echo "xref"
        echo "0 6"
        echo "0000000000 65535 f"
        echo "0000000009 00000 n"
        echo "0000000058 00000 n"
        echo "0000000115 00000 n"
        echo "0000000214 00000 n"
        echo "0000000308 00000 n"
        echo "trailer"
        echo "<< /Size 6 /Root 1 0 R >>"
        echo "startxref"
        echo "556"
        echo "%%EOF"
    } > "$pdffile"
    rm "$txtfile"
done

echo "Created PDF files:"
ls -lh *.pdf
