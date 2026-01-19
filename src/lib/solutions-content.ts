import {
    LayoutDashboard,
    PieChart,
    Users,
    ShieldCheck,
    TrendingUp,
    Briefcase,
    Globe,
    Zap,
    FileText,
    BrainCircuit,
    Search,
    Gavel,
    Scale,
    BarChart3,
    Target,
    BookOpen,
    Lightbulb,
    CheckCircle2,
    Lock,
    RefreshCw,
    Network
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface SolutionStat {
    value: string
    label: string
    explanation: string
}

export interface SolutionCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface SolutionTabContent {
    title?: string // Optional title for the list
    points?: string[] // For challenges
    desc?: string // For features/solutions
}

export interface SolutionData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: SolutionStat[]
    capabilities: SolutionCapability[]
    moduleData: {
        challenges: { title: string, points: string[] }[]
        features: { title: string, desc: string, icon: LucideIcon }[]
        solutions: { title: string, desc: string }[]
        outcomes: {
            stats?: { value: string, label: string }[]
            operational: string[]
            risk?: string[]
        }
    }
    ctaHeadline: string
    ctaDescription: string
    ctaButtonText: string
    ctaButtonLink: string
    secondaryCtaButtonText: string
}

export const solutionsPageData: SolutionData[] = [
    {
        id: "workforce-intelligence",
        badge: "Workforce Intelligence",
        badgeIcon: LayoutDashboard,
        title: "Real-Time Workforce Intelligence for Better Decisions",
        tagline: "Unified data visibility.",
        description: "Gain unified visibility and trusted data across your global workforce to drive strategic decisions with confidence.",
        stats: [
            {
                value: "99.7%",
                label: "Workforce Data Accuracy",
                explanation: "Unified system of record ensures single source of truth."
            },
            {
                value: "75%",
                label: "Faster Executive Reporting",
                explanation: "Real-time dashboards replace manual report generation."
            },
            {
                value: "90%",
                label: "Reduction in Data Errors",
                explanation: "Automated validation and cleansing of workforce data."
            },
            {
                value: "100%",
                label: "Audit-Ready",
                explanation: "Complete traceability and history for compliance."
            }
        ],
        capabilities: [
            {
                title: "Unified Workforce Data",
                desc: "Connects HRIS, ATS, and ERP into one clean data layer.",
                icon: DatabaseIcon()
            },
            {
                title: "Predictive Workforce Insights",
                desc: "Forecasts attrition, costs, and headcount trends.",
                icon: TrendingUp
            },
            {
                title: "Role-Based Dashboards",
                desc: "Personalized views for C-Suite, HR, and Managers.",
                icon: LayoutDashboard
            },
            {
                title: "AI Workforce Copilot",
                desc: "Ask questions about your data in plain language.",
                icon: Zap
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Fragmented Visibility",
                    points: ["Data silos across HRIS, ATS, and Payroll", "Manual reconciliation of spreadsheets", "Delayed reporting to leadership"]
                },
                {
                    title: "Data Distrust",
                    points: ["Inconsistent metrics across regions", "High error rates in manual data entry", "Lack of audit trail"]
                }
            ],
            features: [
                { title: "T2V CoreAI Engine", desc: "Centralized data ingestion and cleaning pipeline.", icon: BrainCircuit },
                { title: "T2V PortalAI Interface", desc: "Natural language access to workforce insights.", icon: Search },
                { title: "Smart Connectors", desc: "Pre-built integrations for major HR systems.", icon: Network }
            ],
            solutions: [
                { title: "Single Source of Truth", desc: "One unified record for every employee globally." },
                { title: "Predictive Intelligence", desc: "Machine learning models for future planning." },
                { title: "Automated Governance", desc: "Rules-based data quality and access control." }
            ],
            outcomes: {
                operational: ["Faster decision making", "Reduced IT overhead", "Eliminated manual reporting"],
                risk: ["Data privacy compliance", "Audit readiness"]
            }
        },
        ctaHeadline: "See your workforce clearly",
        ctaDescription: "Eliminate blind spots and drive strategy with unified workforce intelligence.",
        ctaButtonText: "Explore Platform",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "knowledge-acceleration",
        badge: "Knowledge Acceleration",
        badgeIcon: BookOpen,
        title: "Turn Knowledge into Capability — Faster",
        tagline: "Accelerate learning and adoption.",
        description: "Transform static documents into active, just-in-time intelligence that empowers employees to learn in the flow of work.",
        stats: [
            {
                value: "50–60%",
                label: "Faster Onboarding",
                explanation: "Reduce ramp-up time for new hires significantly."
            },
            {
                value: "85%",
                label: "Knowledge Retention",
                explanation: "Interactive, micro-learning improves recall."
            },
            {
                value: "70%",
                label: "Training Cost Reduction",
                explanation: "AI-generated content lowers development costs."
            },
            {
                value: "2x",
                label: "Faster Change Adoption",
                explanation: "Quickly roll out new processes and tools."
            }
        ],
        capabilities: [
            {
                title: "AI Microlearning",
                desc: "Generates bite-sized lessons from long docs instantly.",
                icon: SparklesIcon()
            },
            {
                title: "Adaptive Learning Paths",
                desc: "Personalizes curriculum based on role and gaps.",
                icon: Target
            },
            {
                title: "Scenario Simulations",
                desc: "Role-play practice for soft skills and sales.",
                icon: Users
            },
            {
                title: "Embedded Learning",
                desc: "Delivers training directly within Slack/Teams.",
                icon: Zap
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Slow Ramp-Up",
                    points: ["New hires take months to become productive", "Generic training doesn't stick", "Knowledge is hard to find"]
                },
                {
                    title: "Low ROI",
                    points: ["Expensive content creation", "Low engagement with LMS", "No link to performance"]
                }
            ],
            features: [
                { title: "T2V KnowledgeAI", desc: "Semantic search for instant answers.", icon: Search },
                { title: "T2V AccelerateAI", desc: "Workflow-embedded learning engine.", icon: RocketIcon() }
            ],
            solutions: [
                { title: "AI-Generated Learning", desc: "Create courses from docs in seconds." },
                { title: "Adaptive Journeys", desc: "Dynamic paths that evolve with the learner." },
                { title: "Just-in-Time Delivery", desc: "Content surfaced exactly when needed." }
            ],
            outcomes: {
                operational: ["Faster productivity", "Higher employee engagement", "Reduced support tickets"],
                risk: ["Consistent policy understanding"]
            }
        },
        ctaHeadline: "Build a learning organization",
        ctaDescription: "Empower your team with AI-driven knowledge and capability acceleration.",
        ctaButtonText: "View Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "talent-acquisition",
        badge: "Talent Acquisition",
        badgeIcon: Users,
        title: "AI-Native Talent Acquisition at Enterprise Scale",
        tagline: "Hire faster, better, fairer.",
        description: "Modernize your recruiting with AI that automates sourcing, screening, and scheduling while reducing bias.",
        stats: [
            {
                value: "50–65%",
                label: "Faster Time-to-Hire",
                explanation: "Automate manual steps to secure top talent quickly."
            },
            {
                value: "40–55%",
                label: "Lower Cost per Hire",
                explanation: "Reduce agency spend and administrative overhead."
            },
            {
                value: "45%",
                label: "Increase in Diverse Hiring",
                explanation: "Bias-aware screening ensures fair evaluation."
            },
            {
                value: "90%",
                label: "Higher Offer Acceptance",
                explanation: "Better candidate experience drives conversion."
            }
        ],
        capabilities: [
            {
                title: "Predictive Talent Sourcing",
                desc: "Finds passive candidates that match your exact needs.",
                icon: Search
            },
            {
                title: "Skill-Based Screening",
                desc: "Validates capabilities beyond resume keywords.",
                icon: CheckCircle2
            },
            {
                title: "Bias-Aware Evaluation",
                desc: "Anonymizes data to focus on merit.",
                icon: Scale
            },
            {
                title: "Hiring Intelligence Analytics",
                desc: "Optimizes the funnel with real-time funnel metrics.",
                icon: BarChart3
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Inefficient Process",
                    points: ["Slow manual screening", "Scheduling bottlenecks", "High agency costs"]
                },
                {
                    title: "Quality & Bias",
                    points: ["Unconscious bias in selection", "Poor candidate experience", "Missed top talent"]
                }
            ],
            features: [
                { title: "T2V RecruitAI", desc: "End-to-end hiring automation suite.", icon: Users },
                { title: "T2V TalentAI", desc: "Internal mobility and skills matching.", icon: Briefcase }
            ],
            solutions: [
                { title: "Predictive Hiring", desc: "Identify best-fit candidates automatically." },
                { title: "Skills-First Approach", desc: "Match on potential, not just pedigree." }
            ],
            outcomes: {
                operational: ["Faster hiring cycles", "Lower recruiting costs", "Better quality of hire"],
                risk: ["Fair hiring compliance"]
            }
        },
        ctaHeadline: "Win the war for talent",
        ctaDescription: "Transform your recruiting into a strategic advantage with AI intelligence.",
        ctaButtonText: "Explore Talent Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Expert"
    },
    {
        id: "compliance-risk",
        badge: "Compliance & Risk",
        badgeIcon: ShieldCheck,
        title: "Predictive Compliance & Legal Intelligence",
        tagline: "Proactive risk protection.",
        description: "Stay ahead of global regulations with AI that monitors changes, updates policies, and predicts risk exposure.",
        stats: [
            {
                value: "85–92%",
                label: "Fewer Violations",
                explanation: "Proactive alerts prevent compliance breaches."
            },
            {
                value: "90–95%",
                label: "Fine Exposure Reduction",
                explanation: "Minimize financial risk from non-compliance."
            },
            {
                value: "70%",
                label: "Faster Audits",
                explanation: "Automated evidence collection streamlines audits."
            },
            {
                value: "75–80%",
                label: "Fewer Labor Disputes",
                explanation: "Consistent policy application reduces friction."
            }
        ],
        capabilities: [
            {
                title: "Predictive Compliance Scoring",
                desc: "Identifies high-risk areas before issues occur.",
                icon: BarChart3
            },
            {
                title: "Regulation-Aware Policies",
                desc: "Auto-adjusts policies to match local laws.",
                icon: Globe
            },
            {
                title: "Continuous Audit Readiness",
                desc: "Always prepared for external or internal audits.",
                icon: FileText
            },
            {
                title: "Dispute Prevention",
                desc: "Standardizes responses to employee grievances.",
                icon: Gavel
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Global Complexity",
                    points: ["Navigating multi-jurisdiction labor laws", "Keeping policies up to date", "Manual audit preparation"]
                },
                {
                    title: "Reactive Risk",
                    points: ["Discovering violations after the fact", "Inconsistent enforcement", "High legal costs"]
                }
            ],
            features: [
                { title: "T2V ComplyAI", desc: "Global regulatory monitoring engine.", icon: ShieldCheck },
                { title: "DisputeAI", desc: "Employee relations and case management.", icon: Gavel }
            ],
            solutions: [
                { title: "Predictive Intelligence", desc: "Forecast and mitigate legal risks." },
                { title: "Automated Governance", desc: "Ensure policy adherence globally." }
            ],
            outcomes: {
                operational: ["Reduced legal spend", "Faster audit cycles"],
                risk: ["Lower litigation risk", "Brand protection"]
            }
        },
        ctaHeadline: "Protect your organization",
        ctaDescription: "Navigate the complex landscape of global compliance with confidence.",
        ctaButtonText: "Explore Compliance Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to Risk Advisor"
    },
    {
        id: "performance-intelligence",
        badge: "Performance Intelligence",
        badgeIcon: TrendingUp,
        title: "Continuous Performance Intelligence, Not Annual Reviews",
        tagline: "Drive real-time growth.",
        description: "Move from backward-looking reviews to continuous, data-driven performance management that fosters growth and alignment.",
        stats: [
            {
                value: "50%",
                label: "Faster Review Cycles",
                explanation: "Streamlined process saves management time."
            },
            {
                value: "25%",
                label: "Productivity Increase",
                explanation: "Continuous feedback drives output."
            },
            {
                value: "40%",
                label: "Retention Rates",
                explanation: "Clear growth paths keep talent engaged."
            },
            {
                value: "100%",
                label: "Bias-Aware Evaluation",
                explanation: "Data checks reduce subjective bias."
            }
        ],
        capabilities: [
            {
                title: "Continuous Feedback",
                desc: "Real-time recognition and coaching moments.",
                icon: RefreshCw
            },
            {
                title: "Performance Analytics",
                desc: "Objective data on goals and deliverables.",
                icon: PieChart
            },
            {
                title: "AI Coaching",
                desc: "Prompts managers with personalized coaching tips.",
                icon: Lightbulb
            },
            {
                title: "Outcome Tracking",
                desc: "Connects individual goals to company strategy.",
                icon: Target
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Broken Process",
                    points: ["Annual reviews are too slow and subjective", "Feedback is forgotten", "Goals are misaligned"]
                },
                {
                    title: "Low Engagement",
                    points: ["Employees feel undervalued", "Lack of clear development paths", "Manager bias"]
                }
            ],
            features: [
                { title: "T2V AssessAI", desc: "Continuous performance management suite.", icon: TrendingUp }
            ],
            solutions: [
                { title: "Data-Driven Performance", desc: "Base decisions on outcomes, not opinions." },
                { title: "Continuous Coaching", desc: "Develop talent in real-time." }
            ],
            outcomes: {
                operational: ["Higher productivity", "Better goal alignment"],
                risk: ["Fairness and inclusion"]
            }
        },
        ctaHeadline: "Elevate team performance",
        ctaDescription: "Unlock the full potential of your workforce with continuous intelligence.",
        ctaButtonText: "Explore Performance Intelligence",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "hybrid-workforce",
        badge: "Hybrid Workforce",
        badgeIcon: Globe,
        title: "Optimize Hybrid & Contract Workforce Performance",
        tagline: "Manage the future of work.",
        description: "Seamlessly manage your hybrid and contingent workforce with full visibility into utilization, compliance, and performance.",
        stats: [
            {
                value: "30%",
                label: "Lower Overhead",
                explanation: "Reduce costs of managing contract labor."
            },
            {
                value: "90%",
                label: "Utilization Rate",
                explanation: "Ensure contractors are deployed effectively."
            },
            {
                value: "85%",
                label: "Risk Reduction",
                explanation: "Automated checks for worker status."
            },
            {
                value: "99%",
                label: "SLA Compliance",
                explanation: "Track vendor performance in real-time."
            }
        ],
        capabilities: [
            {
                title: "Contract Management",
                desc: "End-to-end lifecycle for contingent workers.",
                icon: FileText
            },
            {
                title: "Utilization Forecasting",
                desc: "Predict demand and optimize staffing levels.",
                icon: TrendingUp
            },
            {
                title: "Vendor Performance",
                desc: "Track SLAs and deliverables automatically.",
                icon: BarChart3
            },
            {
                title: "Compliance Controls",
                desc: "Ensure adherence to labor laws and security.",
                icon: ShieldCheck
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Visibility Gaps",
                    points: ["Who are our contractors?", "What are they working on?", "Are we overpaying?"]
                },
                {
                    title: "Hidden Risks",
                    points: ["Co-employment liability", "Security access creep", "Poor vendor performance"]
                }
            ],
            features: [
                { title: "T2V ContractAI", desc: "Contingent workforce management.", icon: FileText },
                { title: "T2V PerformAI", desc: "Vendor and SLA performance tracking.", icon: ActivityIcon() }
            ],
            solutions: [
                { title: "AI-Managed Workforce", desc: "Automate heavy lifting of contractor ops." },
                { title: "Total Talent View", desc: "Integrate contingent and permanent data." }
            ],
            outcomes: {
                operational: ["Optimized spend", "Flexible scaling"],
                risk: ["Compliance safety"]
            }
        },
        ctaHeadline: "Master the hybrid workforce",
        ctaDescription: "Gain control and visibility over your extended talent ecosystem.",
        ctaButtonText: "Explore Hybrid Workforce Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Expert"
    }
]

// Helper icons functions to avoid cluttering imports if needed, 
// using generic ones from above import list.
function DatabaseIcon() { return Lock } // Temporary placeholder replacement
function SparklesIcon() { return Zap }
function RocketIcon() { return Zap }
function ActivityIcon() { return CheckCircle2 }
