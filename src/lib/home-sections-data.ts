
import {
    Database,
    BrainCircuit,
    Layers,
    ShieldCheck,
    Cpu,
    Search,
    Sparkles,
    FileText,
    Network,
    Briefcase,
    Users,
    MessageSquare,
    DollarSign,
    Globe,
    Scale,
    Bot,
    AlertOctagon,
    Zap,
    LayoutDashboard,
    EyeOff,
    Lock
} from "lucide-react"

export const homeSections = {
    coreAI: {
        badge: "Core Platform",
        badgeIcon: Database,
        title: "T2V CoreAI",
        tagline: "The Foundation of Workforce Intelligence",
        description: "Unify fragmented HR data into a single, dynamic employee golden record. T2V CoreAI acts as the intelligent nervous system for your enterprise, connecting isolated systems into one source of truth.",
        stats: [
            { value: "99.9%", label: "Data Accuracy", explanation: "Achieved through AI-driven deduplication and validation." },
            { value: "50+", label: "Integrations", explanation: "Seamless connectors for Workday, SAP, Oracle, and more." },
            { value: "100%", label: "Audit Ready", explanation: "Full historical traceability of every data change." }
        ],
        capabilities: [
            { title: "Intelligent Ingestion", desc: "Real-time sync with HRIS, ATS, and LMS platforms.", icon: Layers },
            { title: "Identity Resolution", desc: "Probabilistic matching to merge duplicate profiles.", icon: Cpu },
            { title: "Privacy Engine", desc: "Enterprise-grade PII masking and access controls.", icon: ShieldCheck },
            { title: "Graph Linking", desc: "Maps hidden relationships between people and skills.", icon: Network }
        ],
        moduleData: {
            challenges: [
                { title: "Data Silos", points: ["Isolated HR systems causing version conflicts", "No single source of truth for decision making", "Fragmented employee history"] },
                { title: "Poor Quality", points: ["Inaccurate and outdated employee records", "Duplicate entries across regions", "Missing critical skill metadata"] }
            ],
            features: [
                { title: "Unified Data Plane", desc: "Centralized repository creating a Single Employee Golden Record." },
                { title: "Automated Governance", desc: "Role-based access & PII masking at ingestion." }
            ],
            solutions: [
                { title: "Integration Fabric", desc: "Bi-directional sync with ERP, IT, and Finance systems." },
                { title: "Executive Command", desc: "AI Copilot for strategic workforce planning." }
            ],
            outcomes: {
                operational: ["Reduced manual data entry", "Real-time workforce visibility"],
                risk: ["Stronger data governance", "Reduced compliance violations"]
            }
        },
        ctaHeadline: "Build on a Solid Foundation",
        ctaDescription: "Stop making decisions based on fragmented data. Establish a single source of truth today."
    },
    knowledgeAI: {
        badge: "Knowledge AI",
        badgeIcon: BrainCircuit,
        title: "AI Knowledge & Learning",
        tagline: "Accelerating Workforce Capability",
        description: "Transform static documents into instant answers and personalized learning. Empower your workforce with just-in-time knowledge delivery and AI-generated skill building.",
        stats: [
            { value: "30%", label: "Productivity Gain", explanation: "Employees spend less time searching, more time doing." },
            { value: "50%", label: "Faster Onboarding", explanation: "New hires reach proficiency in record time." },
            { value: "0", label: "Hallucinations", explanation: "Answers grounded strictly in your enterprise data." }
        ],
        capabilities: [
            { title: "Semantic Search", desc: "Understands intent to find answers, not just links.", icon: Search },
            { title: "Auto-Course Gen", desc: "Creates micro-learning from PDFs instantly.", icon: Sparkles },
            { title: "Skill Simulation", desc: "AI role-play scenarios for soft skills practice.", icon: Bot },
            { title: "Expert Routing", desc: "Connects queries to subject matter experts.", icon: Users }
        ],
        moduleData: {
            challenges: [
                { title: "Info Overload", points: ["Critical knowledge buried in PDFs and emails", "20% of time wasted searching for info", "Version control nightmares"] },
                { title: "Passive Learning", points: ["LMS content is boring and disconnected", "Low completion and retention rates", "Generic courses don't fit roles"] }
            ],
            features: [
                { title: "Generative Answers", desc: "Synthesizes direct answers from multiple docs." },
                { title: "Adaptive Parsers", desc: "Adjusts learning difficulty based on progress." }
            ],
            solutions: [
                { title: "Just-in-Time Learning", desc: "Surfaces knowledge within Slack/Teams workflows." },
                { title: "Vector Database", desc: "Stores semantic embeddings for instant retrieval." }
            ],
            outcomes: {
                operational: ["Instant answers for employees", "Learning in the flow of work"],
                risk: ["Consistent policy interpretation", "Ensured policy comprehension"]
            }
        },
        ctaHeadline: "Accelerate Your Workforce",
        ctaDescription: "Equip your team with the knowledge they need, exactly when they need it."
    },
    recruitmentAI: {
        badge: "Talent Acquisition",
        badgeIcon: Users,
        title: "Recruitment Intelligence",
        tagline: "Predictive, Bias-Aware Hiring",
        description: "Move from reactive hiring to proactive talent pipeline engineering. Use AI to source, screen, and engage the best candidates faster while eliminating unconscious bias.",
        stats: [
            { value: "4x", label: "Faster Hiring", explanation: "Reduce time-to-fill from months to weeks." },
            { value: "40%", label: "Cost Reduction", explanation: "Lower agency spend and operational overhead." },
            { value: "2x", label: "Diversity", explanation: "Blind screening ensures equitable hiring." }
        ],
        capabilities: [
            { title: "Smart Sourcing", desc: "Finds candidates matching deep skill profiles.", icon: Search },
            { title: "Bias Elimination", desc: "Anonymizes profiles to focus on capability.", icon: EyeOff }, // Note: EyeOff might not be imported, I will use ShieldCheck or similar if needed. Wait, EyeOff is standard lucide. I'll stick to imports.
            { title: "Interview Copilot", desc: "Real-time prompts for structured interviews.", icon: MessageSquare },
            { title: "Market Intel", desc: "Real-time data on talent supply and compensation.", icon: Globe }
        ],
        moduleData: {
            challenges: [
                { title: "Slow Process", points: ["Good candidates lost due to delays", "Time-to-fill averaging 60+ days", "Revenue loss from vacant seats"] },
                { title: "Bias Barriers", points: ["Unconscious bias in screening", "Struggling to meet DEI targets", "Homogenous teams lacking innovation"] }
            ],
            features: [
                { title: "CV Ranking", desc: "Matches skills to job context, not keywords." },
                { title: "Scheduling Agent", desc: "Auto-books times with candidates 24/7." }
            ],
            solutions: [
                { title: "Funnel Automation", desc: "Nurtures candidates from click to offer." },
                { title: "Quality Loop", desc: "Feeds new hire performance back to model." }
            ],
            outcomes: {
                operational: ["Recruiters become talent advisors", "Better candidate experience"],
                risk: ["Fair hiring practices", "Data privacy in hiring"]
            }
        },
        ctaHeadline: "Win the War for Talent",
        ctaDescription: "Hire the best people, faster and fairer. Modernize your recruiting stack."
    },
    complianceAI: {
        badge: "Governance",
        badgeIcon: Scale,
        title: "Compliance & Legal",
        tagline: "Continuous Audit Readiness",
        description: "Automate policy governance and prevent costly regulatory violations. Stay ahead of thousands of global labor law changes with predictive risk intelligence.",
        stats: [
            { value: "100%", label: "Audit Ready", explanation: "Always-on logs and evidence collection." },
            { value: "$0", label: "Fines", explanation: "Proactive prevention of non-compliance." },
            { value: "100+", label: "Coverage", explanation: "Updates for 100+ jurisdictions automatically." }
        ],
        capabilities: [
            { title: "Reg Monitor", desc: "Scans legal databases for changes globally.", icon: Globe },
            { title: "Policy Updater", desc: "Drafts policy amendments automatically.", icon: FileText },
            { title: "Risk Thermometer", desc: "Predictive score of compliance health.", icon: AlertOctagon },
            { title: "Whistleblower", desc: "Secure, anonymous channel with AI triage.", icon: Lock }
        ],
        moduleData: {
            challenges: [
                { title: "Regulatory Tsunami", points: ["Thousands of law changes annually", "Impossible to manually track updates", "Increasing fines for non-compliance"] },
                { title: "Manual Audits", points: ["Scrambling to find docs during audits", "Sampling checks miss violations", "High stress and cost"] }
            ],
            features: [
                { title: "Audit Bot", desc: "Pre-fetches evidence and answers auditor Qs." },
                { title: "Violation Alert", desc: "Real-time flag for scheduling/pay breaches." }
            ],
            solutions: [
                { title: "Global Compliance Graph", desc: "Maps internal rules to external laws." },
                { title: "Incident Management", desc: "Workflow for investigation and remediation." }
            ],
            outcomes: {
                operational: ["Automated policy governance", "Less admin time"],
                risk: ["Systematic risk reduction", "Director liability protection"]
            }
        },
        ctaHeadline: "Protect Your Enterprise",
        ctaDescription: "Don't wait for an audit to find a problem. Ensure continuous compliance."
    },
    solutions: {
        badge: "Platform Suite",
        badgeIcon: LayoutDashboard,
        title: "Solutions Overview",
        tagline: "End-to-End Workforce Orchestration",
        description: "A comprehensive suite of agents and modules designed to solve complex challenges across the entire employee lifecycle. From onboarding to offboarding, we have you covered.",
        stats: [
            { value: "11", label: "Modules", explanation: "Covering every aspect of HR and Ops." },
            { value: "1", label: "Platform", explanation: "Unified data and user experience." },
            { value: "10x", label: "Maximized ROI", explanation: "Replace point solutions with one suite." }
        ],
        capabilities: [
            { title: "Total Rewards", desc: "Optimize compensation and benefits spending.", icon: DollarSign },
            { title: "Contingent Labor", desc: "Manage contractors with full compliance.", icon: Briefcase },
            { title: "Performance", desc: "Continuous feedback and goal alignment.", icon: Zap },
            { title: "Employee Portal", desc: "Unified self-service for all requests.", icon: LayoutDashboard }
        ],
        moduleData: {
            challenges: [
                { title: "Fragmentation", points: ["Employees use 10+ different apps", "Data scattered across systems", "Poor user experience"] },
                { title: "Inefficiency", points: ["Manual handoffs between departments", "High operational costs", "Slow reaction times"] }
            ],
            features: [
                { title: "Unified Service", desc: "One portal for HR, IT, and Finance requests." },
                { title: "Cross-Module Intelligence", desc: "Data from one module powers others." }
            ],
            solutions: [
                { title: "Workforce 360", desc: "Complete view of every employee." },
                { title: "Automation Engine", desc: "Streamline workflows across the enterprise." }
            ],
            outcomes: {
                operational: ["Streamlined employee experience", "Reduced license shelfware"],
                risk: ["Standardized process execution", "Secure access gateway"]
            }
        },
        ctaHeadline: "Explore All Solutions",
        ctaDescription: "See how our integrated platform can transform your specific business functions."
    }
};
