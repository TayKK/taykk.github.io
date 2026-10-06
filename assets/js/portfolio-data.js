/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION — KAI KENG TAY
 * ============================================================================
 * 
 * Centralized data store. Easily add, edit, or remove:
 * - Certifications (Proctored, Online, Course)
 * - Work Experience (Industry roles)
 * - Education & Honors (Academic history)
 * - Research Papers & Skills
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
   * CERTIFICATIONS & CREDENTIALS
   * Categories:
   * 1. "proctored" -> Certifications requiring proctoring (Pearson VUE, PSI, Kryterion, etc.)
   * 2. "online"    -> Certifications completed online / assessment-based
   * 3. "course"    -> Course Certifications & Specializations
   * ==========================================================================
   */
  certifications: [
    // --- 1. PROCTORED CERTIFICATIONS ---
    {
      id: "gcfe",
      title: "GIAC Certified Forensic Examiner (GCFE)",
      issuer: "GIAC Certifications",
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
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
      category: "proctored",
      issued: "Oct 2021",
      expires: "Oct 2024",
      status: "expired",
      credentialId: null,
      skills: ["Computer Networking", "Routing & Switching", "Network Security"]
    },

    // --- 2. ONLINE / ASSESSMENT-BASED CERTIFICATIONS ---
    {
      id: "apisec",
      title: "Certified API Security Analyst",
      issuer: "APIsec University",
      category: "online",
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
      category: "online",
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
      category: "online",
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
      category: "online",
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
      category: "online",
      issued: "Jun 2024",
      expires: "May 2025",
      status: "expired",
      credentialId: "OW8Pq6P0Hw",
      skills: ["Cyber-Physical Systems", "OT/ICS Security", "Infrastructure Defense"]
    },

    // --- 3. COURSE CERTIFICATIONS & SPECIALIZATIONS ---
    {
      id: "google-it-support",
      title: "Google IT Support Specialization",
      issuer: "Coursera / Google",
      category: "course",
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
      category: "course",
      issued: "Mar 2022",
      expires: "No Expiration",
      status: "active",
      credentialId: null,
      skills: ["Machine Learning", "Python Analytics", "Predictive Modeling"]
    },
    {
      id: "basistech-autopsy",
      title: "Autopsy & Cyber Triage DFIR Training - Basics & Hands-On",
      issuer: "BasisTech",
      category: "course",
      issued: "Dec 2020",
      expires: "No Expiration",
      status: "active",
      credentialId: "9gs3piomfo",
      skills: ["Autopsy DFIR", "Digital Forensics", "Triage Analysis"]
    }
  ],

  // Professional Work Experience (Work is work)
  workExperience: [
    {
      company: "Ensign InfoSecurity",
      role: "Cyber Hunt and Incident Response, Consultant",
      period: "Mar 2025 — Present",
      location: "Singapore (Hybrid)",
      highlights: [
        "Led complex threat hunting engagements, cyber investigations, and table-top exercise simulations.",
        "Assisted in CyberSecurity Maturity Assessments and defensive architecture reviews.",
        "Researched cyber-physical systems resilience and incident escalation playbooks."
      ],
      skills: ["Table-Top Exercise Simulation", "Cyber-Physical Systems", "Threat Hunting"]
    },
    {
      company: "Ensign InfoSecurity",
      role: "Cyber Hunt and Incident Response, Associate Consultant",
      period: "Feb 2023 — Feb 2025",
      location: "Singapore (On-site)",
      highlights: [
        "Executed live cyber incident response triage, dead-box digital forensics, and root-cause analyses.",
        "Conducted evidence collection and timeline reconstruction for enterprise security breaches.",
        "Correlated telemetry across endpoint detection, firewalls, and cloud access logs."
      ],
      skills: ["Cybersecurity Incident Response", "Computer Forensics", "Malware Analysis"]
    },
    {
      company: "Ensign InfoSecurity",
      role: "Security Engineer & Consultancy Training (Internship)",
      period: "Jan 2022 — Dec 2022",
      location: "Singapore",
      highlights: [
        "Participated in live cyber investigations and assisted in cybersecurity maturity assessments.",
        "Co-authored and published flagship research paper: BinImg2Vec (ICAIC 2022) with Ensign Labs.",
        "Active member of Ensign Fight Club (MMA)."
      ],
      skills: ["Malware Classification", "Maturity Assessments", "Applied Research"]
    },
    {
      company: "Republic of Singapore Air Force (RSAF)",
      role: "Air Operation Specialist (3rd Sergeant)",
      period: "Oct 2016 — Oct 2018",
      location: "Singapore & Brunei",
      highlights: [
        "Selected for high-readiness one-year detachment to Brunei.",
        "Maintained tactical situational awareness and operational air defense workflows."
      ],
      skills: ["Operational Discipline", "Team Leadership", "Mission-Critical Systems"]
    }
  ],

  // Education & Academic Honors (School is school)
  education: [
    {
      institution: "Singapore University of Technology and Design (SUTD)",
      degree: "Master of Science (MS) in Security by Design",
      period: "Sep 2023 — Oct 2025",
      grade: "Grade: 4.38 / 5.0",
      details: "Advanced curriculum focused on Cyber-Physical Systems security, formal verification, threat modeling, and secure architecture by design.",
      honors: ["Skills: Cyber-Physical Systems, Advanced Threat Modeling"]
    },
    {
      institution: "Singapore Institute of Technology (SIT)",
      degree: "Bachelor of Engineering (B.Eng) in Information & Communications Technology (Information Security)",
      period: "Sep 2019 — Dec 2022",
      grade: "Graduated with Distinction (Second Upper)",
      details: "Specialized in applied information security, cryptography, systems defense, and network architecture. Participated in SIT MindSports (International Chess) Tournament 2021.",
      honors: ["Graduated with Distinction", "SIT MindSports 2021"]
    },
    {
      institution: "Singapore Polytechnic (SP)",
      degree: "Diploma in Computer Engineering (Network Security)",
      period: "2013 — 2016",
      grade: "Silver Award — SP Engineering Show 2016",
      details: "Comprehensive foundation in computer systems, networking protocols, hardware architecture, and defensive engineering. Active in Swimming Club (POL-ITE Swimming Competition 2014).",
      honors: [
        "Awarded Silver in SP Engineering Show 2016",
        "Edusave Award (EAGLES) 2012",
        "Edusave Certificate of Academic Achievement 2011"
      ]
    }
  ]
};
