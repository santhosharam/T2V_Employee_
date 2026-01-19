import {
    Database,
    BrainCircuit,
    Building2,
    Rocket,
    GraduationCap,
    MessageSquare,
    BarChart3,
    ShieldCheck,
    Search,
    Users,
    TrendingUp,
    Lock,
    RefreshCw,
    Zap,
    Globe,
    FileText,
    Scale,
    Target,
    UserCheck,
    Bell,
    Smartphone,
    AlertTriangle,
    DollarSign,
    Star,
    Layers,
    Cpu
} from "lucide-react"

export const platformModulesConfig = {
    "core-ai": {
        badge: "Foundation Layer",
        badgeIcon: Database,
        title: "T2V CoreAI",
        tagline: "The intelligent data foundation that unifies, governs, and activates your workforce information.",
        description: "T2V CoreAI eliminates data silos and creates a single, trusted source of truth across all HR, payroll, talent, and enterprise systems—enabling faster decisions, stronger compliance, and measurable operational efficiency.",
        stats: [
            {
                value: "99.9%",
                label: "Data Accuracy",
                explanation: "Automated validation and deduplication ensure decision-ready workforce data across all systems."
            },
            {
                value: "40%",
                label: "Operational Cost Reduction",
                explanation: "Eliminate manual reconciliation, reduce IT overhead, and free HR teams for strategic work."
            },
            {
                value: "10x",
                label: "Faster Reporting",
                explanation: "Real-time dashboards and pre-built analytics replace weeks of manual data gathering."
            }
        ],
        capabilities: [
            {
                title: "Unified Data Integration",
                desc: "Connects HRIS, ATS, payroll, ERP, and vendor platforms into one centralized workforce repository.",
                icon: Database
            },
            {
                title: "Intelligent Data Quality",
                desc: "Automatically detects, flags, and resolves duplicates, inconsistencies, and missing records.",
                icon: ShieldCheck
            },
            {
                title: "Governance & Compliance",
                desc: "Enforces role-based access, PII masking, audit trails, and regulatory compliance at the data layer.",
                icon: Lock
            },
            {
                title: "Real-Time Synchronization",
                desc: "Bi-directional sync ensures all systems reflect the same accurate, up-to-date employee information.",
                icon: RefreshCw
            },
            {
                title: "Cognitive Enrichment",
                desc: "AI infers skills, roles, and metadata from unstructured documents and communications.",
                icon: Cpu
            },
            {
                title: "Workforce Assistant",
                desc: "Natural language interface for querying workforce data and generating insights instantly.",
                icon: Layers
            },
            {
                title: "Advanced Analytics",
                desc: "Pre-built dashboards for headcount, attrition, diversity, and workforce planning metrics.",
                icon: BarChart3
            },
            {
                title: "Predictive Intelligence",
                desc: "Machine learning models forecast workforce trends and identify potential risks proactively.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Build your workforce strategy on a foundation of trusted data",
        ctaDescription: "T2V CoreAI eliminates data chaos and gives your organization the clarity, compliance, and confidence to execute on strategic HR initiatives."
    },
    "knowledge-ai": {
        badge: "Knowledge Layer",
        badgeIcon: BrainCircuit,
        title: "T2V KnowledgeAI",
        tagline: "Transform scattered information into instant, intelligent answers.",
        description: "KnowledgeAI creates a living knowledge fabric that connects all your organizational information—from policies to procedures—making it instantly accessible and actionable for every employee.",
        stats: [
            {
                value: "90%",
                label: "Faster Retrieval",
                explanation: "Employees find answers in seconds instead of hours of searching through documents."
            },
            {
                value: "40%",
                label: "Deflected Questions",
                explanation: "Self-service AI answers reduce dependency on subject matter experts and support teams."
            },
            {
                value: "100%",
                label: "Knowledge Coverage",
                explanation: "Every document, policy, and procedure indexed and made searchable with AI."
            }
        ],
        capabilities: [
            {
                title: "Semantic Knowledge Fabric",
                desc: "Ingests and tags content from SharePoint, Slack, Drive, and Jira automatically.",
                icon: BrainCircuit
            },
            {
                title: "Instant Answer Engine",
                desc: "Generative AI provides direct answers with citations, not just search links.",
                icon: Zap
            },
            {
                title: "Auto-Maintenance",
                desc: "Flags conflicting or outdated info and prompts experts for updates.",
                icon: RefreshCw
            },
            {
                title: "Expertise Locator",
                desc: "Identifies who knows what based on their contribution history.",
                icon: Users
            },
            {
                title: "Multi-Source Integration",
                desc: "Connects to enterprise repositories including wikis, databases, and collaboration tools.",
                icon: Database
            },
            {
                title: "Context-Aware Search",
                desc: "Understands user intent and role to deliver personalized, relevant results.",
                icon: Search
            },
            {
                title: "Knowledge Graph Mapping",
                desc: "Visualizes relationships between concepts, documents, and subject matter experts.",
                icon: Layers
            },
            {
                title: "Continuous Learning",
                desc: "Improves accuracy over time by learning from user feedback and query patterns.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Turn your knowledge into a competitive advantage",
        ctaDescription: "Stop losing productivity to information search. Make every piece of organizational knowledge instantly accessible and actionable."
    },
    "vertical-knowledge-ai": {
        badge: "Industry Intelligence",
        badgeIcon: Building2,
        title: "T2V Vertical KnowledgeAI",
        tagline: "Industry-specific and regulation-aware intelligence for complex environments.",
        description: "Vertical KnowledgeAI provides deep domain expertise tailored for regulated industries, understanding the nuances of specific laws, compliance codes, and jurisdictional requirements.",
        stats: [
            {
                value: "99%",
                label: "Regulatory Accuracy",
                explanation: "Pre-trained on millions of pages of legal and industry-specific texts."
            },
            {
                value: "60%",
                label: "Legal Spend Savings",
                explanation: "Reduce dependency on external legal counsel for routine compliance questions."
            },
            {
                value: "24/7",
                label: "Compliance Support",
                explanation: "Always-on access to jurisdiction-specific regulatory guidance."
            }
        ],
        capabilities: [
            {
                title: "Jurisdiction Awareness",
                desc: "Understands and applies laws specific to region, state, or city automatically.",
                icon: Globe
            },
            {
                title: "Industry Graph",
                desc: "Pre-loaded with deep knowledge for Manufacturing, Pharma, Finance, and more.",
                icon: Building2
            },
            {
                title: "Citation Engine",
                desc: "Every answer links directly to the specific legal code or clause for verification.",
                icon: FileText
            },
            {
                title: "Policy Comparator",
                desc: "Highlights differences between internal policy and external law requirements.",
                icon: Scale
            },
            {
                title: "Regulatory Monitoring",
                desc: "Tracks changes in labor laws and compliance requirements across all jurisdictions.",
                icon: ShieldCheck
            },
            {
                title: "Expert Validation",
                desc: "Routes complex queries to legal teams for review before providing final guidance.",
                icon: UserCheck
            },
            {
                title: "Audit Trail System",
                desc: "Maintains complete logs of all queries and responses for compliance verification.",
                icon: Lock
            },
            {
                title: "Multi-Language Support",
                desc: "Provides accurate legal guidance in local languages for global operations.",
                icon: MessageSquare
            }
        ],
        ctaHeadline: "Navigate regulatory complexity with confidence",
        ctaDescription: "Ensure compliance across jurisdictions and industries with AI that understands the specific rules that govern your business."
    },
    "accelerate-ai": {
        badge: "Learning Engine",
        badgeIcon: Rocket,
        title: "T2V AccelerateAI",
        tagline: "Convert knowledge into skills at the speed of business.",
        description: "AccelerateAI transforms static content into dynamic, personalized learning experiences that embed directly into daily workflows, accelerating time-to-productivity and knowledge retention.",
        stats: [
            {
                value: "3x",
                label: "Higher Engagement",
                explanation: "Workflow-embedded learning drives significantly higher completion and engagement rates."
            },
            {
                value: "50%",
                label: "Faster Competency",
                explanation: "Employees reach full productivity faster with AI-personalized learning paths."
            },
            {
                value: "75%",
                label: "Better Retention",
                explanation: "Spaced repetition and contextual learning improve long-term knowledge retention."
            }
        ],
        capabilities: [
            {
                title: "Workflow Learning",
                desc: "Delivers micro-learning nuggets directly in Slack, Teams, and daily tools.",
                icon: Rocket
            },
            {
                title: "Content Generator",
                desc: "Auto-creates quizzes and summaries from docs and meetings using AI.",
                icon: FileText
            },
            {
                title: "Skill Simulations",
                desc: "AI role-plays for sales, support, and leadership scenario practice.",
                icon: Target
            },
            {
                title: "Adaptive Pathways",
                desc: "Personalizes curriculum based on performance and role-specific gaps.",
                icon: TrendingUp
            },
            {
                title: "Gamification Engine",
                desc: "Adds points, badges, and leaderboards to drive engagement and completion.",
                icon: Star
            },
            {
                title: "Just-in-Time Learning",
                desc: "Surfaces relevant training content exactly when employees need it in their workflow.",
                icon: Zap
            },
            {
                title: "Knowledge Assessments",
                desc: "Auto-generates tests to verify understanding and track skill development.",
                icon: BarChart3
            },
            {
                title: "Learning Analytics",
                desc: "Correlates training completion with job performance and business outcomes.",
                icon: Layers
            }
        ],
        ctaHeadline: "Accelerate your workforce capability at scale",
        ctaDescription: "Transform onboarding and upskilling with AI-powered learning that adapts to each employee's needs and embeds into their workflow."
    },
    "talent-ai": {
        badge: "Skills Intelligence",
        badgeIcon: GraduationCap,
        title: "T2V TalentAI",
        tagline: "Predictive visibility into workforce skills, gaps, and future readiness.",
        description: "TalentAI provides real-time intelligence on your organization's skill inventory, automatically identifying capability gaps and connecting talent to opportunities for growth and internal mobility.",
        stats: [
            {
                value: "30%",
                label: "Higher Internal Fill Rate",
                explanation: "Improved visibility into internal talent increases promotion from within."
            },
            {
                value: "20%",
                label: "Lower Attrition",
                explanation: "Career pathing and development opportunities improve retention."
            },
            {
                value: "100%",
                label: "Skills Visibility",
                explanation: "Complete, real-time view of organizational capabilities and gaps."
            }
        ],
        capabilities: [
            {
                title: "Inferred Skills",
                desc: "Deduced from code commits, project docs, and closed tickets automatically.",
                icon: BrainCircuit
            },
            {
                title: "Gap Analysis",
                desc: "Visualizes team strengths versus strategic goals and future needs.",
                icon: BarChart3
            },
            {
                title: "Succession Planning",
                desc: "Identifies readiness of internal candidates for key leadership roles.",
                icon: Users
            },
            {
                title: "Career Pathfinder",
                desc: "Shows employees the exact skills needed for their next promotion.",
                icon: Target
            },
            {
                title: "Internal Talent Marketplace",
                desc: "Matches employees with internal projects and gig opportunities based on skills.",
                icon: Search
            },
            {
                title: "Flight Risk Prediction",
                desc: "Identifies employees at risk of leaving based on engagement and activity patterns.",
                icon: AlertTriangle
            },
            {
                title: "Team Optimization",
                desc: "Recommends optimal team compositions based on complementary skills and experience.",
                icon: Layers
            },
            {
                title: "Skills Ontology",
                desc: "Maintains a dynamic, self-updating map of all skills across the organization.",
                icon: Database
            }
        ],
        ctaHeadline: "Build a future-ready workforce from within",
        ctaDescription: "Maximize internal talent mobility and reduce hiring costs with AI-powered skills intelligence and career development."
    },
    "portal-ai": {
        badge: "Employee Experience",
        badgeIcon: MessageSquare,
        title: "T2V PortalAI",
        tagline: "One conversational interface for every employee need.",
        description: "PortalAI replaces multiple disconnected portals with a single, intelligent conversational interface that understands requests, executes workflows, and provides 24/7 support across HR, IT, and operations.",
        stats: [
            {
                value: "60%",
                label: "Ticket Deflection",
                explanation: "Self-service AI resolves most common requests without human intervention."
            },
            {
                value: "24/7",
                label: "Support Availability",
                explanation: "Always-on assistance in multiple languages for global teams."
            },
            {
                value: "90%",
                label: "Employee Satisfaction",
                explanation: "Instant, accurate responses drive high satisfaction scores."
            }
        ],
        capabilities: [
            {
                title: "Unified Interface",
                desc: "One chat window for HR, IT, Finance, and Ops requests across all systems.",
                icon: MessageSquare
            },
            {
                title: "Action Agents",
                desc: "Bots that don't just answer, but execute transactions like booking leave.",
                icon: Zap
            },
            {
                title: "Proactive Notifications",
                desc: "Alerts only when action is needed, reducing notification noise.",
                icon: Bell
            },
            {
                title: "Multi-modal Support",
                desc: "Interacts via text, voice, or mobile app for maximum flexibility.",
                icon: Smartphone
            },
            {
                title: "Universal Search",
                desc: "Finds people, policies, documents, and applications instantly across all systems.",
                icon: Search
            },
            {
                title: "Personalized Dashboard",
                desc: "Displays relevant tasks, updates, and information tailored to each employee's role.",
                icon: BarChart3
            },
            {
                title: "Workflow Automation",
                desc: "Streamlines complex multi-step processes into simple conversational interactions.",
                icon: Layers
            },
            {
                title: "Multi-Language AI",
                desc: "Supports global teams with natural language understanding in 50+ languages.",
                icon: Globe
            }
        ],
        ctaHeadline: "Deliver exceptional employee experiences at scale",
        ctaDescription: "Reduce support costs and improve satisfaction with an AI assistant that handles every employee request intelligently."
    },
    "assess-ai": {
        badge: "Performance Intelligence",
        badgeIcon: BarChart3,
        title: "T2V AssessAI",
        tagline: "Continuous, objective performance intelligence that drives growth.",
        description: "AssessAI moves beyond annual reviews to provide continuous, data-driven performance insights with real-time feedback, coaching recommendations, and bias-aware analytics.",
        stats: [
            {
                value: "4x",
                label: "More Frequent Feedback",
                explanation: "Continuous feedback loops replace infrequent annual reviews."
            },
            {
                value: "15%",
                label: "Performance Lift",
                explanation: "Real-time coaching and interventions improve team performance."
            },
            {
                value: "80%",
                label: "Reduced Bias",
                explanation: "Objective metrics and bias detection ensure fairer evaluations."
            }
        ],
        capabilities: [
            {
                title: "Continuous Feedback Loop",
                desc: "Real-time praise and constructive tips integrated in work tools.",
                icon: RefreshCw
            },
            {
                title: "Objective Metrics",
                desc: "Performance data pulled from Jira, CRM, and Git for unbiased assessment.",
                icon: BarChart3
            },
            {
                title: "Bias Detector",
                desc: "Flags language in reviews that suggests unconscious bias patterns.",
                icon: ShieldCheck
            },
            {
                title: "Coaching Nudges",
                desc: "Prompts managers to have check-ins when metrics indicate issues.",
                icon: MessageSquare
            },
            {
                title: "Goal Alignment",
                desc: "Cascades organizational objectives to individual OKRs and tracks progress.",
                icon: Target
            },
            {
                title: "Sentiment Analysis",
                desc: "Analyzes team collaboration patterns and morale from communication data.",
                icon: Users
            },
            {
                title: "Performance Prediction",
                desc: "Forecasts goal attainment risk early to enable proactive interventions.",
                icon: TrendingUp
            },
            {
                title: "Calibration Tools",
                desc: "Ensures fair rating distribution across teams and departments.",
                icon: Scale
            }
        ],
        ctaHeadline: "Transform performance management with continuous intelligence",
        ctaDescription: "Replace subjective annual reviews with objective, continuous feedback that drives real performance improvement."
    },
    "comply-ai": {
        badge: "Compliance Intelligence",
        badgeIcon: ShieldCheck,
        title: "T2V ComplyAI",
        tagline: "Autonomous protection against global compliance risks.",
        description: "ComplyAI monitors regulatory changes globally, updates policies automatically, and provides predictive risk scoring to prevent violations before they occur—ensuring continuous compliance across all jurisdictions.",
        stats: [
            {
                value: "0",
                label: "Missed Regulations",
                explanation: "24/7 monitoring ensures no regulatory change goes unnoticed."
            },
            {
                value: "100%",
                label: "Audit Pass Rate",
                explanation: "Automated evidence collection and policy updates ensure audit readiness."
            },
            {
                value: "90%",
                label: "Faster Policy Updates",
                explanation: "AI drafts policy revisions instantly when laws change."
            }
        ],
        capabilities: [
            {
                title: "Auto-Policy Update",
                desc: "Drafts policy revisions instantly when laws change anywhere in the world.",
                icon: FileText
            },
            {
                title: "Predictive Risk Scoring",
                desc: "Prioritizes compliance gaps based on potential impact and likelihood.",
                icon: AlertTriangle
            },
            {
                title: "Evidence Locker",
                desc: "Auto-collects proof of compliance for potential audits continuously.",
                icon: Lock
            },
            {
                title: "Whistleblower Guard",
                desc: "Secure, anonymous channels for reporting violations safely.",
                icon: ShieldCheck
            },
            {
                title: "Regulatory Monitoring",
                desc: "Scans global legal databases 24/7 for changes affecting your organization.",
                icon: Globe
            },
            {
                title: "Violation Detection",
                desc: "Real-time alerts for scheduling, pay, or policy breaches before they escalate.",
                icon: Bell
            },
            {
                title: "Audit Automation",
                desc: "Pre-fetches evidence and generates responses to auditor questions instantly.",
                icon: BarChart3
            },
            {
                title: "Policy Distribution",
                desc: "Ensures employees acknowledge and understand updated policies with tracking.",
                icon: Users
            }
        ],
        ctaHeadline: "Stay ahead of compliance risks globally",
        ctaDescription: "Protect your organization from fines and legal exposure with AI that monitors, predicts, and prevents compliance violations."
    },
    "recruit-ai": {
        badge: "Recruitment Intelligence",
        badgeIcon: Search,
        title: "T2V RecruitAI",
        tagline: "AI-native recruitment that accelerates quality hiring.",
        description: "RecruitAI transforms hiring with intelligent automation—from sourcing and screening to scheduling and ranking—delivering faster time-to-hire, better candidate quality, and reduced bias.",
        stats: [
            {
                value: "50%",
                label: "Faster Hiring",
                explanation: "Automated sourcing and screening dramatically reduce time-to-hire."
            },
            {
                value: "30%",
                label: "Lower Cost per Hire",
                explanation: "Efficiency gains and better targeting reduce overall recruitment costs."
            },
            {
                value: "40%",
                label: "Improved Diversity",
                explanation: "Bias-aware algorithms ensure merit-based, diverse candidate selection."
            }
        ],
        capabilities: [
            {
                title: "Smart Sourcing",
                desc: "Scours public profiles to find passive candidates matching your needs.",
                icon: Search
            },
            {
                title: "Resume Parser",
                desc: "Extracts skills and experience with human-level understanding using AI.",
                icon: FileText
            },
            {
                title: "Interview Copilot",
                desc: "Suggests questions dynamically based on candidate answers in real-time.",
                icon: MessageSquare
            },
            {
                title: "Diversity Guard",
                desc: "Anonymizes profiles to ensure merit-based selection and reduce bias.",
                icon: UserCheck
            },
            {
                title: "Automated Scheduling",
                desc: "Coordinates interview times across multiple stakeholders automatically.",
                icon: RefreshCw
            },
            {
                title: "Candidate Engagement",
                desc: "Keeps candidates informed with instant updates and personalized communication.",
                icon: Bell
            },
            {
                title: "Market Intelligence",
                desc: "Provides real-time salary benchmarks and talent supply data for better offers.",
                icon: BarChart3
            },
            {
                title: "Quality of Hire Tracking",
                desc: "Measures new hire performance to continuously improve recruitment models.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Hire better talent, faster and fairer",
        ctaDescription: "Transform your recruitment process with AI that finds, screens, and ranks the best candidates while reducing bias and cost."
    },
    "contract-ai": {
        badge: "Contingent Workforce",
        badgeIcon: Users,
        title: "T2V ContractAI",
        tagline: "Seamless management of your contingent workforce.",
        description: "ContractAI handles the complexity of contractor and gig worker management—from compliant contract generation to payment processing and access governance—reducing risk and administrative overhead.",
        stats: [
            {
                value: "100%",
                label: "Compliant Contracts",
                explanation: "AI-generated agreements ensure compliance with local labor laws."
            },
            {
                value: "0",
                label: "Misclassification Incidents",
                explanation: "Automated classification checks prevent costly co-employment risks."
            },
            {
                value: "70%",
                label: "Faster Onboarding",
                explanation: "Automated workflows accelerate contractor onboarding and activation."
            }
        ],
        capabilities: [
            {
                title: "Contract Generator",
                desc: "Creates compliant agreements for any jurisdiction instantly using AI.",
                icon: FileText
            },
            {
                title: "Classification Check",
                desc: "Tests role scope against local laws to ensure proper contractor status.",
                icon: Scale
            },
            {
                title: "Payment Rails",
                desc: "Automates multi-currency invoices and tax documentation globally.",
                icon: DollarSign
            },
            {
                title: "Access Governance",
                desc: "Auto-provisions and de-provisions system access based on contract dates.",
                icon: Lock
            },
            {
                title: "Budget Monitoring",
                desc: "Tracks contractor spend in real-time against departmental budgets.",
                icon: BarChart3
            },
            {
                title: "Vendor Vetting",
                desc: "Conducts background checks and compliance verification automatically.",
                icon: ShieldCheck
            },
            {
                title: "Talent Pool Management",
                desc: "Maintains database of past contractors for quick re-engagement.",
                icon: Users
            },
            {
                title: "Invoice Automation",
                desc: "Matches timesheets to invoices and processes payments automatically.",
                icon: RefreshCw
            }
        ],
        ctaHeadline: "Manage contingent workers without the risk",
        ctaDescription: "Ensure compliance and reduce administrative burden with AI-powered contractor lifecycle management."
    },
    "perform-ai": {
        badge: "Vendor Intelligence",
        badgeIcon: TrendingUp,
        title: "T2V PerformAI",
        tagline: "Ensure value and accountability from every vendor.",
        description: "PerformAI provides real-time visibility into vendor performance, SLA compliance, and contract value—enabling data-driven renewal decisions and ensuring you get what you pay for.",
        stats: [
            {
                value: "15%",
                label: "Spend Reduction",
                explanation: "Identify unused licenses and duplicate tools to optimize vendor spend."
            },
            {
                value: "20%",
                label: "Higher Vendor Performance",
                explanation: "Continuous monitoring and scorecarding drive better vendor accountability."
            },
            {
                value: "100%",
                label: "SLA Visibility",
                explanation: "Real-time tracking of all vendor commitments and deliverables."
            }
        ],
        capabilities: [
            {
                title: "SLA Tracker",
                desc: "Monitors vendor uptime and deliverables in real-time against commitments.",
                icon: BarChart3
            },
            {
                title: "Spend Intelligence",
                desc: "Identifies duplicate tools and unused licenses across the organization.",
                icon: DollarSign
            },
            {
                title: "Renewal Alert",
                desc: "Notifies stakeholders 90 days before lock-in dates to enable renegotiation.",
                icon: Bell
            },
            {
                title: "Scorecarding",
                desc: "Rates vendors based on internal user feedback and performance data.",
                icon: Star
            },
            {
                title: "Contract Intelligence",
                desc: "Extracts key terms, SLAs, and obligations from vendor agreements automatically.",
                icon: FileText
            },
            {
                title: "Risk Monitoring",
                desc: "Tracks vendor financial health and news for early warning of issues.",
                icon: AlertTriangle
            },
            {
                title: "Benchmark Analysis",
                desc: "Compares vendor pricing and performance against market standards.",
                icon: Scale
            },
            {
                title: "ROI Calculator",
                desc: "Measures actual value delivered versus contracted commitments.",
                icon: TrendingUp
            }
        ],
        ctaHeadline: "Maximize ROI on every vendor relationship",
        ctaDescription: "Stop overpaying for underperforming vendors. Get full visibility and control over your external spend with AI-powered vendor intelligence."
    }
}
