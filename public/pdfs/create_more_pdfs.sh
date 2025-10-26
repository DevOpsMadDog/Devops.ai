#!/bin/bash

# Create remaining whitepaper PDFs
cat > evidence-as-code-architecture-guide.txt << 'TXTEOF'
Evidence-as-Code Architecture Guide
===================================

Design Patterns for Building Evidence-as-Code Workflows

This guide covers cryptographic signing, SLSA provenance, retention policies,
and integration with compliance frameworks.

Topics:
- Evidence-as-Code principles
- CI/CD integration patterns
- SLSA provenance attestation
- Cryptographic signing strategies
- Retention policy design

Contact: contact@devops.ai
Website: https://devops.ai
TXTEOF

cat > sbom-integration-best-practices.txt << 'TXTEOF'
SBOM Integration Best Practices
================================

Generating, Managing, and Analyzing Software Bill of Materials

Practical guide covering CycloneDX and SPDX formats, tooling comparison,
and correlation with vulnerability data.

Topics:
- SBOM generation strategies
- CycloneDX vs SPDX comparison
- Multi-cloud SBOM management
- Vulnerability correlation
- Supply chain security

Contact: contact@devops.ai
Website: https://devops.ai
TXTEOF

cat > multi-scanner-correlation-strategies.txt << 'TXTEOF'
Multi-Scanner Correlation Strategies
====================================

Correlating Findings from Multiple Security Scanners

How to effectively correlate SAST, DAST, SCA, and CNAPP findings
to reduce false positives and improve remediation prioritization.

Topics:
- Deduplication algorithms
- Context enrichment techniques
- Scanner integration patterns
- Risk prioritization strategies
- False positive reduction

Contact: contact@devops.ai
Website: https://devops.ai
TXTEOF

cat > soc2-type-ii-evidence-automation.txt << 'TXTEOF'
SOC 2 Type II Evidence Automation
==================================

Automating SOC 2 Type II Evidence Collection

Step-by-step guide covering all trust service criteria, control mapping,
continuous evidence generation, and audit preparation workflows.

Topics:
- Trust service criteria mapping
- Control automation strategies
- Continuous evidence collection
- Audit preparation workflows
- SOC 2 compliance best practices

Contact: contact@devops.ai
Website: https://devops.ai
TXTEOF

# Convert text files to PDF
for txtfile in *.txt; do
    pdffile="${txtfile%.txt}.pdf"
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

echo "Created additional PDF files:"
ls -lh *.pdf
