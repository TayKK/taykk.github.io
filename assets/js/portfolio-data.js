/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION — KAI KENG TAY
 * ============================================================================
 * 
 * Centralized data store. Easily add, edit, or remove:
 * - Domain Competency Radar Data
 * - Certifications (Proctored, Online, Course) with Levels & Domains
 * - Work Career Progression (Milestones & Promotions)
 * - Academic Progression (Degrees & Honors)
 * 
 * PRIVACY GUARANTEE: Contains zero personal contact PII (no emails, no phone numbers).
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Kai Keng TAY",
    headline: "Cybersecurity Practitioner & AI Security Researcher",
    tagline: "Never stop learning. Knowledge is power.",
    callsign: "TAYKK",
    location: "Singapore",
    status: "ACTIVE PRACTITIONER",
    statusDetail: "Holistic Cyber, Cloud & AI Security",
    linkedinUrl: "https://sg.linkedin.com/in/tay-kai-keng",
    githubUrl: "https://github.com/TayKK",
    bio: "Grounded in Blue Team operations, threat hunting, and digital forensics at Ensign InfoSecurity, I have expanded into a general cybersecurity practitioner and holistic AI security researcher—bridging enterprise defense, cloud-native infrastructure (GCP & Kubernetes), API security, and AI model governance (ISO/IEC 42001)."
  },

  // Domain Competency Spider Web / Radar Data
  competencyRadar: [
    { domain: "DFIR & Threat Ops", score: 94, short: "DFIR", keyCreds: "GCFE • Incident Response Consultant" },
    { domain: "AI Security & AIMS", score: 92, short: "AI-Sec", keyCreds: "BinImg2Vec • ISO 42001 • AWS AI • CLLMSP" },
    { domain: "Cloud & Containers", score: 88, short: "Cloud", keyCreds: "Google Cloud ACE • KCNA • LFCA" },
    { domain: "AppSec & API Defense", score: 85, short: "AppSec", keyCreds: "APIsec Certified • OWASP API Top 10" },
    { domain: "Networks & Systems", score: 87, short: "Systems", keyCreds: "CCNA • Linux LFCA • Cyber-Physical" },
    { domain: "GRC & Architecture", score: 84, short: "GRC", keyCreds: "ISO 42001 Lead • MS SC-900 • Maturity Reviews" }
  ],

  // Evolution trajectory steps
  journey: [
    {
      phase: "PHASE 01",
      badge: "ORIGINS",
      icon: "🛡️",
      title: "Blue Team Defense & DFIR",
      summary: "Grounded in threat hunting, incident response, and forensic examinations at Ensign InfoSecurity. Practical expertise in host forensics, memory triage, and reverse malware analysis.",
      tags: ["Threat Hunting", "Incident Response", "GCFE", "Forensics"]
    },
    {
      phase: "PHASE 02",
      badge: "SYSTEMS",
      icon: "☁️",
      title: "Cloud & Systems Infrastructure",
      summary: "Hardening operating systems and distributed enterprise environments. Validated across Google Cloud (ACE), Linux Systems (LFCA), and Kubernetes (KCNA) to secure cloud-native workloads.",
      tags: ["Google Cloud ACE", "Kubernetes KCNA", "Linux LFCA", "Network CCNA"]
    },
    {
      phase: "PHASE 03",
      badge: "APPLICATIONS",
      icon: "⚔️",
      title: "AppSec, API & Red Team Mindset",
      summary: "Understanding adversary tactics to build resilient defenses. Certified API Security Analyst and trained with Red Team Leaders to audit authorization logic and API attack surfaces.",
      tags: ["API Security", "Red Team Leaders", "OWASP API Top 10", "ISC2 CC"]
    },
    {
      phase: "PHASE 04",
      badge: "FRONTIER",
      icon: "🧠",
      title: "AI Security & Governance",
      summary: "Pioneering self-supervised malware detection (BinImg2Vec, published at ICAIC 2022). Certified in AWS AI, LLM Security (CLLMSP), and GAICC ISO/IEC 42001 AI Governance.",
      tags: ["BinImg2Vec", "AWS AI", "LLM Security", "ISO/IEC 42001"]
    }
  ],

  // Flagship Research Paper
  research: {
    title: "BinImg2Vec: Augmenting Malware Binary Image Classification with Data2Vec",
    venue: "1st Int'l Conference on AI in Cybersecurity (ICAIC), 2022",
    arxivId: "arXiv:2209.00782 [cs.CR]",
    arxivUrl: "https://doi.org/10.48550/arXiv.2209.00782",
    authors: "Kai Keng TAY, Lee Joon Sern (Lead Data Scientist, Ensign Labs), Chua Zong Fu (VP, Ensign Consulting)",
    abstract: "Traditional signature detection falls short against obfuscated, polymorphic malware. In this research, we propose a novel self-supervised framework: converting unexecuted raw binary executable files into 2D grayscale pixel representations, then using Data2Vec (Vision Transformer) to learn deep latent contextual representations across the binary landscape.",
    highlights: [
      { label: "Zero Feature Engineering", desc: "Bypasses manual assembly disassembly and heuristics by operating directly on normalized byte matrices." },
      { label: "Self-Supervised Pre-training", desc: "Employs multi-modal masked prediction via Data2Vec, achieving high representation fidelity with limited labeled malware samples." },
      { label: "High-Accuracy Generalization", desc: "Outperforms conventional Convolutional Neural Networks (CNNs) across obfuscated ransomware and Trojan families." }
    ]
  },

  /**
   * ==========================================================================
   * VERIFIED CERTIFICATIONS & ACCREDITATIONS (20 TOTAL)
   * Enriched with:
   * - category: 'proctored' | 'online' | 'course'
   * - level: 'advanced' | 'intermediate' | 'foundational'
   * - domain: 'dfir' | 'cloud' | 'ai' | 'appsec' | 'systems' | 'grc'
   * - vendorLogo: logo icon key
   * ==========================================================================
   */
  certifications: [
    // --- (1) PROCTORED INDUSTRY CERTIFICATIONS ---
    {
      id: "gcfe",
      title: "GIAC Certified Forensic Examiner (GCFE)",
      issuer: "GIAC Certifications",
      vendor: "giac",
      category: "proctored",
      level: "advanced",
      domain: "dfir",
      issued: "Jan 2023",
      expires: "Jan 2027",
      status: "active",
      credentialId: null,
      skills: ["Digital Forensics", "Incident Response", "Windows Artifacts"]
    },
    {
      id: "gcp-ace",
      title: "Associate Cloud Engineer (ACE)",
      issuer: "Google Cloud",
      vendor: "google",
      category: "proctored",
      level: "intermediate",
      domain: "cloud",
      issued: "Jan 2026",
      expires: "Jan 2029",
      status: "active",
      credentialId: null,
      skills: ["Google Cloud Platform (GCP)", "IAM Hardening", "Cloud Operations"]
    },
    {
      id: "kcna",
      title: "Kubernetes and Cloud Native Associate (KCNA)",
      issuer: "The Linux Foundation & CNCF",
      vendor: "linuxfoundation",
      category: "proctored",
      level: "intermediate",
      domain: "cloud",
      issued: "Aug 2025",
      expires: "Aug 2027",
      status: "active",
      credentialId: "LF-mggjw6ljtz",
      skills: ["Kubernetes", "Container Security", "Cloud Native Architecture"]
    },
    {
      id: "lfca",
      title: "Linux Foundation Certified IT Associate (LFCA)",
      issuer: "The Linux Foundation",
      vendor: "linuxfoundation",
      category: "proctored",
      level: "foundational",
      domain: "systems",
      issued: "Jul 2025",
      expires: "Jul 2027",
      status: "active",
      credentialId: "LF-yocaxsswbj",
      skills: ["Linux Systems", "OS Security", "Command Line Administration"]
    },
    {
      id: "aws-ai",
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      vendor: "aws",
      category: "proctored",
      level: "foundational",
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
      level: "advanced",
      domain: "ai",
      issued: "Jun 2026",
      expires: "Jun 2029",
      status: "active",
      credentialId: "KQG-TVX6",
      skills: ["ISO 42001", "AI Management Systems (AIMS)", "AI Risk Frameworks"]
    },
    {
      id: "isc2-cc",
      title: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      vendor: "isc2",
      category: "proctored",
      level: "foundational",
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
      level: "foundational",
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
      level: "foundational",
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
      level: "foundational",
      domain: "ai",
      issued: "May 2024",
      expires: "No Expiration",
      status: "active",
      credentialId: "95773574DAA56558",
      skills: ["Microsoft Azure", "Artificial Intelligence", "Cognitive Services"]
    },
    {
      id: "aws-ccp",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      vendor: "aws",
      category: "proctored",
      level: "foundational",
      domain: "cloud",
      issued: "Jan 2023",
      expires: "Jan 2026",
      status: "expired",
      credentialId: null,
      skills: ["Cloud Computing", "AWS Infrastructure", "Security & Compliance"]
    },
    {
      id: "ccna",
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      vendor: "cisco",
      category: "proctored",
      level: "intermediate",
      domain: "systems",
      issued: "Oct 2021",
      expires: "Oct 2024",
      status: "expired",
      credentialId: null,
      skills: ["Computer Networking", "Routing & Switching", "Network Security"]
    },

    // --- (2) ONLINE / ASSESSMENT-BASED CERTIFICATIONS ---
    {
      id: "apisec",
      title: "Certified API Security Analyst",
      issuer: "APIsec University",
      vendor: "apisec",
      category: "online",
      level: "intermediate",
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
      level: "advanced",
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
      level: "intermediate",
      domain: "grc",
      issued: "Jun 2026",
      expires: "No Expiration",
      status: "active",
      credentialId: "3fdc75e04c87bf82",
      skills: ["Education", "Security Training", "Curriculum Development"]
    },
    {
      id: "proofpoint-dlp",
      title: "Proofpoint Certified DLP Specialist 2024",
      issuer: "Proofpoint",
      vendor: "proofpoint",
      category: "online",
      level: "intermediate",
      domain: "appsec",
      issued: "Oct 2024",
      expires: "Oct 2025",
      status: "expired",
      credentialId: null,
      skills: ["Data Loss Prevention (DLP)", "Insider Threat", "Data Protection"]
    },
    {
      id: "opswat-cip",
      title: "Introduction to CIP (Critical Infrastructure Protection)",
      issuer: "OPSWAT Academy",
      vendor: "opswat",
      category: "online",
      level: "intermediate",
      domain: "systems",
      issued: "Jun 2024",
      expires: "May 2025",
      status: "expired",
      credentialId: "OW8Pq6P0Hw",
      skills: ["Cyber-Physical Systems", "OT/ICS Security", "Infrastructure Defense"]
    },

    // --- (3) COURSE CERTIFICATIONS & SPECIALIZATIONS ---
    {
      id: "google-it-support",
      title: "Google IT Support Specialization",
      issuer: "Coursera / Google",
      vendor: "coursera",
      category: "course",
      level: "foundational",
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
      level: "intermediate",
      domain: "ai",
      issued: "Mar 2022",
      expires: "No Expiration",
      status: "active",
      credentialId: null,
      skills: ["Machine Learning", "Python Analytics", "Predictive Modeling"]
    },
    {
      id: "basistech-autopsy",
      title: "Autopsy & Cyber Triage DFIR Training",
      issuer: "BasisTech",
      vendor: "basistech",
      category: "course",
      level: "intermediate",
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
   * High-impact progression stepper (No text block descriptions)
   * ==========================================================================
   */
  workProgression: [
    {
      stage: "STEP 4",
      badge: "▲ PROMOTION",
      badgeType: "promotion",
      role: "Cyber Hunt & Incident Response, Consultant",
      company: "Ensign InfoSecurity",
      location: "Singapore (Hybrid)",
      period: "Mar 2025 — Present",
      isCurrent: true,
      tags: ["Table-Top Exercise Simulation", "Cyber-Physical Systems", "Threat Hunting Leadership"]
    },
    {
      stage: "STEP 3",
      badge: "▲ PROMOTION",
      badgeType: "promotion",
      role: "Cyber Hunt & Incident Response, Associate Consultant",
      company: "Ensign InfoSecurity",
      location: "Singapore (On-site)",
      period: "Feb 2023 — Feb 2025",
      isCurrent: false,
      tags: ["Incident Response Triage", "Computer Forensics", "Breach Timeline Reconstruction"]
    },
    {
      stage: "STEP 2",
      badge: "● INDUSTRY ENTRY",
      badgeType: "entry",
      role: "Security Engineer & Consultancy Training (Internship)",
      company: "Ensign InfoSecurity",
      location: "Singapore",
      period: "Jan 2022 — Dec 2022",
      isCurrent: false,
      tags: ["BinImg2Vec Co-Author", "Cyber Investigations", "Maturity Assessments"]
    },
    {
      stage: "STEP 1",
      badge: "● SERVICE FOUNDATION",
      badgeType: "service",
      role: "Air Operation Specialist (3rd Sergeant)",
      company: "Republic of Singapore Air Force (RSAF)",
      location: "Singapore & Brunei",
      period: "Oct 2016 — Oct 2018",
      isCurrent: false,
      tags: ["One-Year Brunei Detachment", "Tactical Operations", "Operational Readiness"]
    }
  ],

  /**
   * ==========================================================================
   * ACADEMIC PROGRESSION LADDER (EDUCATION)
   * High-impact degree advancement stepper (No text block descriptions)
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
      tags: ["Graduated with Distinction", "SIT MindSports Chess Tournament 2021"]
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
      tags: ["SP Engineering Show 2016 (Silver)", "Edusave Award (EAGLES) 2012", "POL-ITE Swimming 2014"]
    }
  ]
};
