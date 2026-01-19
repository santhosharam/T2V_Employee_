import {
    Stethoscope,
    Landmark,
    Factory,
    Cpu,
    ShoppingCart,
    Briefcase,
    ShieldCheck,
    Clock,
    Users,
    TrendingUp,
    FileText,
    Target,
    BarChart3,
    Zap,
    Globe,
    BookOpen,
    Lock,
    CheckCircle2,
    Scale,
    Lightbulb,
    Network,
    RefreshCw,
    Search,
    BrainCircuit
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface IndustryStat {
    value: string
    label: string
    explanation: string
}

export interface IndustryCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface IndustryData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: IndustryStat[]
    capabilities: IndustryCapability[]
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

export const industriesPageData: IndustryData[] = [
    {
        id: "healthcare-life-sciences",
        badge: "Healthcare & Life Sciences",
        badgeIcon: Stethoscope,
        title: "AI-Driven Workforce Intelligence for Regulated Care Environments",
        tagline: "Compliance, safety, and workforce readiness.",
        description: "Navigate patient care demands, regulatory complexity, and clinical burnout with unified workforce intelligence built for healthcare's unique challenges.",
        stats: [
            {
                value: "92%",
                label: "Compliance Accuracy",
                explanation: "Automated credential tracking ensures regulatory adherence."
            },
            {
                value: "50%",
                label: "Faster Clinical Onboarding",
                explanation: "AI-driven training accelerates time-to-floor productivity."
            },
            {
                value: "Zero",
                label: "Critical Audit Findings",
                explanation: "Continuous compliance monitoring prevents violations."
            },
            {
                value: "35%",
                label: "Reduced Safety Incidents",
                explanation: "Real-time protocol access improves patient safety."
            }
        ],
        capabilities: [
            {
                title: "Clinical Workforce Credentialing",
                desc: "Automated license and certification tracking across all staff.",
                icon: ShieldCheck
            },
            {
                title: "HIPAA-Aware Knowledge Access",
                desc: "Secure, compliant access to medical protocols and guidelines.",
                icon: Lock
            },
            {
                title: "Compliance Training Acceleration",
                desc: "Rapid deployment of regulatory training updates.",
                icon: Zap
            },
            {
                title: "Incident & Audit Readiness",
                desc: "Always-ready documentation for regulatory inspections.",
                icon: FileText
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Complexity",
                    points: ["HIPAA, FDA, and Joint Commission requirements", "Multi-state license tracking", "Constant protocol updates"]
                },
                {
                    title: "Staffing Shortages",
                    points: ["Critical nursing shortages", "High clinical burnout rates", "Slow onboarding processes"]
                },
                {
                    title: "Audit Pressure",
                    points: ["Manual compliance tracking", "Expired credential risks", "Documentation gaps"]
                }
            ],
            features: [
                { title: "T2V Vertical KnowledgeAI", desc: "Medical knowledge base with protocol intelligence.", icon: BrainCircuit },
                { title: "T2V AccelerateAI", desc: "Clinical scenario training and microlearning.", icon: Zap },
                { title: "T2V ComplyAI", desc: "Automated credential and compliance monitoring.", icon: ShieldCheck }
            ],
            solutions: [
                { title: "Regulation-Aware Knowledge", desc: "AI that understands healthcare compliance requirements." },
                { title: "Rapid Clinical Onboarding", desc: "Accelerated training for traveling and new clinical staff." },
                { title: "Predictive Compliance", desc: "Proactive alerts for expiring credentials and training." }
            ],
            outcomes: {
                operational: ["Safer patient care", "Faster staff readiness", "Reduced administrative burden"],
                risk: ["Lower compliance risk", "Audit confidence"]
            }
        },
        ctaHeadline: "Transform healthcare workforce operations",
        ctaDescription: "Deliver better patient outcomes with a workforce that is always compliant, informed, and ready.",
        ctaButtonText: "Explore Healthcare Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "banking-financial-services",
        badge: "Banking & Financial Services",
        badgeIcon: Landmark,
        title: "Workforce Intelligence for Highly Regulated Financial Institutions",
        tagline: "Compliance, security, and agility.",
        description: "Navigate complex regulations, manage conduct risk, and upskill teams for digital transformation with AI-native workforce intelligence.",
        stats: [
            {
                value: "95%",
                label: "Regulatory Accuracy",
                explanation: "Pre-trained on global financial regulations."
            },
            {
                value: "75%",
                label: "Faster Audit Preparation",
                explanation: "Automated evidence collection streamlines audits."
            },
            {
                value: "90%",
                label: "Reduced AML/KYC Violations",
                explanation: "Real-time training updates prevent compliance gaps."
            },
            {
                value: "40%",
                label: "Lower Compliance Costs",
                explanation: "Automation reduces manual compliance overhead."
            }
        ],
        capabilities: [
            {
                title: "AML & KYC Knowledge Intelligence",
                desc: "Instant access to current anti-money laundering protocols.",
                icon: Search
            },
            {
                title: "Regulatory Change Management",
                desc: "Automated policy updates when regulations change.",
                icon: RefreshCw
            },
            {
                title: "Role-Based Compliance Training",
                desc: "Targeted training for specific regulatory requirements.",
                icon: Target
            },
            {
                title: "Audit-Ready Workforce Data",
                desc: "Complete documentation for regulatory examinations.",
                icon: FileText
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Overload",
                    points: ["SEC, FINRA, Basel III requirements", "Frequent regulation changes", "Multi-jurisdiction complexity"]
                },
                {
                    title: "Audit Risk",
                    points: ["Manual evidence collection", "Incomplete training records", "Conduct risk exposure"]
                },
                {
                    title: "Talent Scarcity",
                    points: ["Digital skills gap", "Fintech transformation needs", "Retention challenges"]
                }
            ],
            features: [
                { title: "T2V Vertical KnowledgeAI", desc: "Financial regulation expertise engine.", icon: Scale },
                { title: "T2V ComplyAI", desc: "Continuous compliance monitoring and alerts.", icon: ShieldCheck },
                { title: "T2V AssessAI", desc: "Performance tracking with bias detection.", icon: BarChart3 }
            ],
            solutions: [
                { title: "Predictive Compliance", desc: "Forecast and prevent regulatory violations." },
                { title: "Skill Readiness", desc: "Rapid upskilling for digital banking transformation." },
                { title: "Conduct Risk Intelligence", desc: "Early detection of potential compliance issues." }
            ],
            outcomes: {
                operational: ["Reduced fines and penalties", "Faster audit cycles", "Better regulatory relationships"],
                risk: ["Stronger governance", "Lower legal exposure"]
            }
        },
        ctaHeadline: "Secure your financial operations",
        ctaDescription: "Build a compliant, agile workforce ready for the future of finance.",
        ctaButtonText: "Explore Financial Services Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Industry Expert"
    },
    {
        id: "manufacturing-supply-chain",
        badge: "Manufacturing & Supply Chain",
        badgeIcon: Factory,
        title: "Operational Workforce Intelligence for Safety, Quality & Scale",
        tagline: "Safety, productivity, and operational excellence.",
        description: "Drive frontline performance, preserve tribal knowledge, and ensure safety compliance across distributed manufacturing operations.",
        stats: [
            {
                value: "70%",
                label: "Fewer Safety Incidents",
                explanation: "Real-time SOP access reduces procedural errors."
            },
            {
                value: "50%",
                label: "Faster Equipment Readiness",
                explanation: "Accelerated training on new machinery and processes."
            },
            {
                value: "Higher",
                label: "First-Time Quality",
                explanation: "Consistent training improves production quality."
            },
            {
                value: "30%",
                label: "Reduced Downtime",
                explanation: "Better-trained workforce resolves issues faster."
            }
        ],
        capabilities: [
            {
                title: "Safety & SOP Knowledge",
                desc: "Voice-activated access to safety procedures on the floor.",
                icon: ShieldCheck
            },
            {
                title: "Equipment Training Acceleration",
                desc: "AR/video microlearning for machinery operation.",
                icon: Zap
            },
            {
                title: "Multi-Site Workforce Visibility",
                desc: "Unified view of skills and certifications across plants.",
                icon: Globe
            },
            {
                title: "Compliance & Incident Tracking",
                desc: "Automated OSHA and ISO compliance monitoring.",
                icon: CheckCircle2
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Safety Risk",
                    points: ["OSHA compliance requirements", "Complex safety procedures", "Incident prevention needs"]
                },
                {
                    title: "Skill Gaps",
                    points: ["Retiring workforce knowledge loss", "New equipment training needs", "Quality consistency issues"]
                },
                {
                    title: "Distributed Workforce",
                    points: ["Multi-site coordination", "Deskless worker access", "Shift handover challenges"]
                }
            ],
            features: [
                { title: "T2V AccelerateAI", desc: "Mobile-first microlearning for frontline staff.", icon: Zap },
                { title: "T2V KnowledgeAI", desc: "Tribal knowledge capture and distribution.", icon: BookOpen },
                { title: "T2V PerformAI", desc: "Production metrics linked to skill profiles.", icon: TrendingUp }
            ],
            solutions: [
                { title: "Scenario Training", desc: "Realistic simulations for safety and quality." },
                { title: "Real-Time Guidance", desc: "Instant access to SOPs and troubleshooting." },
                { title: "Knowledge Preservation", desc: "Capture expertise before it walks out the door." }
            ],
            outcomes: {
                operational: ["Safer operations", "Higher productivity", "Better quality consistency"],
                risk: ["Reduced safety incidents", "Compliance confidence"]
            }
        },
        ctaHeadline: "Empower your frontline workforce",
        ctaDescription: "Build operational excellence with intelligence that reaches every worker, on every shift.",
        ctaButtonText: "Explore Manufacturing Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "technology-software",
        badge: "Technology & Software",
        badgeIcon: Cpu,
        title: "AI-Native Workforce Intelligence for High-Velocity Tech Teams",
        tagline: "Innovation, agility, and talent retention.",
        description: "Scale engineering teams, accelerate skill development, and manage global operations in hyper-growth environments.",
        stats: [
            {
                value: "60%",
                label: "Faster Skill Ramp-Up",
                explanation: "AI-curated learning paths accelerate developer productivity."
            },
            {
                value: "Higher",
                label: "Retention Rates",
                explanation: "Career pathing and development reduce attrition."
            },
            {
                value: "Faster",
                label: "Product Delivery",
                explanation: "Better-skilled teams ship features more quickly."
            },
            {
                value: "Lower",
                label: "Hiring Dependency",
                explanation: "Internal mobility reduces external recruitment needs."
            }
        ],
        capabilities: [
            {
                title: "Skills & Capability Intelligence",
                desc: "Real-time skill graphs from code commits and projects.",
                icon: Network
            },
            {
                title: "Knowledge Acceleration",
                desc: "Automated documentation and learning from codebases.",
                icon: BookOpen
            },
            {
                title: "AI-Driven Hiring",
                desc: "Automated technical screening and candidate matching.",
                icon: Users
            },
            {
                title: "Performance Intelligence",
                desc: "Data-driven performance insights and burnout detection.",
                icon: BarChart3
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Skill Obsolescence",
                    points: ["Rapid technology changes", "Continuous learning needs", "Knowledge gaps in new tech"]
                },
                {
                    title: "Hiring Pressure",
                    points: ["Competitive talent market", "Slow recruitment processes", "High cost per hire"]
                },
                {
                    title: "Burnout Risk",
                    points: ["High-performance culture stress", "Work-life balance challenges", "Unexpected attrition"]
                }
            ],
            features: [
                { title: "T2V TalentAI", desc: "Skills inference from work artifacts.", icon: Lightbulb },
                { title: "T2V RecruitAI", desc: "Automated sourcing and technical screening.", icon: Search },
                { title: "T2V AccelerateAI", desc: "Custom learning paths for tech stack migration.", icon: Zap }
            ],
            solutions: [
                { title: "Rapid Reskilling", desc: "AI-generated courses for new technologies." },
                { title: "Internal Mobility", desc: "Match engineers to projects based on skills and interests." },
                { title: "Burnout Prevention", desc: "Early warning system for at-risk talent." }
            ],
            outcomes: {
                operational: ["Faster innovation cycles", "Agile workforce adaptation", "Better talent utilization"],
                risk: ["Reduced turnover", "Stronger culture"]
            }
        },
        ctaHeadline: "Build the team that builds the future",
        ctaDescription: "Empower your tech workforce with intelligence that scales with your ambition.",
        ctaButtonText: "Explore Tech Industry Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to a Specialist"
    },
    {
        id: "retail-consumer-goods",
        badge: "Retail & Consumer Goods",
        badgeIcon: ShoppingCart,
        title: "Scalable Workforce Intelligence for Seasonal & Distributed Teams",
        tagline: "Scale, consistency, and customer experience.",
        description: "Manage high-volume hiring, deliver consistent brand experiences, and optimize frontline performance across all locations.",
        stats: [
            {
                value: "Faster",
                label: "Seasonal Onboarding",
                explanation: "Automated hiring and training for peak periods."
            },
            {
                value: "40%",
                label: "Reduced Turnover",
                explanation: "Better engagement and career pathing retain talent."
            },
            {
                value: "Better",
                label: "Store Consistency",
                explanation: "Standardized training ensures brand alignment."
            },
            {
                value: "Lower",
                label: "Training Costs",
                explanation: "Mobile microlearning reduces training overhead."
            }
        ],
        capabilities: [
            {
                title: "High-Volume Hiring Intelligence",
                desc: "Text-based applications and automated screening.",
                icon: Users
            },
            {
                title: "Microlearning for Frontline Staff",
                desc: "Daily 2-minute lessons on products and promotions.",
                icon: Zap
            },
            {
                title: "Multi-Location Compliance",
                desc: "Wage, hour, and safety compliance across all stores.",
                icon: ShieldCheck
            },
            {
                title: "Workforce Performance Visibility",
                desc: "Sales correlation with training completion.",
                icon: BarChart3
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Seasonal Churn",
                    points: ["High turnover rates", "Rapid hiring needs", "Inconsistent service quality"]
                },
                {
                    title: "Training Scale",
                    points: ["Thousands of distributed workers", "Product knowledge updates", "Engaging Gen Z workforce"]
                },
                {
                    title: "Compliance Complexity",
                    points: ["Multi-state wage laws", "Minor employment rules", "Safety requirements"]
                }
            ],
            features: [
                { title: "T2V RecruitAI", desc: "24/7 automated hiring for seasonal peaks.", icon: Clock },
                { title: "T2V AccelerateAI", desc: "Mobile-first gamified product training.", icon: Target },
                { title: "T2V PortalAI", desc: "Instant answers for frontline questions.", icon: Search }
            ],
            solutions: [
                { title: "Rapid Enablement", desc: "Get seasonal staff productive in days, not weeks." },
                { title: "Compliance at Scale", desc: "Automated monitoring across all locations." },
                { title: "Brand Consistency", desc: "Ensure every customer gets the same great experience." }
            ],
            outcomes: {
                operational: ["Consistent customer experience", "Lower operational costs", "Higher sales per employee"],
                risk: ["Compliance confidence", "Reduced shrinkage"]
            }
        },
        ctaHeadline: "Deliver exceptional customer experiences",
        ctaDescription: "Empower your frontline teams with the knowledge and tools to represent your brand perfectly.",
        ctaButtonText: "Explore Retail Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Request Demo"
    },
    {
        id: "professional-services",
        badge: "Professional Services",
        badgeIcon: Briefcase,
        title: "Knowledge-Driven Workforce Intelligence for Client-Facing Teams",
        tagline: "Utilization, expertise, and client outcomes.",
        description: "Maximize billable hours, optimize resource allocation, and leverage collective knowledge across your professional services firm.",
        stats: [
            {
                value: "Faster",
                label: "Consultant Ramp-Up",
                explanation: "AI-generated learning from past engagements."
            },
            {
                value: "10%",
                label: "Higher Utilization",
                explanation: "Better project staffing and resource allocation."
            },
            {
                value: "Reduced",
                label: "Knowledge Loss",
                explanation: "Capture and share expertise across the firm."
            },
            {
                value: "Better",
                label: "Client Outcomes",
                explanation: "Access to firm-wide best practices and insights."
            }
        ],
        capabilities: [
            {
                title: "Expertise Capture & Sharing",
                desc: "Index all deliverables for firm-wide knowledge access.",
                icon: BookOpen
            },
            {
                title: "Utilization Intelligence",
                desc: "Project-based performance and billability tracking.",
                icon: BarChart3
            },
            {
                title: "Role-Based Knowledge Access",
                desc: "Instant access to relevant case studies and precedents.",
                icon: Search
            },
            {
                title: "Performance & Engagement Tracking",
                desc: "Continuous feedback at project milestones.",
                icon: TrendingUp
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Knowledge Silos",
                    points: ["Expertise locked in individual minds", "Reinventing solutions", "Lost institutional knowledge"]
                },
                {
                    title: "Utilization Pressure",
                    points: ["Balancing billability and development", "Resource allocation inefficiency", "Burnout risks"]
                },
                {
                    title: "Talent Retention",
                    points: ["Competing with industry for talent", "Limited career visibility", "Work-life balance challenges"]
                }
            ],
            features: [
                { title: "T2V KnowledgeAI", desc: "Semantic search across all firm deliverables.", icon: Search },
                { title: "T2V PerformAI", desc: "Project-based performance analytics.", icon: BarChart3 },
                { title: "T2V AssessAI", desc: "Continuous feedback and development tracking.", icon: Target }
            ],
            solutions: [
                { title: "Knowledge Acceleration", desc: "Make every consultant as smart as the whole firm." },
                { title: "Performance Insight", desc: "Data-driven staffing and development decisions." },
                { title: "Expertise Location", desc: "Find the right person for every client need." }
            ],
            outcomes: {
                operational: ["Higher margins", "Better delivery quality", "Faster proposal development"],
                risk: ["Reduced knowledge loss", "Improved retention"]
            }
        },
        ctaHeadline: "Unlock your firm's collective intelligence",
        ctaDescription: "Transform how your firm captures, shares, and leverages expertise for client success.",
        ctaButtonText: "Explore Professional Services Solutions",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to an Advisor"
    }
]
