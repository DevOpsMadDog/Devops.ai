# SBOM Integration Best Practices
## Practical Guide to Software Bill of Materials Across Multi-Cloud Environments

**Version 1.0** | **January 2025** | **DevOps.ai**

---

## Executive Summary

Software Bill of Materials (SBOM) has become a critical requirement for software supply chain security, mandated by executive orders (EO 14028), compliance frameworks (SOC 2, ISO 27001), and industry standards (NIST SSDF). However, generating, managing, and analyzing SBOMs across multi-cloud environments presents significant challenges.

This guide provides practical best practices for SBOM integration, covering CycloneDX and SPDX formats, tooling comparison, generation strategies, correlation with vulnerability data, and supply chain risk management using AlDeci.

**Key Benefits:**
- Automate SBOM generation across all applications
- Standardize on CycloneDX or SPDX formats
- Correlate SBOMs with vulnerability data (CVE, KEV, EPSS)
- Track supply chain risk with version lag analysis
- Maintain SBOM inventory for compliance

---

## Table of Contents

1. SBOM Fundamentals
2. Format Comparison: CycloneDX vs SPDX
3. SBOM Generation Tools
4. Integration Patterns
5. Vulnerability Correlation
6. Supply Chain Risk Management
7. Compliance and Audit
8. Best Practices
9. Troubleshooting

---

## 1. SBOM Fundamentals

### 1.1 What is an SBOM?

A Software Bill of Materials (SBOM) is a formal, machine-readable inventory of software components, dependencies, and metadata. SBOMs provide transparency into software composition, enabling:

- **Vulnerability Management**: Identify vulnerable components
- **License Compliance**: Track open-source licenses
- **Supply Chain Security**: Detect malicious or compromised dependencies
- **Incident Response**: Quickly identify affected systems
- **Procurement**: Verify software composition before purchase

### 1.2 SBOM Minimum Elements (NTIA)

The National Telecommunications and Information Administration (NTIA) defines minimum elements for SBOMs:

**Data Fields**:
1. Supplier Name
2. Component Name
3. Version of Component
4. Other Unique Identifiers (e.g., Package URL, CPE)
5. Dependency Relationship
6. Author of SBOM Data
7. Timestamp

**Automation Support**:
- Machine-readable format (JSON, XML)
- Automated generation from build systems
- Automated consumption by security tools

**Practices and Processes**:
- Frequency of SBOM generation (every build)
- Depth of dependency tree (transitive dependencies)
- Known unknowns (components without version info)

### 1.3 SBOM Use Cases

**Use Case 1: Vulnerability Response**
- Scenario: Log4Shell (CVE-2021-44228) disclosed
- Action: Query all SBOMs for log4j-core components
- Result: Identify 47 affected services in 2 minutes

**Use Case 2: License Compliance**
- Scenario: Legal review of GPL-licensed dependencies
- Action: Extract all components with GPL licenses from SBOMs
- Result: Identify 12 GPL components, plan remediation

**Use Case 3: Supply Chain Attack**
- Scenario: Malicious package published to npm (event-stream incident)
- Action: Query SBOMs for event-stream dependency
- Result: Identify 3 affected applications, block deployments

**Use Case 4: Procurement**
- Scenario: Evaluating third-party software purchase
- Action: Request SBOM from vendor, analyze components
- Result: Identify 8 high-risk dependencies, negotiate remediation

---

## 2. Format Comparison: CycloneDX vs SPDX

### 2.1 CycloneDX

**Overview**: CycloneDX is a lightweight SBOM standard designed for application security use cases. Created by OWASP, it focuses on vulnerability management and supply chain security.

**Format**: JSON, XML, Protocol Buffers

**Strengths**:
- Designed for security use cases
- Rich vulnerability metadata (VEX support)
- Compact format (smaller file sizes)
- Strong tool ecosystem (Syft, Trivy, Dependency-Track)
- Active development and community

**Weaknesses**:
- Less mature than SPDX (created 2017 vs 2010)
- Fewer legal/licensing features
- Less adoption in regulated industries

**Example** (CycloneDX 1.5):
```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "version": 1,
  "metadata": {
    "timestamp": "2025-01-26T10:00:00Z",
    "component": {
      "type": "application",
      "name": "my-app",
      "version": "2.1.0"
    }
  },
  "components": [
    {
      "type": "library",
      "name": "log4j-core",
      "version": "2.14.1",
      "purl": "pkg:maven/org.apache.logging.log4j/log4j-core@2.14.1",
      "licenses": [
        {"license": {"id": "Apache-2.0"}}
      ],
      "hashes": [
        {"alg": "SHA-256", "content": "a1b2c3d4..."}
      ]
    }
  ],
  "dependencies": [
    {
      "ref": "pkg:maven/org.apache.logging.log4j/log4j-core@2.14.1",
      "dependsOn": []
    }
  ]
}
```

### 2.2 SPDX

**Overview**: Software Package Data Exchange (SPDX) is an ISO/IEC standard (ISO/IEC 5962:2021) for communicating software component information. Created by the Linux Foundation, it focuses on licensing and compliance.

**Format**: JSON, YAML, RDF, Tag-Value

**Strengths**:
- ISO/IEC standard (regulatory acceptance)
- Comprehensive licensing metadata
- Mature specification (created 2010)
- Strong adoption in regulated industries
- Legal review features

**Weaknesses**:
- More complex format (larger file sizes)
- Less focus on security use cases
- Fewer security-focused tools

**Example** (SPDX 2.3):
```json
{
  "spdxVersion": "SPDX-2.3",
  "dataLicense": "CC0-1.0",
  "SPDXID": "SPDXRef-DOCUMENT",
  "name": "my-app-2.1.0",
  "documentNamespace": "https://example.com/my-app-2.1.0",
  "creationInfo": {
    "created": "2025-01-26T10:00:00Z",
    "creators": ["Tool: syft-0.100.0"]
  },
  "packages": [
    {
      "SPDXID": "SPDXRef-Package-log4j-core",
      "name": "log4j-core",
      "versionInfo": "2.14.1",
      "downloadLocation": "https://repo1.maven.org/maven2/org/apache/logging/log4j/log4j-core/2.14.1/log4j-core-2.14.1.jar",
      "licenseConcluded": "Apache-2.0",
      "checksums": [
        {"algorithm": "SHA256", "checksumValue": "a1b2c3d4..."}
      ]
    }
  ],
  "relationships": [
    {
      "spdxElementId": "SPDXRef-DOCUMENT",
      "relationshipType": "DESCRIBES",
      "relatedSpdxElement": "SPDXRef-Package-log4j-core"
    }
  ]
}
```

### 2.3 Format Recommendation

**Use CycloneDX if**:
- Primary use case is vulnerability management
- Need compact format for CI/CD pipelines
- Using security tools (Dependency-Track, Grype, Trivy)
- Rapid iteration and tooling updates are important

**Use SPDX if**:
- Primary use case is license compliance
- Need ISO/IEC standard for regulatory acceptance
- Working in regulated industries (finance, healthcare, government)
- Legal review and licensing analysis are critical

**Use Both if**:
- Need comprehensive coverage (security + licensing)
- Have tooling that supports both formats
- Want maximum compatibility with vendor tools

**AlDeci Recommendation**: **CycloneDX** for security-first organizations, **SPDX** for compliance-first organizations, **both** for comprehensive coverage.

---

## 3. SBOM Generation Tools

### 3.1 Tool Comparison

| Tool | Formats | Languages | Strengths | Weaknesses |
|------|---------|-----------|-----------|------------|
| **Syft** | CycloneDX, SPDX, GitHub | All (via package managers) | Fast, accurate, multi-format | Limited customization |
| **Trivy** | CycloneDX, SPDX | All + containers | Container scanning, vulnerability detection | Slower than Syft |
| **CycloneDX CLI** | CycloneDX | Java, .NET, Node.js, Python | Official CycloneDX tool | Limited language support |
| **SPDX Tools** | SPDX | All (manual) | Official SPDX tool, validation | Manual process, no automation |
| **Tern** | SPDX | Containers | Deep container analysis | Slow, complex setup |
| **GitHub Dependency Graph** | GitHub Dependency Snapshot | GitHub-hosted repos | Native GitHub integration | GitHub-only, limited format |

### 3.2 Syft (Recommended)

**Installation**:
```bash
curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
```

**Usage**:
```bash
# Generate CycloneDX SBOM
syft . -o cyclonedx-json > sbom.json

# Generate SPDX SBOM
syft . -o spdx-json > sbom.spdx.json

# Generate from Docker image
syft docker:nginx:latest -o cyclonedx-json > nginx-sbom.json

# Generate from directory
syft /path/to/project -o cyclonedx-json > sbom.json

# Generate from archive
syft file:app.tar.gz -o cyclonedx-json > sbom.json
```

**Supported Package Managers**:
- npm (Node.js)
- pip, poetry (Python)
- Maven, Gradle (Java)
- Go modules (Go)
- Cargo (Rust)
- Bundler (Ruby)
- Composer (PHP)
- NuGet (.NET)
- APK, DEB, RPM (Linux packages)

**Performance**:
- Small project (< 100 dependencies): < 5 seconds
- Medium project (100-500 dependencies): 10-20 seconds
- Large project (> 500 dependencies): 30-60 seconds
- Container image: 20-40 seconds

### 3.3 Trivy

**Installation**:
```bash
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin
```

**Usage**:
```bash
# Generate CycloneDX SBOM with vulnerabilities
trivy image --format cyclonedx nginx:latest > nginx-sbom.json

# Generate SPDX SBOM
trivy image --format spdx nginx:latest > nginx-sbom.spdx.json

# Scan filesystem
trivy fs --format cyclonedx /path/to/project > sbom.json

# Scan Git repository
trivy repo --format cyclonedx https://github.com/example/repo > sbom.json
```

**Strengths**:
- Integrated vulnerability scanning
- Container image analysis
- Misconfiguration detection
- Secret scanning

**Use Case**: When you need SBOM + vulnerability scanning in one tool.

### 3.4 CI/CD Integration

**GitHub Actions**:
```yaml
- name: Generate SBOM
  run: |
    curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
    syft . -o cyclonedx-json > sbom.json

- name: Upload SBOM
  uses: actions/upload-artifact@v3
  with:
    name: sbom
    path: sbom.json
```

**GitLab CI**:
```yaml
sbom:
  stage: build
  script:
    - curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
    - syft . -o cyclonedx-json > sbom.json
  artifacts:
    paths:
      - sbom.json
```

**Jenkins**:
```groovy
stage('Generate SBOM') {
    steps {
        sh '''
            curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
            syft . -o cyclonedx-json > sbom.json
        '''
        archiveArtifacts artifacts: 'sbom.json'
    }
}
```

---

## 4. Integration Patterns

### 4.1 Pattern 1: Build-Time SBOM Generation

**Description**: Generate SBOM during build process, before deployment.

**Workflow**:
```
Code → Build → Generate SBOM → Test → Deploy
```

**Implementation**:
```yaml
# .github/workflows/build.yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build application
        run: npm run build
      
      - name: Generate SBOM
        run: syft . -o cyclonedx-json > sbom.json
      
      - name: Push SBOM to AlDeci
        run: |
          curl -X POST https://api.devops.ai/products/aldeci/inputs/sbom \
            -H "Authorization: Bearer ${{ secrets.ALDECI_TOKEN }}" \
            -F "file=@sbom.json" \
            -F "component=${{ github.repository }}" \
            -F "version=${{ github.sha }}"
      
      - name: Deploy
        run: kubectl apply -f k8s/
```

**Pros**:
- SBOM reflects exact build composition
- Blocks deployment if SBOM generation fails
- Simple integration

**Cons**:
- Increases build time
- May slow down CI/CD pipeline

### 4.2 Pattern 2: Post-Deployment SBOM Generation

**Description**: Generate SBOM after deployment, from running containers.

**Workflow**:
```
Code → Build → Deploy → Generate SBOM
```

**Implementation**:
```bash
# Generate SBOM from running container
docker ps --format '{{.Names}}' | while read container; do
    docker export $container | syft -o cyclonedx-json > sbom-$container.json
    
    curl -X POST https://api.devops.ai/products/aldeci/inputs/sbom \
      -H "Authorization: Bearer $ALDECI_TOKEN" \
      -F "file=@sbom-$container.json" \
      -F "component=$container" \
      -F "version=$(docker inspect $container --format '{{.Config.Image}}')"
done
```

**Pros**:
- Doesn't slow down build pipeline
- Reflects actual deployed composition
- Can scan running containers

**Cons**:
- SBOM generated after deployment (security gap)
- Requires access to running containers
- More complex implementation

### 4.3 Pattern 3: Registry-Based SBOM Generation

**Description**: Generate SBOM from container registry, triggered by image push.

**Workflow**:
```
Code → Build → Push to Registry → Generate SBOM
```

**Implementation**:
```python
# registry_sbom_generator.py
import docker
import requests

def watch_registry():
    """Watch container registry for new images"""
    client = docker.from_env()
    
    for event in client.events(decode=True):
        if event['Type'] == 'image' and event['Action'] == 'push':
            image = event['Actor']['Attributes']['name']
            generate_sbom(image)

def generate_sbom(image):
    """Generate SBOM from container image"""
    # Pull image
    client = docker.from_env()
    client.images.pull(image)
    
    # Generate SBOM
    os.system(f"syft {image} -o cyclonedx-json > sbom-{image.replace('/', '-')}.json")
    
    # Push to AlDeci
    with open(f"sbom-{image.replace('/', '-')}.json", 'rb') as f:
        requests.post(
            "https://api.devops.ai/products/aldeci/inputs/sbom",
            headers={"Authorization": f"Bearer {os.getenv('ALDECI_TOKEN')}"},
            files={"file": f},
            data={"component": image, "version": "latest"}
        )
```

**Pros**:
- Centralized SBOM generation
- Works with any CI/CD system
- Doesn't modify existing pipelines

**Cons**:
- Requires registry access
- Additional infrastructure
- Potential delay in SBOM generation

---

## 5. Vulnerability Correlation

### 5.1 SBOM + CVE Correlation

AlDeci automatically correlates SBOM components with CVE data:

**Input**: SBOM with components
```json
{
  "components": [
    {
      "name": "log4j-core",
      "version": "2.14.1",
      "purl": "pkg:maven/org.apache.logging.log4j/log4j-core@2.14.1"
    }
  ]
}
```

**AlDeci Processing**:
1. Extract component identifiers (name, version, purl)
2. Query CVE database for matching vulnerabilities
3. Enrich with EPSS, KEV, version lag
4. Calculate FixOpsRisk score

**Output**: Risk report with vulnerabilities
```json
{
  "component": "log4j-core",
  "version": "2.14.1",
  "vulnerabilities": [
    {
      "cve_id": "CVE-2021-44228",
      "cvss_score": 10.0,
      "epss_percentile": 0.99876,
      "kev_flag": true,
      "fixops_risk_score": 92,
      "remediation": "Upgrade to log4j-core 2.23.1"
    }
  ]
}
```

### 5.2 SBOM + SARIF Correlation

AlDeci correlates SBOM components with SARIF scan findings:

**Scenario**: SAST tool finds SQL injection in code that uses vulnerable library

**SBOM**:
```json
{
  "components": [
    {"name": "mysql-connector-java", "version": "8.0.25"}
  ]
}
```

**SARIF**:
```json
{
  "runs": [{
    "results": [{
      "ruleId": "sql-injection",
      "message": {"text": "SQL injection vulnerability"},
      "locations": [{
        "physicalLocation": {
          "artifactLocation": {"uri": "src/db/query.java"},
          "region": {"startLine": 42}
        }
      }]
    }]
  }]
}
```

**AlDeci Correlation**:
- Links SARIF finding to SBOM component (mysql-connector-java)
- Identifies that vulnerable library is used in vulnerable code path
- Increases risk score due to combined risk
- Generates remediation guidance (upgrade library + fix code)

### 5.3 Transitive Dependency Analysis

AlDeci analyzes transitive dependencies for hidden risks:

**Direct Dependency**: `spring-boot-starter-web 2.5.0`

**Transitive Dependencies**:
```
spring-boot-starter-web 2.5.0
├── spring-web 5.3.7
│   └── spring-core 5.3.7
├── spring-webmvc 5.3.7
│   └── spring-context 5.3.7
│       └── spring-aop 5.3.7
└── tomcat-embed-core 9.0.46
    └── tomcat-annotations-api 9.0.46
```

**Vulnerability**: `spring-core 5.3.7` has CVE-2022-22965 (Spring4Shell)

**AlDeci Analysis**:
- Identifies vulnerable transitive dependency
- Calculates dependency path (spring-boot-starter-web → spring-web → spring-core)
- Recommends upgrading direct dependency (spring-boot-starter-web 2.5.0 → 2.7.0)
- Verifies fix resolves transitive vulnerability

---

## 6. Supply Chain Risk Management

### 6.1 Version Lag Tracking

AlDeci tracks version lag for all SBOM components:

**Calculation**:
```python
version_lag_days = (latest_version_release_date - current_version_release_date).days
```

**Example**:
```json
{
  "component": "log4j-core",
  "current_version": "2.14.1",
  "current_version_release_date": "2021-03-28",
  "latest_version": "2.23.1",
  "latest_version_release_date": "2024-11-14",
  "version_lag_days": 1326,
  "risk_level": "CRITICAL"
}
```

**Risk Thresholds**:
- Lag < 30 days: **Low risk** (actively maintained)
- Lag 30-90 days: **Moderate risk** (minor version behind)
- Lag 90-180 days: **High risk** (major version behind)
- Lag > 180 days: **Critical risk** (abandoned or neglected)

### 6.2 Dependency Health Scoring

AlDeci scores dependency health based on multiple signals:

**Signals**:
1. **Version Lag**: Days behind latest version
2. **Maintenance Activity**: Commit frequency, issue response time
3. **Security Posture**: Known vulnerabilities, security advisories
4. **Community Health**: Contributors, stars, forks
5. **License Risk**: License type, compatibility

**Health Score Formula**:
```python
health_score = (
    0.30 * version_freshness_score +
    0.25 * maintenance_activity_score +
    0.25 * security_posture_score +
    0.15 * community_health_score +
    0.05 * license_risk_score
)
```

**Example**:
```json
{
  "component": "lodash",
  "version": "4.17.21",
  "health_score": 85,
  "health_level": "GOOD",
  "signals": {
    "version_freshness": 95,
    "maintenance_activity": 80,
    "security_posture": 90,
    "community_health": 85,
    "license_risk": 100
  }
}
```

### 6.3 Supply Chain Attack Detection

AlDeci detects potential supply chain attacks:

**Detection Signals**:
1. **Typosquatting**: Similar package names (e.g., `lodash` vs `lodahs`)
2. **Malicious Code**: Known malicious packages (e.g., event-stream incident)
3. **Suspicious Behavior**: Unusual network activity, file system access
4. **Maintainer Changes**: Sudden maintainer changes, account takeovers
5. **Dependency Confusion**: Internal package names matching public packages

**Example Alert**:
```json
{
  "alert_type": "typosquatting",
  "component": "lodahs",
  "version": "4.17.21",
  "legitimate_package": "lodash",
  "similarity_score": 0.92,
  "recommendation": "Remove lodahs, use lodash instead",
  "severity": "HIGH"
}
```

---

## 7. Compliance and Audit

### 7.1 SBOM Inventory

AlDeci maintains a centralized SBOM inventory for compliance:

**Inventory Contents**:
- All SBOMs across all applications
- Component catalog (unique components)
- License inventory (all licenses in use)
- Vulnerability summary (all vulnerabilities)
- Version lag report (outdated components)

**Query Examples**:
```bash
# List all applications
aldeci sbom list

# Find all applications using log4j-core
aldeci sbom search --component log4j-core

# Find all applications with GPL licenses
aldeci sbom search --license GPL

# Find all applications with critical vulnerabilities
aldeci sbom search --risk-level critical

# Export SBOM inventory for audit
aldeci sbom export --format csv > sbom-inventory.csv
```

### 7.2 Audit Reports

AlDeci generates audit-ready SBOM reports:

**Report Types**:
1. **Component Inventory Report**: All components across all applications
2. **License Compliance Report**: All licenses, compliance status
3. **Vulnerability Report**: All vulnerabilities, remediation status
4. **Version Lag Report**: Outdated components, upgrade recommendations
5. **Supply Chain Risk Report**: High-risk dependencies, attack surface

**Example Report**:
```
SBOM Audit Report
Generated: 2025-01-26
Organization: Example Corp

SUMMARY
- Total Applications: 487
- Total Components: 12,847
- Unique Components: 2,145
- Total Vulnerabilities: 1,247
- Critical Vulnerabilities: 18

COMPONENT INVENTORY
- Direct Dependencies: 3,421
- Transitive Dependencies: 9,426
- Average Dependency Depth: 4.2

LICENSE COMPLIANCE
- Permissive Licenses: 11,234 (87.4%)
- Copyleft Licenses: 1,456 (11.3%)
- Proprietary Licenses: 157 (1.2%)
- Unknown Licenses: 0 (0.0%)

VULNERABILITY SUMMARY
- Critical (FixOpsRisk ≥ 85): 18
- High (FixOpsRisk 60-84): 142
- Moderate (FixOpsRisk 40-59): 487
- Low (FixOpsRisk < 40): 600

VERSION LAG
- Current (< 30 days): 9,645 (75.1%)
- Minor Lag (30-90 days): 2,312 (18.0%)
- Major Lag (90-180 days): 642 (5.0%)
- Critical Lag (> 180 days): 248 (1.9%)

SUPPLY CHAIN RISK
- High-Risk Dependencies: 48
- Typosquatting Alerts: 3
- Malicious Package Alerts: 0
- Maintainer Change Alerts: 12
```

---

## 8. Best Practices

### 8.1 SBOM Generation

1. **Generate on every build** - Don't wait for releases
2. **Include transitive dependencies** - Full dependency tree
3. **Use consistent format** - CycloneDX or SPDX, not both
4. **Validate SBOMs** - Check for completeness and accuracy
5. **Version SBOMs** - Track SBOM changes over time

### 8.2 SBOM Storage

1. **Store with artifacts** - Alongside container images, binaries
2. **Use artifact repositories** - Artifactory, Nexus, Harbor
3. **Enable versioning** - Track SBOM history
4. **Implement retention** - 7 years for compliance
5. **Encrypt at rest** - Protect sensitive component data

### 8.3 SBOM Analysis

1. **Automate vulnerability correlation** - Don't rely on manual checks
2. **Track version lag** - Identify outdated components
3. **Monitor supply chain risk** - Detect malicious packages
4. **Analyze license compliance** - Avoid license violations
5. **Generate regular reports** - Weekly vulnerability reports

### 8.4 SBOM Governance

1. **Define SBOM policy** - What components are allowed/blocked
2. **Enforce in CI/CD** - Block builds with policy violations
3. **Maintain component catalog** - Approved components list
4. **Review regularly** - Quarterly SBOM audits
5. **Train developers** - SBOM awareness and best practices

---

## 9. Troubleshooting

### 9.1 Common Issues

**Issue**: Syft fails to detect dependencies

**Solution**:
```bash
# Ensure package manager files are present
ls package.json  # Node.js
ls requirements.txt  # Python
ls pom.xml  # Java Maven
ls go.mod  # Go

# Run Syft with verbose logging
syft . -o cyclonedx-json -vv

# Check Syft version (update if old)
syft version
curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
```

**Issue**: SBOM missing transitive dependencies

**Solution**:
```bash
# Ensure dependency lock files are present
ls package-lock.json  # Node.js
ls poetry.lock  # Python Poetry
ls Cargo.lock  # Rust

# Install dependencies before generating SBOM
npm install  # Node.js
pip install -r requirements.txt  # Python
go mod download  # Go

# Generate SBOM
syft . -o cyclonedx-json > sbom.json
```

**Issue**: AlDeci rejects SBOM (invalid format)

**Solution**:
```bash
# Validate SBOM format
cyclonedx-cli validate --input-file sbom.json

# Check SBOM schema version
jq '.specVersion' sbom.json

# Regenerate with correct format
syft . -o cyclonedx-json=version=1.5 > sbom.json
```

**Issue**: SBOM too large (> 100 MB)

**Solution**:
```bash
# Exclude test dependencies
syft . -o cyclonedx-json --exclude '**/test/**' > sbom.json

# Compress SBOM
gzip sbom.json

# Push compressed SBOM
curl -X POST https://api.devops.ai/products/aldeci/inputs/sbom \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Encoding: gzip" \
  --data-binary @sbom.json.gz
```

---

**DevOps.ai** | Sydney, Australia | https://devops.ai | contact@devops.ai

© 2025 DevOps.ai. All rights reserved.
