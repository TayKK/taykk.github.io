/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION — KAI KENG TAY
 * ============================================================================
 * 
 * To add, edit, or remove certifications, achievements, research, or skills,
 * simply edit the arrays below. The website UI and interactive CLI terminal
 * will automatically update everywhere!
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Kai Keng TAY",
    headline: "Holistic Cybersecurity Practitioner & AI Security Researcher",
    tagline: "Never stop learning. Knowledge is power.",
    callsign: "TAYKK",
    location: "Singapore",
    status: "AVAILABLE FOR ROLES",
    statusDetail: "Open to Holistic Cyber, CloudSec & AI Security opportunities",
    linkedinUrl: "https://sg.linkedin.com/in/tay-kai-keng",
    githubUrl: "https://github.com/TayKK",
    bio: "Grounded in Blue Team defense, threat analysis, and malware research, I have expanded into a holistic cybersecurity practitioner—bridging enterprise defense, cloud-native resilience (GCP & Kubernetes), API security, and cutting-edge AI model security & AI governance (ISO/IEC 42001)."
  },

  // Evolution trajectory steps
  journey: [
    {
      phase: "PHASE 01",
      badge: "ORIGINS",
      icon: "🛡️",
      stepClass: "step-1",
      title: "Defensive Grounding & Blue Teaming",
      summary: "Honed at Ensign InfoSecurity. Focused on threat intelligence, digital forensics, incident triage, and raw binary malware inspection. Understanding how adversaries exploit systems at the byte level.",
      tags: ["Threat Intel", "Malware Analysis", "SOC Triage", "Forensics"]
    },
    {
      phase: "PHASE 02",
      badge: "SYSTEMS",
      icon: "☁️",
      stepClass: "step-2",
      title: "Cloud-Native & Infrastructure Hardening",
      summary: "Expanding from host forensics to cloud orchestration. Certified in Google Cloud (ACE), Linux Systems (LFCA), and Kubernetes (KCNA) to secure distributed microservices and container workloads.",
      tags: ["Google Cloud ACE", "Kubernetes KCNA", "Linux LFCA", "DevSecOps"]
    },
    {
      phase: "PHASE 03",
      badge: "APPLICATIONS",
      icon: "⚔️",
      stepClass: "step-3",
      title: "Offensive Awareness & API Security",
      summary: "Adopting the adversary's playbook to build resilient defenses. Certified in API Security (APIsec University) and trained in Red Team operations to uncover flawed logic, broken object authorization, and exposed attack surfaces.",
      tags: ["APIsec Certified", "Red Team Leaders", "OWASP API Top 10", "Auth Defenses"]
    },
    {
      phase: "PHASE 04",
      badge: "FRONTIER",
      icon: "🧠",
      stepClass: "step-4",
      title: "AI Security & Model Governance",
      summary: "At the bleeding edge of AI defense. Co-authored the published research paper BinImg2Vec using self-supervised Vision Transformers for malware classification. Certified in AWS AI and GAICC AI Governance (ISO/IEC 42001).",
      tags: ["BinImg2Vec", "Data2Vec", "AWS AI", "GAICC / ISO 42001"]
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
      { label: "Zero Feature Engineering", desc: "Bypasses tedious manual assembly disassembly and heuristics by operating directly on normalized byte matrices." },
      { label: "Self-Supervised Pre-training", desc: "Employs multi-modal masked prediction via Data2Vec, achieving high representation fidelity with limited labeled malware samples." },
      { label: "High-Accuracy Generalization", desc: "Outperforms conventional Convolutional Neural Networks (CNNs) across obfuscated ransomware and Trojan families." }
    ]
  },

  // Holistic Domain Competency Matrix
  domains: [
    {
      category: "ai",
      icon: "🧠",
      title: "AI & Machine Learning Security",
      skills: [
        "Vision Transformer & Data2Vec representation learning",
        "AI model threat modeling (prompt injection, model theft, poisoning)",
        "AWS Certified AI Practitioner methodologies",
        "Defensive AI integration for telemetry and detection"
      ]
    },
    {
      category: "ai",
      icon: "📋",
      title: "AI Governance & Compliance",
      skills: [
        "ISO/IEC 42001 Artificial Intelligence Management Systems (AIMS)",
        "Certified by Global AI Certification Council (GAICC)",
        "AI ethical risk frameworks and impact assessment",
        "Microsoft Security, Compliance, & Identity practices"
      ]
    },
    {
      category: "cloud",
      icon: "☁️",
      title: "Cloud Infrastructure (GCP)",
      skills: [
        "Google Cloud Associate Cloud Engineer (ACE) certified",
        "IAM policy hardening, VPC service controls, security perimeters",
        "Cloud audit logging, Cloud Armor, and posture management",
        "Zero-trust access controls for cloud workloads"
      ]
    },
    {
      category: "cloud",
      icon: "☸️",
      title: "Cloud Native & Linux Hardening",
      skills: [
        "Kubernetes & Cloud Native Associate (KCNA) certified",
        "Linux Foundation Certified IT Associate (LFCA)",
        "Container image scanning, RBAC, and pod security standards",
        "Linux kernel fundamentals, syscall auditing, and system hardening"
      ]
    },
    {
      category: "defense",
      icon: "🛡️",
      title: "Blue Team & Threat Forensics",
      skills: [
        "PE binary parsing, entropy analysis, and unpacking techniques",
        "Incident triage, memory & disk artifact investigation",
        "SIEM correlation, alert tuning, and threat hunting workflows",
        "Enterprise cybersecurity experience at Ensign InfoSecurity"
      ]
    },
    {
      category: "appsec",
      icon: "🔓",
      title: "API & Application Security",
      skills: [
        "Certified API Security Analyst (APIsec University)",
        "OWASP API Security Top 10 auditing (BOLA, BFLA, Mass Assignment)",
        "Red Team Leaders adversary simulation and ATT&CK alignment",
        "Secure code practices, authorization gateways, and JWT validation"
      ]
    }
  ],

  /**
   * ==========================================================================
   * VERIFIED CERTIFICATIONS & ACHIEVEMENTS LIST
   * ==========================================================================
   * HOW TO ADD A NEW CERTIFICATION:
   * Simply copy one of the blocks below, paste it into the array, and fill in
   * your details!
   * 
   * Categories available:
   * - "cloud"    -> Cloud & Infrastructure
   * - "ai"       -> AI & Governance
   * - "security" -> Security & Defense
   */
  certifications: [
    {
      id: "gcp-ace",
      title: "Associate Cloud Engineer (ACE)",
      issuer: "GOOGLE CLOUD",
      org: "Google Cloud",
      category: "cloud",
      badgeTag: "GCP ACE",
      description: "Demonstrates capability to deploy applications, monitor operations, and manage enterprise cloud solutions and IAM infrastructure on Google Cloud.",
      verified: true
    },
    {
      id: "cncf-kcna",
      title: "Kubernetes and Cloud Native Associate (KCNA)",
      issuer: "CNCF / LINUX FOUNDATION",
      org: "The Linux Foundation & CNCF",
      category: "cloud",
      badgeTag: "KCNA",
      description: "Validates core competencies across the Kubernetes architecture, container ecosystem, cloud-native security, and GitOps delivery pipelines.",
      verified: true
    },
    {
      id: "lf-lfca",
      title: "Linux Foundation Certified IT Associate (LFCA)",
      issuer: "LINUX FOUNDATION",
      org: "The Linux Foundation",
      category: "cloud",
      badgeTag: "LFCA",
      description: "Validates fundamental IT systems knowledge, Linux command line proficiency, operating system security, and infrastructure administration.",
      verified: true
    },
    {
      id: "apisec-analyst",
      title: "Certified API Security Analyst",
      issuer: "APISEC UNIVERSITY",
      org: "APIsec University",
      category: "security",
      badgeTag: "APISEC",
      description: "Specialized expertise in testing and defending modern REST and GraphQL APIs against business logic flaws, broken object-level authorization, and injection.",
      verified: true
    },
    {
      id: "aws-ai",
      title: "AWS Certified AI Practitioner",
      issuer: "AMAZON WEB SERVICES",
      org: "Amazon Web Services",
      category: "ai",
      badgeTag: "AWS AI",
      description: "Mastery of core machine learning paradigms, generative AI fundamentals, foundation model evaluation, and responsible AI implementation in AWS.",
      verified: true
    },
    {
      id: "gaicc-aigp",
      title: "Artificial Intelligence Governance Professional",
      issuer: "GAICC",
      org: "Global AI Certification Council (GAICC)",
      category: "ai",
      badgeTag: "GAICC",
      description: "Accreditation aligned with the ISO/IEC 42001 standard for AI Management Systems (AIMS), focusing on AI risk management, safety, and accountability.",
      verified: true
    },
    {
      id: "ms-sci",
      title: "Security, Compliance, and Identity Fundamentals",
      issuer: "MICROSOFT",
      org: "Microsoft",
      category: "security",
      badgeTag: "MS SECURITY",
      description: "Foundational principles of enterprise zero trust, identity lifecycle protection, compliance governance, and security operations center integrations.",
      verified: true
    },
    {
      id: "redteam-leaders",
      title: "Red Team Leadership & Emulation Badges",
      issuer: "RED TEAM LEADERS",
      org: "Red Team Leaders",
      category: "security",
      badgeTag: "RED TEAM",
      description: "Adversary emulation, attack graph mapping, threat actor modeling, and offensive mindset exercises designed to strengthen Blue Team defenses.",
      verified: true
    }
  ],

  // Background, Education & Honors
  experience: [
    {
      role: "Singapore University of Technology and Design (SUTD)",
      org: "Higher Education & Advanced Technologies // Singapore",
      desc: "Advanced technical studies emphasizing systems design, computational thinking, and frontier technologies. Integrating high-level systems architecture with secure-by-design engineering."
    },
    {
      role: "Ensign InfoSecurity",
      org: "Cybersecurity Operations & Research // Singapore",
      desc: "Asia's largest pure-play cybersecurity firm. Active in threat analysis, malware investigation, and applied AI research with Ensign Labs resulting in the published BinImg2Vec conference paper."
    },
    {
      role: "Singapore Polytechnic",
      org: "Engineering Foundation & Accolades // Singapore",
      desc: "Rigorous engineering education. Recipient of SP Engineering Show honors, Edusave EAGLES awards, and recognition in international mathematics competitions."
    }
  ]
};
