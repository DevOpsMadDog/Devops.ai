# AlDeci Product One-Pager
**Formerly FixOps**

---

## Automate Trust. Prove Security.

AlDeci is a comprehensive DevSecOps platform that transforms scanner noise and SBOM sprawl into risk-based actions and cryptographically signed evidence bundles.

---

## The Problem

Organizations face three critical challenges in modern DevSecOps:

- **Scanner Noise**: Multiple security tools generate overlapping findings with high false-positive rates, overwhelming security teams
- **SBOM Sprawl**: Software Bill of Materials from different tools use incompatible formats (CycloneDX, SPDX, GitHub Dependency Snapshot), making correlation impossible
- **Audit Burden**: Manual evidence collection for compliance frameworks (SOC 2, ISO 27001, APRA CPS 234, Essential Eight) consumes 40-60% of security team time

---

## The AlDeci Solution

AlDeci unifies security intelligence into a single automated workflow:

**Unified Ingestion** → Accepts SBOMs (CycloneDX, SPDX), SARIF scans (SAST/DAST/SCA), CNAPP findings, VEX documents, and business context through REST API or CLI

**Intelligent Normalization** → Converts heterogeneous formats into canonical models for consistent analysis

**Context-Aware Correlation** → Links design artifacts ↔ SBOM components ↔ security findings ↔ CVE data ↔ existing controls for full traceability

**Risk-Based Prioritization** → Combines EPSS (exploit probability), CISA KEV (known exploited vulnerabilities), version lag, exposure flags, and data sensitivity into composite risk scores (0-100)

**Automated Evidence Generation** → Produces cryptographically signed, audit-ready bundles with SLSA v1 provenance attestations for compliance frameworks

---

## How AlDeci Works

```
┌─────────────┐
│  Ingestion  │  Push artifacts via REST API or CLI
└──────┬──────┘
       │
┌──────▼──────────┐
│ Normalization   │  Parse CycloneDX, SPDX, SARIF, CVE feeds
└──────┬──────────┘
       │
┌──────▼──────────┐
│  Correlation    │  Build design ↔ SBOM ↔ findings ↔ CVE graph
└──────┬──────────┘
       │
┌──────▼──────────┐
│    Decision     │  Multi-layer intelligence: Vector DB + LLM + RAG +
│                 │  Consensus + Golden Baseline + OPA Policies + SBOM Analysis
└──────┬──────────┘
       │
┌──────▼──────────┐
│    Evidence     │  Generate signed bundles with SLSA provenance
└──────┬──────────┘
       │
┌──────▼──────────┐
│    Publish      │  Deliver to ticketing, storage, audit systems
└─────────────────┘
```

---

## Decision Engine: Six-Layer Intelligence

1. **Vector DB Pattern Matching** - Semantic search against known vulnerability patterns
2. **LLM + RAG Context Enrichment** - Multi-model reasoning (GPT-5, Claude-3, Gemini-2) with retrieval-augmented generation
3. **Consensus Checker** - Escalates when LLM agreement < 50%, requires human review
4. **Golden Regression Baseline** - Compares against known-good security states
5. **OPA Policy Engine** - Policy-as-code enforcement with Rego rules
6. **SBOM Dependency Analysis** - Transitive vulnerability detection across supply chain
7. **Probabilistic Models** - Bayesian analytics for risk projection and Markov chain forecasting of vulnerability trends inform prioritization and near-term risk trajectory

**Output Verdicts:**
- **ALLOW** (Risk < 60): Safe to deploy with evidence bundle
- **FIX** (Risk 60-85): Remediation required with clear rationale
- **BLOCK** (Risk ≥ 85): Deployment blocked with detailed explanation

---

## Proven Outcomes

Organizations using AlDeci achieve measurable security and efficiency gains:

- **−60% False-Positive Churn** - Context-aware correlation eliminates duplicate and irrelevant findings
- **−46% MTTR for Critical Vulnerabilities** - Risk-based prioritization focuses teams on exploitable issues
- **−80% Audit Preparation Time** - Automated evidence bundles eliminate manual artifact collection

---

## Compliance Frameworks Supported

AlDeci generates audit-ready evidence for:

- **SOC 2 Type II** - Security monitoring, change management, incident response evidence
- **ISO 27001** - Information security management system controls and audit trails
- **APRA CPS 234** - Information security capability for Australian financial institutions
- **Essential Eight** - Australian Cyber Security Centre mitigation strategies

---

## Integrations

**CI/CD Platforms:** GitHub Actions • GitLab CI • Azure DevOps • Jenkins • CircleCI

**Security Scanners:** Snyk • Wiz • Tenable • SonarQube • Nexus Lifecycle • Semgrep • Trivy

**Ticketing & Collaboration:** Jira • Azure Boards • Confluence • Slack • Microsoft Teams

**Cloud Providers:** AWS • Azure • GCP • Kubernetes

---

## Evidence Bundles

Every AlDeci decision produces a cryptographically signed evidence bundle containing:

- Normalized SBOM with component inventory and licenses
- Risk report with EPSS/KEV analysis and composite scores
- SARIF findings with severity mapping and remediation guidance
- SLSA v1 provenance attestation with build metadata
- Policy evaluation results (pass/warn/fail verdicts)
- Signed MANIFEST.yaml with SHA-256 fingerprints

**Signing Options:** RSA-SHA256 or Cosign with optional Fernet encryption at rest

**Retention:** 90 days (Demo Mode) or 7 years (Enterprise Mode)

---

## Deployment Modes

**Demo Mode** - In-memory vector store, mock LLM, simplified auth, 90-day retention
**Enterprise Mode** - Persistent ChromaDB, real LLM APIs, JWT auth, 7-year retention, OPA client

---

## Why AlDeci is Different

**Push-Based Architecture** - Teams push artifacts from CI/CD pipelines—no scanner-specific connectors required. Works with any tool that outputs SBOM or SARIF.

**Evidence + Prioritization in One Flow** - Single workflow produces both risk-based prioritization and audit-ready evidence. No separate compliance tools needed.

**On-Premises Friendly** - Transparent pipeline with explainable outputs. Deploy in your VPC or on-premises. No black-box SaaS required.

**Cryptographic Trust** - Every decision is signed and verifiable. Immutable audit trails with SLSA v1 provenance.

---

## Get Started

**Request Access** → contact@devops.ai

**Book a Demo** → https://devops.ai/contact

**Documentation** → https://deepwiki.com/DevOpsMadDog/Fixops

---

**DevOps.ai** | Sydney, Australia | https://devops.ai

© 2025 DevOps.ai. All rights reserved.
