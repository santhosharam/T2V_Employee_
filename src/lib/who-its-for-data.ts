
import {
    Users,
    ShieldCheck,
    TrendingUp,
    BrainCircuit,
    Database,
    Bot,
    Target,
    Zap,
    Globe,
    Briefcase,
    FileText,
    PieChart,
    Layers,
    Search
} from "lucide-react";

export const whoItsForData = {
    "hr-leaders": {
        badge: "Enterprise HR & People Leaders",
        badgeIcon: Users,
        title: "Strategic Workforce Architects",
        tagline: "Move from administrative processing to strategic intelligence.",
        description: "For CHROs and People Leaders who need a single source of truth to drive workforce strategy, operational efficiency, and employee experience transformation.",
        challenges: [
            "Fragmented employee data across HRIS, ATS, and Payroll systems.",
            "Inability to answer basic headcount or skills questions in real-time.",
            "Manual, error-prone reporting cycles that slow down decision making.",
            "Disconnect between talent strategy and business outcomes."
        ],
        capabilities: [
            { title: "Unified Golden Record", desc: "One reliable view of every employee across all systems.", icon: Database },
            { title: "Predictive Analytics", desc: "Forecast attrition and headcount needs before they happen.", icon: TrendingUp },
            { title: "Process Automation", desc: "Eliminate manual data entry and reconciliation.", icon: Zap },
            { title: "Experience Hub", desc: "Deliver consumer-grade employee experiences.", icon: Users }
        ],
        outcomes: [
            { value: "99.9%", label: "Data Accuracy", explanation: "Across all HR systems" },
            { value: "40%", label: "OpEx Reduction", explanation: "Through automation" },
            { value: "10x", label: "Faster Insights", explanation: "Real-time vs Monthly" },
            { value: "360°", label: "Visibility", explanation: "Full workforce view" }
        ],
        activeModule: "core-ai", // Mapping to existing module data if needed for deep dives
        ctaHeadline: "Transform HR into a Strategic Powerhouse",
        ctaDescription: "Stop wrangling spreadsheets and start driving business strategy with AI-native intelligence.",
        ctaButtonText: "Request HR Strategy Demo"
    },
    "talent-learning": {
        badge: "Talent & Learning Organizations",
        badgeIcon: BrainCircuit,
        title: "Architects of Future Skills",
        tagline: "Build a resilient, adaptable workforce ready for tomorrow.",
        description: "For CLOs and Talent VPs struggling to identify skill gaps, personalize learning at scale, and retain top performers through meaningful growth paths.",
        challenges: [
            "Lack of visibility into existing skills and capabilities.",
            "LMS content that is static, generic, and largely ignored.",
            "High reliance on external hiring due to poor internal mobility.",
            "Difficulty proving the ROI of learning and development programs."
        ],
        capabilities: [
            { title: "AI Skill Inference", desc: "Automatically map skills from work, not just CVs.", icon: Search },
            { title: "Insta-Course Gen", desc: "Turn docs into interactive learning in seconds.", icon: Zap },
            { title: "Career Copilot", desc: "Personalized growth paths for every employee.", icon: Target },
            { title: "Talent Marketplace", desc: "Match internal talent to projects instantly.", icon: Users }
        ],
        outcomes: [
            { value: "50%", label: "Faster Onboarding", explanation: "Time to productivity" },
            { value: "30%", label: "Hiring Cost Cut", explanation: "Via internal mobility" },
            { value: "3x", label: "Engagement", explanation: "In learning content" },
            { value: "Auto", label: "Skill Mapping", explanation: "Zero manual tagging" }
        ],
        activeModule: "accelerate-ai",
        ctaHeadline: "Unleash Your Workforce Potential",
        ctaDescription: "Close skill gaps faster and keep your best people growing with T2V TalentAI and AccelerateAI.",
        ctaButtonText: "Explore Talent Solutions"
    },
    "compliance-legal": {
        badge: "Compliance & Legal Teams",
        badgeIcon: ShieldCheck,
        title: "Guardians of Enterprise Risk",
        tagline: "Automate compliance globally. Eliminate risk locally.",
        description: "For General Counsel and Compliance Officers facing a tsunami of changing labor laws, rigorous audit requirements, and the risk of costly variations.",
        challenges: [
            "Keeping up with thousands of changing labor laws globally.",
            "Scrambling for evidence and documentation during audits.",
            "Inconsistent application of policies by managers.",
            "High legal costs for basic inquiries and policy updates."
        ],
        capabilities: [
            { title: "Regulatory Monitor", desc: "Real-time alerts on law changes affecting you.", icon: Globe },
            { title: "Automated Audits", desc: "Always-on evidence collection and verification.", icon: CheckSquare }, // Fixed icon import later if needed, assuming usage
            { title: "Policy Engine", desc: "Auto-update policies and track acknowledgement.", icon: FileText },
            { title: "Risk Radar", desc: "Predictive identification of non-compliance.", icon: ShieldCheck }
        ],
        outcomes: [
            { value: "100%", label: "Audit / Ready", explanation: "24/7/365 Coverage" },
            { value: "0", label: "Fines", explanation: "Compliance assurance" },
            { value: "60%", label: "Legal Savings", explanation: "Reduced outside counsel" },
            { value: "Global", label: "Reach", explanation: "Local laws masked" }
        ],
        activeModule: "comply-ai",
        ctaHeadline: "Compliance Without the Chaos",
        ctaDescription: "Protect your organization with the only AI that understands local labor laws and global enterprise risk.",
        ctaButtonText: "See Compliance Demo"
    },
    "exec-leaders": {
        badge: "Executive & Business Leaders",
        badgeIcon: TrendingUp,
        title: "Drivers of Business Performance",
        tagline: "Link workforce investment directly to P&L outcomes.",
        description: "For CEOs, CFOs, and COOs who need to understand the financial and operational impact of their workforce and ensure alignment with strategic goals.",
        challenges: [
            "Workforce represents 70% of cost but has the least visibility.",
            "Slow execution of strategic pivots due to rigid org structures.",
            "Unclear ROI on headcount and technology investments.",
            "Inability to model future workforce scenarios accurately."
        ],
        capabilities: [
            { title: "Exec Command Center", desc: "Real-time KPIs on productivity and cost.", icon: PieChart },
            { title: "Scenario Planning", desc: "Simulate org changes and budget impacts.", icon: Layers },
            { title: "Vendor Spend AI", desc: "Optimize contingent and service spend.", icon: Briefcase },
            { title: "Outcome Alignment", desc: "Connect OKRs to individual work streams.", icon: Target }
        ],
        outcomes: [
            { value: "20%", label: "Productivity", explanation: "Efficiency gain" },
            { value: "Real-Time", label: "P&L View", explanation: "Workforce cost impact" },
            { value: "15%", label: "Spend Saved", explanation: "Vendor optimization" },
            { value: "Agile", label: "Org Design", explanation: "Rapid restructuring" }
        ],
        activeModule: "perform-ai", // Approximate mapping
        ctaHeadline: "Lead with Data, Not Guesswork",
        ctaDescription: "Gain the visibility you need to optimize your largest investment—your people.",
        ctaButtonText: "Schedule Executive Briefing"
    },
    "data-teams": {
        badge: "Data & Analytics Teams",
        badgeIcon: Database,
        title: "Enablers of Intelligence",
        tagline: "The clean, unified data layer you've always promised.",
        description: "For CIOs and CDOs tired of building custom ETL pipelines, wrestling with dirty data, and explaining why reports don't match across systems.",
        challenges: [
            "Endless backlog of custom integration requests.",
            "Dirty, duplicate, and inconsistent data quality issues.",
            "Security risks from scattered PII in data lakes.",
            "Shadow IT creating data silos outside of control."
        ],
        capabilities: [
            { title: "Integration Fabric", desc: "Pre-built connectors for 50+ enterprise apps.", icon: Layers },
            { title: "AI Data Steward", desc: "Auto-cleans and de-duplicates records.", icon: Bot },
            { title: "Governance Layer", desc: "Baked-in PII masking and access controls.", icon: ShieldCheck },
            { title: "Knowledge Graph", desc: "Semantic mapping of all enterprise data.", icon: BrainCircuit }
        ],
        outcomes: [
            { value: "90%", label: "Less ETL", explanation: "Pre-built connectors" },
            { value: "Sub-Second", label: "Latency", explanation: "Real-time sync" },
            { value: "Unified", label: "Data Model", explanation: "Standard schema" },
            { value: "Secure", label: "By Design", explanation: "PII protection" }
        ],
        activeModule: "core-ai",
        ctaHeadline: "Solve the People Data Problem",
        ctaDescription: "Give your business a pristine, governable Golden Record without the multi-year data project.",
        ctaButtonText: "View Technical Specs"
    },
    "tech-leaders": {
        badge: "Technology & Platform Leaders",
        badgeIcon: Bot,
        title: "Builders of the Digital Workplace",
        tagline: "Simplifying the employee stack. Securing the enterprise.",
        description: "For IT Leaders focused on user adoption, system consolidation, and providing a seamless, secure digital experience for the modern workforce.",
        challenges: [
            "Sprawl of disconnected apps causing user fatigue.",
            "High volume of repetitive support tickets (L1/L2).",
            "Security vulnerabilities from poor identity management.",
            "Low adoption of expensive enterprise software tools."
        ],
        capabilities: [
            { title: "Unified Portal", desc: "Single entry point for all employee services.", icon: Globe },
            { title: "IT Service Bot", desc: "Auto-resolve tickets with conversational AI.", icon: MessageSquare }, // Fixed icon import if needed
            { title: "Identity Mgmt", desc: "Seamless SSO and role-based provisioning.", icon: ShieldCheck }, // Fixed icon import if needed
            { title: "App Orchestration", desc: "Trigger actions across apps from one chat.", icon: Zap }
        ],
        outcomes: [
            { value: "70%", label: "Ticket Deflection", explanation: "Via self-service" },
            { value: "1", label: "Interface", explanation: "For all apps" },
            { value: "90%", label: "Adoption", explanation: "User satisfaction" },
            { value: "Zero", label: "Trust", explanation: "Security framework" }
        ],
        activeModule: "portal-ai",
        ctaHeadline: "Modernize Employee IT",
        ctaDescription: "Deliver the consumer-grade experience employees expect with the enterprise-grade security you need.",
        ctaButtonText: "Explore Platform Architecture"
    }
};

// Import helper for icon resolution if needed, or ensuring icons match
import { CheckSquare, MessageSquare } from "lucide-react";
