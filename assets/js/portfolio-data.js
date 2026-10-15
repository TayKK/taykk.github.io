/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION — TAY Kai Keng
 * ============================================================================
 * 
 * Centralised data store. Easily add, edit, or remove:
 * - Domain Experience & Growth Map
 * - Certifications (Proctored, Online, Course) with Types, Domains & Validity
 * - Work Career Progression (Milestones & Promotions)
 * - Academic Progression (Degrees & Honours)
 * 
 * No personal email address or phone number is published.
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "TAY Kai Keng",
    headline: "Cybersecurity Practitioner & Enthusiast | DFIR, Threat Hunting & Applied AI Research",
    tagline: "Never stop learning. Knowledge is power.",
    callsign: "KK",
    location: "Singapore",
    status: "ACTIVE PRACTITIONER",
    statusDetail: "Incident response, threat hunting, and malware research",
    linkedinUrl: "https://sg.linkedin.com/in/tay-kai-keng",
    githubUrl: "https://github.com/TayKK",
    credlyUrl: "https://www.credly.com/users/tay-kai-keng/badges/credly",
    bio: "I’m a Singapore-based Cyber Hunt & Incident Response Consultant at Ensign InfoSecurity. My professional foundation is digital forensics and incident response (DFIR), including incident triage, computer forensics, and breach timeline reconstruction. I co-authored BinImg2Vec and continue to broaden my learning across cybersecurity, cloud, and AI."
  },

  // Documented experience, not a percentage of mastery. See the shared rubric.
  radarLevels: [
    { label: "Not yet documented", description: "No specific work, project, or training evidence listed in this portfolio." },
    { label: "Study & training", description: "Relevant education, coursework, or certification; applied delivery is not yet described." },
    { label: "Applied work / research", description: "A specific project, research contribution, or supporting work activity is described." },
    { label: "Professional practice", description: "Repeated practice is described as a core responsibility of a professional role." }
  ],
  competencyRadar: [
    {
      id: "secops", domain: "Security Operations & Threat Intelligence", short: "SecOps", level: 3,
      scope: "Monitoring, detection engineering, threat hunting, and intelligence analysis.",
      evidence: "Cyber Hunt & Incident Response roles at Ensign InfoSecurity, with threat hunting listed as a current responsibility. Dedicated intelligence outputs are not yet described.",
      source: "#progression", sourceLabel: "Career experience",
      nextStep: "Publish an anonymised hunt case study connecting a hypothesis, telemetry, detection logic, and findings."
    },
    {
      id: "dfir", domain: "Incident Response & Digital Forensics", short: "DFIR", level: 3,
      scope: "Incident handling, host and memory forensics, investigation, and recovery planning.",
      evidence: "Ensign incident response and forensic investigation roles, including triage and breach timeline reconstruction; supported by GCFE and Autopsy training.",
      source: "#progression", sourceLabel: "Career experience",
      nextStep: "Document a sanitized investigation timeline and the reasoning behind containment and recovery decisions."
    },
    {
      id: "networks", domain: "Network & Endpoint Security", short: "Networks", level: 1,
      scope: "Network segmentation, operating system hardening, endpoint controls, and secure connectivity.",
      evidence: "Network Security diploma, LFCA, and prior CCNA certification (expired October 2024). A specific hardening deployment is not yet documented.",
      source: "#certs", sourceLabel: "Certifications & status",
      nextStep: "Build a segmented network lab and record firewall, Linux hardening, and endpoint detection validation."
    },
    {
      id: "cloud", domain: "Cloud & Container Security", short: "Cloud", level: 1,
      scope: "Cloud configuration, workload protection, Kubernetes, and infrastructure as code security.",
      evidence: "Google Cloud ACE, Kubernetes KCNA, and Azure Fundamentals credentials. A deployed cloud security project is not yet described.",
      source: "#certs", sourceLabel: "Certifications & status",
      nextStep: "Publish a small GCP or Kubernetes lab with least privilege, workload policies, and audit logging checks."
    },
    {
      id: "iam", domain: "Identity & Access Management", short: "IAM", level: 1,
      scope: "Authentication, authorization, federation, privileged access, and identity lifecycle.",
      evidence: "SC-900 and Google Cloud ACE provide related foundations. A dedicated IAM implementation is not yet described.",
      source: "#certs", sourceLabel: "Certifications & status",
      nextStep: "Demonstrate SSO, MFA, role-based access, and joiner/mover/leaver controls in a documented lab."
    },
    {
      id: "appsec", domain: "Application & Software Security", short: "AppSec", level: 1,
      scope: "Secure development, API security, code review, DevSecOps, and software supply chains.",
      evidence: "Certified API Security Analyst and an Information Security degree. A specific secure development or API assessment project is not yet documented.",
      source: "#certs", sourceLabel: "Certifications & status",
      nextStep: "Assess an intentionally vulnerable API in a lab, fix authorization flaws, and add regression tests."
    },
    {
      id: "offensive", domain: "Offensive Security & Vulnerability Assessment", short: "Offensive", level: 0,
      scope: "Vulnerability discovery, penetration testing, adversary emulation, and remediation validation.",
      evidence: "No dedicated penetration test, vulnerability assessment, or adversary emulation project is currently described. A training provider's name alone is not evidence of this work.",
      source: null, sourceLabel: null,
      nextStep: "Complete an authorized lab assessment and publish a report with findings, remediation, and retest results."
    },
    {
      id: "data", domain: "Data Security & Privacy", short: "Data", level: 1,
      scope: "Data classification, encryption, key management, loss prevention, and privacy controls.",
      evidence: "Proofpoint DLP Specialist training/certification (expired October 2025). A deployed DLP or privacy program is not yet described.",
      source: "#certs", sourceLabel: "Certifications & status",
      nextStep: "Create a sample data classification scheme and validate DLP, encryption, and retention controls with synthetic data."
    },
    {
      id: "architecture", domain: "Security Architecture & Engineering", short: "Design", level: 1,
      scope: "Threat modelling, secure design, trust boundaries, control selection, and security validation.",
      evidence: "MS in Security by Design, with secure architecture and formal verification listed in the academic profile. A specific design artefact is not yet shown.",
      source: "#progression", sourceLabel: "Academic background",
      nextStep: "Publish a threat model and architecture decision record that connect risks to controls and validation."
    },
    {
      id: "grc", domain: "Governance, Risk & Compliance", short: "GRC", level: 2,
      scope: "Risk assessment, policy, assurance, regulatory obligations, and resilience governance.",
      evidence: "Maturity assessments are listed in the Ensign internship, supported by GAICC ISO/IEC 42001 Lead Implementer and SC-900 credentials. End-to-end program ownership is not described.",
      source: "#progression", sourceLabel: "Career experience",
      nextStep: "Develop a sample risk register and control assessment with evidence requirements and treatment decisions."
    },
    {
      id: "ot", domain: "OT, ICS & IoT Security", short: "OT / IoT", level: 1,
      scope: "Industrial and cyber-physical systems, device security, safety-aware controls, and resilience.",
      evidence: "Cyber-physical systems study and OPSWAT Introduction to CIP training (expired June 2025). The career profile mentions this area without a specific deployment or assessment.",
      source: "#certs", sourceLabel: "Certifications & status",
      nextStep: "Model a simulated industrial network and document segmentation, monitoring, and a safety-aware incident playbook."
    },
    {
      id: "ai", domain: "AI & Machine Learning Security", short: "AI / ML", level: 2,
      scope: "AI for security, protection of AI systems, model evaluation, and AI governance.",
      evidence: "BinImg2Vec co-authorship demonstrates applied AI for malware classification. CLLMSP and AI governance credentials support learning about securing AI; the paper does not establish production LLM security experience.",
      source: "#research", sourceLabel: "BinImg2Vec publication",
      nextStep: "Extend the research portfolio with a reproducible AI security evaluation covering threat models, test cases, and mitigations."
    }
  ],

  // Evolution trajectory steps
  journey: [
    {
      phase: "PHASE 01",
      badge: "ORIGINS",
      icon: "🛡️",
      title: "Blue Team Defence & DFIR",
      summary: "Professional experience at Ensign InfoSecurity includes incident triage, computer forensics, breach timeline reconstruction, and threat hunting.",
      tags: ["Threat Hunting", "Incident Response", "GCFE", "Forensics"]
    },
    {
      phase: "PHASE 02",
      badge: "SYSTEMS",
      icon: "☁️",
      title: "Cloud & Systems Infrastructure",
      summary: "Building cloud and systems foundations through Google Cloud ACE, Linux LFCA, and Kubernetes KCNA. The next step is to demonstrate these foundations through documented security projects.",
      tags: ["Google Cloud ACE", "Kubernetes KCNA", "Linux LFCA", "Network CCNA"]
    },
    {
      phase: "PHASE 03",
      badge: "APPLICATIONS",
      icon: "⚔️",
      title: "Application & API Security",
      summary: "Developing application security knowledge through the Certified API Security Analyst credential. Focus areas include API authorisation and the OWASP API Top 10; practical assessment evidence is a development goal.",
      tags: ["API Security", "Red Team Leaders", "OWASP API Top 10", "ISC2 CC"]
    },
    {
      phase: "PHASE 04",
      badge: "FRONTIER",
      icon: "🧠",
      title: "AI Security & Governance",
      summary: "Co-authored BinImg2Vec, research on self-supervised malware classification published at ICAIC 2022. Continuing study includes AWS AI, LLM security (CLLMSP), and GAICC ISO/IEC 42001 AI governance.",
      tags: ["BinImg2Vec", "AWS AI", "LLM Security", "ISO/IEC 42001"]
    }
  ],

  // Flagship Research Paper
  research: {
    title: "BinImg2Vec: Augmenting Malware Binary Image Classification with Data2Vec",
    venue: "1st Int'l Conference on AI in Cybersecurity (ICAIC), 2022",
    arxivId: "arXiv:2209.00782 [cs.CR]",
    arxivUrl: "https://doi.org/10.48550/arXiv.2209.00782",
    authors: "TAY Kai Keng, Lee Joon Sern, Chua Zong Fu",
    abstract: "BinImg2Vec explores malware binary-image classification with Data2Vec, connecting alternative representations of malware with machine learning. The publication is the reference for the method, evaluation, and findings.",
    contribution: "My involvement included gathering malware samples, with exposure to malware repositories and cyber threat intelligence sources during that process.",
    learning: "The research broadened how I think about malware: beyond the binary itself, other representations can reveal different patterns. That experience continues to shape my interest in cybersecurity and AI research.",
    highlights: [
      { label: "Research focus", desc: "Malware binary-image classification using Data2Vec." },
      { label: "My involvement", desc: "Malware sample gathering, with exposure to repositories and cyber threat intelligence sources." },
      { label: "What I learned", desc: "Alternative representations offer another way to investigate patterns in malware." }
    ]
  },

  /**
   * ==========================================================================
   * CERTIFICATIONS & TRAINING
   * Enriched with:
   * - category: 'proctored' | 'online' | 'course'
   * - domain: 'dfir' | 'cloud' | 'ai' | 'appsec' | 'systems' | 'grc'
   * - vendor: issuer mark key
   * ==========================================================================
   */
  certifications: [
    // --- PROCTORED INDUSTRY CERTIFICATIONS ---
    {
      id: "gcfe",
      badgeImage: "assets/img/badges/gcfe.png",
      credentialUrl: "https://www.credly.com/badges/4b7ef970-c93e-4f66-8996-efe75db0f285/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2023-01-20",
      expiresOn: "2027-01-31",
      title: "GIAC Certified Forensic Examiner (GCFE)",
      issuer: "GIAC Certifications",
      vendor: "giac",
      category: "proctored",
      domain: "dfir",
      issued: "Jan 2023",
      expires: "Jan 2027",
      status: "active",
      credentialId: null,
      skills: ["Digital Forensics", "Incident Response", "Windows Artifacts"]
    },
    {
      id: "gcp-ace",
      badgeImage: "assets/img/badges/gcp-ace.png",
      credentialUrl: "https://www.credly.com/badges/b595fc74-2d72-473d-a954-4119cc017043/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2026-01-30",
      expiresOn: "2029-01-30",
      title: "Associate Cloud Engineer (ACE)",
      issuer: "Google Cloud",
      vendor: "google",
      category: "proctored",
      domain: "cloud",
      issued: "Jan 2026",
      expires: "Jan 2029",
      status: "active",
      credentialId: null,
      skills: ["Google Cloud Platform (GCP)", "IAM Hardening", "Cloud Operations"]
    },
    {
      id: "kcna",
      badgeImage: "assets/img/badges/kcna.png",
      credentialUrl: "https://www.credly.com/badges/86258d49-d2c0-4f88-b66a-756bf20a7c92/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2025-08-13",
      expiresOn: "2027-08-14",
      title: "Kubernetes and Cloud Native Associate (KCNA)",
      issuer: "The Linux Foundation & CNCF",
      vendor: "cncf",
      category: "proctored",
      domain: "cloud",
      issued: "Aug 2025",
      expires: "Aug 2027",
      status: "active",
      credentialId: "LF-mggjw6ljtz",
      skills: ["Kubernetes", "Container Security", "Cloud Native Architecture"]
    },
    {
      id: "lfca",
      badgeImage: "assets/img/badges/lfca.png",
      credentialUrl: "https://www.credly.com/badges/a000ee6a-f1d0-461e-8e57-bbf47ff1b456/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2025-07-27",
      expiresOn: "2027-07-28",
      title: "Linux Foundation Certified IT Associate (LFCA)",
      issuer: "The Linux Foundation",
      vendor: "linuxfoundation",
      category: "proctored",
      domain: "systems",
      issued: "Jul 2025",
      expires: "Jul 2027",
      status: "active",
      credentialId: "LF-yocaxsswbj",
      skills: ["Linux Systems", "OS Security", "Command Line Administration"]
    },
    {
      id: "aws-ai",
      badgeImage: "assets/img/badges/aws-ai.png",
      credentialUrl: "https://www.credly.com/badges/1307d755-0882-4c9d-9904-e2a37b71cc4c/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2026-09-10",
      expiresOn: "2029-09-10",
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      vendor: "aws",
      category: "proctored",
      domain: "ai",
      issued: "Sep 2026",
      expires: "Sep 2029",
      status: "active",
      credentialId: null,
      skills: ["Artificial Intelligence (AI)", "Machine Learning", "Model Governance"]
    },
    {
      id: "gaicc-lead",
      title: "GAICC ISO/IEC 42001 Lead Implementer",
      issuer: "Global AI Certification Council (GAICC)",
      vendor: "gaicc",
      category: "proctored",
      domain: "ai",
      issued: "Jun 2026",
      expires: "Jun 2029",
      status: "active",
      credentialId: "KQG-TVX6",
      skills: ["ISO 42001", "AI Management Systems (AIMS)", "AI Risk Frameworks"]
    },
    {
      id: "isc2-cc",
      badgeImage: "assets/img/badges/isc2-cc.png",
      credentialUrl: "https://www.credly.com/badges/58f91df2-bf9f-4178-864e-95583d1d86ca/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2024-03-14",
      expiresOn: "2027-03-31",
      title: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      vendor: "isc2",
      category: "proctored",
      domain: "systems",
      issued: "Mar 2024",
      expires: "Mar 2027",
      status: "active",
      credentialId: null,
      skills: ["Cybersecurity Concepts", "Network Security", "Security Operations"]
    },
    {
      id: "ms-sci",
      title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
      issuer: "Microsoft",
      vendor: "microsoft",
      category: "proctored",
      domain: "grc",
      issued: "Oct 2026",
      expires: "No Expiration",
      status: "active",
      credentialId: "96671412C4044BC0",
      skills: ["Microsoft Entra ID", "Zero Trust", "Compliance Management"]
    },
    {
      id: "ms-azure-fund",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      vendor: "microsoft",
      category: "proctored",
      domain: "cloud",
      issued: "Jun 2025",
      expires: "No Expiration",
      status: "active",
      credentialId: "2B1CA19DC9FAAF11",
      skills: ["Microsoft Azure", "Cloud Services", "Security & Governance"]
    },
    {
      id: "ms-azure-ai",
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      vendor: "microsoft",
      category: "proctored",
      domain: "ai",
      issued: "May 2024",
      expires: "No Expiration",
      status: "active",
      credentialId: "95773574DAA56558",
      skills: ["Microsoft Azure", "Artificial Intelligence", "Cognitive Services"]
    },
    {
      id: "aws-ccp",
      badgeImage: "assets/img/badges/aws-ccp.png",
      credentialUrl: "https://www.credly.com/badges/ad9590cf-2978-4b29-8918-f63b8b505ebc/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2023-01-26",
      expiresOn: "2026-01-26",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      vendor: "aws",
      category: "proctored",
      domain: "cloud",
      issued: "Jan 2023",
      expires: "Jan 2026",
      status: "expired",
      credentialId: null,
      skills: ["Cloud Computing", "AWS Infrastructure", "Security & Compliance"]
    },
    {
      id: "ccna",
      badgeImage: "assets/img/badges/ccna.png",
      credentialUrl: "https://www.credly.com/badges/1e566619-6b87-4e74-ac8e-0de165a355e9/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2021-10-21",
      expiresOn: "2024-10-21",
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      vendor: "cisco",
      category: "proctored",
      domain: "systems",
      issued: "Oct 2021",
      expires: "Oct 2024",
      status: "expired",
      credentialId: null,
      skills: ["Computer Networking", "Routing & Switching", "Network Security"]
    },

    // --- ONLINE / ASSESSMENT-BASED CERTIFICATIONS ---
    {
      id: "apisec",
      badgeImage: "assets/img/badges/apisec.png",
      credentialUrl: "https://www.credly.com/badges/bd7fc63c-dc25-4d59-b115-009ee89c2d59/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2026-02-05",
      expiresOn: null,
      title: "Certified API Security Analyst",
      issuer: "APIsec University",
      vendor: "apisec",
      category: "online",
      domain: "appsec",
      issued: "Feb 2026",
      expires: "No Expiration",
      status: "active",
      credentialId: null,
      skills: ["API Security", "OWASP API Top 10", "Broken Object Authorization"]
    },
    {
      id: "cllmsp",
      title: "Certified LLM Security Professional (CLLMSP)",
      issuer: "Red Team Leaders",
      vendor: "redteam",
      category: "online",
      domain: "ai",
      issued: "Jun 2026",
      expires: "No Expiration",
      status: "active",
      credentialId: "fee0cc00914258ec",
      skills: ["Large Language Models (LLM)", "Prompt Injection", "Model Risk"]
    },
    {
      id: "ccep",
      title: "Certified Cybersecurity Educator Professional (CCEP)",
      issuer: "Red Team Leaders",
      vendor: "redteam",
      category: "online",
      domain: "grc",
      issued: "Jun 2026",
      expires: "No Expiration",
      status: "active",
      credentialId: "3fdc75e04c87bf82",
      skills: ["Education", "Security Training", "Curriculum Development"]
    },
    {
      id: "proofpoint-dlp",
      badgeImage: "assets/img/badges/proofpoint-dlp.png",
      credentialUrl: "https://www.credly.com/badges/1ba2ca51-0aaa-49c2-9871-7e39c26ae13c/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2024-10-01",
      expiresOn: "2025-10-01",
      title: "Proofpoint Certified DLP Specialist 2024",
      issuer: "Proofpoint",
      vendor: "proofpoint",
      category: "online",
      domain: "appsec",
      issued: "Oct 2024",
      expires: "Oct 2025",
      status: "expired",
      credentialId: null,
      skills: ["Data Loss Prevention (DLP)", "Insider Threat", "Data Protection"]
    },
    {
      id: "opswat-cip",
      badgeImage: "assets/img/badges/opswat-cip.png",
      credentialUrl: "https://www.credly.com/badges/daf7df74-062a-4983-85fb-0d2bd722094c/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2024-06-09",
      expiresOn: "2025-06-09",
      title: "Introduction to CIP (Critical Infrastructure Protection)",
      issuer: "OPSWAT Academy",
      vendor: "opswat",
      category: "online",
      domain: "systems",
      issued: "Jun 2024",
      expires: "Jun 2025",
      status: "expired",
      credentialId: "OW8Pq6P0Hw",
      skills: ["Cyber-Physical Systems", "OT/ICS Security", "Infrastructure Defence"]
    },

    // --- COURSE CERTIFICATIONS & SPECIALISATIONS ---
    {
      id: "cisco-cybersecurity-essentials",
      badgeImage: "assets/img/badges/cisco-cybersecurity-essentials.png",
      credentialUrl: "https://www.credly.com/badges/b50ac337-458c-4037-a4e1-e4f9e3d801b7/public_url",
      credentialChecked: "2026-10-16",
      issuedOn: "2023-08-27",
      expiresOn: null,
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      vendor: "cisco",
      category: "course",
      domain: "systems",
      issued: "Aug 2023",
      expires: "No Expiration",
      status: "active",
      skills: ["Network Security", "Encryption", "Confidentiality", "Integrity", "Availability"]
    },
    {
      id: "google-it-support",
      badgeImage: "assets/img/badges/google-it-support.png",
      credentialUrl: "https://www.credly.com/badges/7ee715db-7afa-4498-becf-258698b1bb1e/public_url",
      credentialChecked: "2026-10-15",
      issuedOn: "2023-08-27",
      expiresOn: null,
      title: "Google IT Support Specialization",
      issuer: "Coursera / Google",
      vendor: "googlecourse",
      category: "course",
      domain: "systems",
      issued: "Aug 2023",
      expires: "No Expiration",
      status: "active",
      credentialId: "94L7PWD863RT",
      skills: ["Technical Support", "Networking", "System Administration"]
    },
    {
      id: "ntuc-ml",
      title: "Machine Learning & Advanced Analytics Using Python",
      issuer: "NTUC LearningHub",
      vendor: "ntuc",
      category: "course",
      domain: "ai",
      issued: "Mar 2022",
      expires: "No Expiration",
      status: "active",
      credentialId: null,
      skills: ["Machine Learning", "Python Analytics", "Predictive Modelling"]
    },
    {
      id: "basistech-autopsy",
      title: "Autopsy & Cyber Triage DFIR Training",
      issuer: "BasisTech",
      vendor: "basistech",
      category: "course",
      domain: "dfir",
      issued: "Dec 2020",
      expires: "No Expiration",
      status: "active",
      credentialId: "9gs3piomfo",
      skills: ["Autopsy DFIR", "Digital Forensics", "Triage Analysis"]
    }
  ],

  /**
   * ==========================================================================
   * PROFESSIONAL CAREER PROGRESSION LADDER (WORK)
   * Cybersecurity roles and documented responsibilities
   * ==========================================================================
   */
  workProgression: [
    {
      stage: "STEP 3",
      badge: "▲ PROMOTION",
      badgeType: "promotion",
      role: "Cyber Hunt & Incident Response, Consultant",
      company: "Ensign InfoSecurity",
      location: "Singapore (Hybrid)",
      period: "Mar 2025 — Present",
      isCurrent: true,
      responsibilities: ["Cyber hunt and incident response consulting at Ensign InfoSecurity.", "Focus areas include threat hunting, tabletop exercise simulation, and cyber-physical systems."],
      tags: ["Table-Top Exercise Simulation", "Cyber-Physical Systems", "Threat Hunting Leadership"]
    },
    {
      stage: "STEP 2",
      badge: "▲ PROMOTION",
      badgeType: "promotion",
      role: "Cyber Hunt & Incident Response, Associate Consultant",
      company: "Ensign InfoSecurity",
      location: "Singapore (On-site)",
      period: "Feb 2023 — Feb 2025",
      isCurrent: false,
      responsibilities: ["Incident response triage, computer forensics, and breach timeline reconstruction."],
      tags: ["Incident Response Triage", "Computer Forensics", "Breach Timeline Reconstruction"]
    },
    {
      stage: "STEP 1",
      badge: "● INDUSTRY ENTRY",
      badgeType: "entry",
      role: "Security Engineer & Consultancy Training (Internship)",
      company: "Ensign InfoSecurity",
      location: "Singapore",
      period: "Jan 2022 — Dec 2022",
      isCurrent: false,
      responsibilities: ["Supported cyber investigations and maturity assessments during a security engineering and consultancy internship.", "Co-authored BinImg2Vec, with involvement in gathering malware samples using repositories and threat-intelligence sources."],
      tags: ["BinImg2Vec Co-Author", "Cyber Investigations", "Maturity Assessments"]
    }
  ],

  /**
   * ==========================================================================
   * ACADEMIC PROGRESSION LADDER (EDUCATION)
   * Academic qualifications in security and engineering
   * ==========================================================================
   */
  educationProgression: [
    {
      stage: "LEVEL 3",
      badge: "▲ POSTGRADUATE SUMMIT",
      badgeType: "degree",
      degree: "Master of Science (MS) in Security by Design",
      institution: "Singapore University of Technology and Design (SUTD)",
      period: "Sep 2023 — Oct 2025",
      achievement: "Grade: 4.38 / 5.0",
      isHighest: true,
      tags: ["Cyber-Physical Systems", "Formal Verification", "Secure Architecture"]
    },
    {
      stage: "LEVEL 2",
      badge: "▲ UNDERGRADUATE DEGREE",
      badgeType: "degree",
      degree: "Bachelor of Engineering (B.Eng) in Information & Communications Technology (Information Security)",
      institution: "Singapore Institute of Technology (SIT)",
      period: "Sep 2019 — Dec 2022",
      achievement: "Graduated with Distinction (Second Upper)",
      isHighest: false,
      tags: ["Information Security", "Graduated with Distinction"]
    },
    {
      stage: "LEVEL 1",
      badge: "● DIPLOMA FOUNDATION",
      badgeType: "diploma",
      degree: "Diploma in Computer Engineering (Network Security)",
      institution: "Singapore Polytechnic (SP)",
      period: "2013 — 2016",
      achievement: "Silver Award — SP Engineering Show 2016",
      isHighest: false,
      tags: ["Network Security", "SP Engineering Show 2016 (Silver)"]
    }
  ]
};

// Credential validity uses the listed expiry, with dates evaluated in Singapore.
window.getCredentialStatus = function (credential, now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore", year: "numeric", month: "2-digit", day: "2-digit"
  }).format(now);
  let expiry = credential.expiresOn;
  if (!expiry && credential.expires !== "No Expiration") {
    const parts = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/.exec(credential.expires || "");
    if (parts) {
      const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(parts[1]);
      expiry = new Date(Date.UTC(Number(parts[2]), month + 1, 0)).toISOString().slice(0, 10);
    }
  }
  if (expiry) return today > expiry ? "expired" : "active";
  return credential.category === "course" ? "completed" : credential.status;
};

window.formatCredentialDate = function (iso, fallback) {
  return iso ? new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    timeZone: "UTC", day: "numeric", month: "short", year: "numeric"
  }) : fallback;
};
