import {
    Network,
    Building2,
    Globe,
    ShieldCheck,
    TrendingUp,
    Zap,
    Users,
    Lock,
    FileText,
    BarChart3,
    Target,
    CheckCircle2,
    Layers,
    Cloud,
    Database,
    Scale,
    BookOpen,
    Briefcase,
    RefreshCw,
    BrainCircuit,
    Lightbulb
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface PartnerStat {
    value: string
    label: string
    explanation: string
}

export interface PartnerCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface PartnerData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: PartnerStat[]
    capabilities: PartnerCapability[]
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

export const partnersPageData: PartnerData[] = [
    {
        id: "technology-partners",
        badge: "Technology Partners",
        badgeIcon: Network,
        title: "A Composable Technology Ecosystem Built for Scale",
        tagline: "Integration, extensibility, and enterprise readiness.",
        description: "Built on an API-first, modular architecture that integrates seamlessly with your existing enterprise technology stack.",
        stats: [
            {
                value: "50+",
                label: "Technology Integrations",
                explanation: "Pre-built connectors for major enterprise platforms."
            },
            {
                value: "100%",
                label: "Enterprise Security",
                explanation: "SOC2, ISO 27001, and bank-grade encryption."
            },
            {
                value: "100%",
                label: "API-First Architecture",
                explanation: "Extensible platform for custom integrations."
            },
            {
                value: "20+",
                label: "Cloud Providers",
                explanation: "Multi-cloud deployment across all major providers."
            }
        ],
        capabilities: [
            {
                title: "Cloud Infrastructure Partners",
                desc: "AWS, Azure, GCP deployment and optimization.",
                icon: Cloud
            },
            {
                title: "AI & LLM Providers",
                desc: "Integration with leading AI and language models.",
                icon: BrainCircuit
            },
            {
                title: "Identity & Security Platforms",
                desc: "SSO, MFA, and enterprise identity management.",
                icon: Lock
            },
            {
                title: "Data & Analytics Tools",
                desc: "BI, data warehouse, and analytics integrations.",
                icon: Database
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Fragmented Tech Stacks",
                    points: ["Disconnected HR, payroll, and talent systems", "Manual data synchronization", "Integration complexity"]
                },
                {
                    title: "Integration Risk",
                    points: ["Long deployment timelines", "Custom integration costs", "Vendor lock-in concerns"]
                }
            ],
            features: [
                { title: "API-First Design", desc: "RESTful APIs for all platform capabilities.", icon: Network },
                { title: "Modular Architecture", desc: "Deploy only what you need, when you need it.", icon: Layers },
                { title: "Pre-Built Connectors", desc: "50+ enterprise platform integrations.", icon: Zap }
            ],
            solutions: [
                { title: "Seamless Integration", desc: "Connect to existing systems without disruption." },
                { title: "Extensibility", desc: "Build custom workflows and integrations." },
                { title: "Future-Proof", desc: "Platform evolves with your technology needs." }
            ],
            outcomes: {
                operational: ["Faster deployment", "Lower integration costs", "Reduced technical debt"],
                risk: ["Lower vendor lock-in", "Better data security"]
            }
        },
        ctaHeadline: "Build with us",
        ctaDescription: "Join our technology partner ecosystem and extend the power of T2V-Employee.",
        ctaButtonText: "Become a Technology Partner",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "View Platform Architecture"
    },
    {
        id: "si-consulting-partners",
        badge: "SI & Consulting Partners",
        badgeIcon: Building2,
        title: "Accelerate Enterprise Transformation with Trusted Partners",
        tagline: "Implementation excellence and change management.",
        description: "Partner with leading system integrators and consulting firms to ensure successful enterprise rollouts and adoption.",
        stats: [
            {
                value: "3x",
                label: "Faster Rollouts",
                explanation: "Partner-led implementations reduce time-to-value."
            },
            {
                value: "80%",
                label: "Risk Reduction",
                explanation: "Proven methodologies and best practices."
            },
            {
                value: "50+",
                label: "Countries Covered",
                explanation: "Partners in every major market worldwide."
            },
            {
                value: "100%",
                label: "Proven Models",
                explanation: "Battle-tested change management frameworks."
            }
        ],
        capabilities: [
            {
                title: "Global System Integrators",
                desc: "Large-scale enterprise transformation expertise.",
                icon: Globe
            },
            {
                title: "Regional Consulting Firms",
                desc: "Local market knowledge and implementation support.",
                icon: Building2
            },
            {
                title: "HR & Transformation Specialists",
                desc: "Deep HR technology and change management expertise.",
                icon: Users
            },
            {
                title: "Change Management Experts",
                desc: "Adoption strategies and organizational readiness.",
                icon: Target
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Complex Rollouts",
                    points: ["Multi-region deployments", "Legacy system migration", "Stakeholder alignment"]
                },
                {
                    title: "Change Resistance",
                    points: ["User adoption challenges", "Process change management", "Training at scale"]
                }
            ],
            features: [
                { title: "Modular Deployment", desc: "Phase implementations to reduce risk.", icon: Layers },
                { title: "Guided Adoption", desc: "Partner-led change management programs.", icon: Target },
                { title: "Best Practices", desc: "Proven implementation methodologies.", icon: CheckCircle2 }
            ],
            solutions: [
                { title: "Partner-Led Implementations", desc: "Expert guidance from planning to go-live." },
                { title: "Change Enablement", desc: "Comprehensive training and adoption support." },
                { title: "Continuous Optimization", desc: "Post-deployment support and enhancement." }
            ],
            outcomes: {
                operational: ["Faster time-to-value", "Higher user adoption", "Better ROI realization"],
                risk: ["Lower implementation risk", "Smoother change management"]
            }
        },
        ctaHeadline: "Partner with us",
        ctaDescription: "Join our SI and consulting partner network to deliver enterprise transformation.",
        ctaButtonText: "Partner with Us",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Talk to Partner Team"
    },
    {
        id: "industry-partners",
        badge: "Industry Partners",
        badgeIcon: Briefcase,
        title: "Vertical Expertise Embedded into the Platform",
        tagline: "Industry-specific intelligence and domain knowledge.",
        description: "Collaborate with industry experts to deliver regulation-aware, domain-specific workforce intelligence.",
        stats: [
            {
                value: "100%",
                label: "Regulation Aware",
                explanation: "Pre-trained on industry-specific regulations."
            },
            {
                value: "25+",
                label: "Knowledge Graphs",
                explanation: "Deep domain expertise built into the platform."
            },
            {
                value: "2x",
                label: "Faster Adoption",
                explanation: "Pre-configured for industry requirements."
            },
            {
                value: "40%",
                label: "Lower Risk",
                explanation: "Industry-tuned compliance monitoring."
            }
        ],
        capabilities: [
            {
                title: "Healthcare & Life Sciences Experts",
                desc: "HIPAA, FDA, and clinical compliance expertise.",
                icon: ShieldCheck
            },
            {
                title: "Financial Services Specialists",
                desc: "Banking regulations and compliance intelligence.",
                icon: Scale
            },
            {
                title: "Manufacturing & Safety Authorities",
                desc: "OSHA, ISO, and operational safety knowledge.",
                icon: CheckCircle2
            },
            {
                title: "Retail & Workforce Advisors",
                desc: "Multi-location compliance and operations expertise.",
                icon: Users
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Generic Tools",
                    points: ["Lack of industry-specific features", "Generic compliance frameworks", "No domain expertise"]
                },
                {
                    title: "Regulatory Complexity",
                    points: ["Industry-specific regulations", "Multi-jurisdiction requirements", "Constant regulatory changes"]
                }
            ],
            features: [
                { title: "T2V Vertical KnowledgeAI", desc: "Industry-specific knowledge graphs and intelligence.", icon: BrainCircuit },
                { title: "Domain Expertise", desc: "Pre-trained on industry regulations and best practices.", icon: BookOpen },
                { title: "Compliance Intelligence", desc: "Industry-aware compliance monitoring.", icon: ShieldCheck }
            ],
            solutions: [
                { title: "Industry-Tuned Intelligence", desc: "AI that understands your industry's unique requirements." },
                { title: "Regulatory Expertise", desc: "Built-in knowledge of industry regulations." },
                { title: "Best Practice Frameworks", desc: "Industry-proven workflows and processes." }
            ],
            outcomes: {
                operational: ["Higher accuracy", "Faster trust and adoption", "Better compliance"],
                risk: ["Industry-specific risk mitigation", "Regulatory confidence"]
            }
        },
        ctaHeadline: "Bring your industry expertise",
        ctaDescription: "Partner with us to embed deep industry knowledge into the platform.",
        ctaButtonText: "Explore Industry Partnerships",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Request Partner Briefing"
    },
    {
        id: "compliance-legal-partners",
        badge: "Compliance & Legal Partners",
        badgeIcon: ShieldCheck,
        title: "Trusted Compliance & Legal Intelligence Ecosystem",
        tagline: "Regulatory expertise and legal intelligence.",
        description: "Collaborate with compliance and legal experts to deliver predictive, regulation-aware workforce intelligence.",
        stats: [
            {
                value: "50+",
                label: "Jurisdictions",
                explanation: "Global labor law and compliance expertise."
            },
            {
                value: "50%",
                label: "Faster Updates",
                explanation: "Real-time monitoring of regulatory changes."
            },
            {
                value: "24/7",
                label: "Audit Readiness",
                explanation: "Always-ready documentation and evidence."
            },
            {
                value: "90%",
                label: "Risk Reduction",
                explanation: "Proactive risk identification and mitigation."
            }
        ],
        capabilities: [
            {
                title: "Labor Law Specialists",
                desc: "Global employment law expertise and monitoring.",
                icon: Scale
            },
            {
                title: "Regulatory Advisory Firms",
                desc: "Compliance strategy and regulatory guidance.",
                icon: FileText
            },
            {
                title: "Audit & Risk Consultants",
                desc: "Risk assessment and audit preparation support.",
                icon: BarChart3
            },
            {
                title: "Data Privacy Experts",
                desc: "GDPR, CCPA, and data protection compliance.",
                icon: Lock
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Change",
                    points: ["Constant law updates", "Multi-jurisdiction complexity", "Compliance tracking burden"]
                },
                {
                    title: "Legal Risk",
                    points: ["Potential violations", "Audit exposure", "Litigation threats"]
                }
            ],
            features: [
                { title: "T2V ComplyAI", desc: "Automated compliance monitoring and alerts.", icon: ShieldCheck },
                { title: "DisputeAI", desc: "Employee relations and case management.", icon: Scale },
                { title: "Regulatory Intelligence", desc: "Real-time tracking of legal changes.", icon: RefreshCw }
            ],
            solutions: [
                { title: "Predictive Compliance", desc: "Forecast and prevent regulatory violations." },
                { title: "Legal Intelligence", desc: "AI-powered legal research and guidance." },
                { title: "Audit Automation", desc: "Continuous evidence collection and readiness." }
            ],
            outcomes: {
                operational: ["Lower fines and penalties", "Faster audits", "Reduced legal spend"],
                risk: ["Stronger governance", "Better regulatory relationships"]
            }
        },
        ctaHeadline: "Strengthen compliance together",
        ctaDescription: "Partner with us to deliver world-class compliance and legal intelligence.",
        ctaButtonText: "Partner on Compliance Solutions",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Talk to Legal AI Team"
    },
    {
        id: "channel-partners",
        badge: "Channel Partners",
        badgeIcon: TrendingUp,
        title: "Scaling Market Reach Through Strategic Alliances",
        tagline: "Growth, enablement, and market expansion.",
        description: "Join our channel partner program to expand market reach, drive co-selling opportunities, and accelerate growth.",
        stats: [
            {
                value: "2x",
                label: "Market Expansion",
                explanation: "Accelerated go-to-market with partner networks."
            },
            {
                value: "2x",
                label: "Co-Sell Programs",
                explanation: "Joint sales and marketing initiatives."
            },
            {
                value: "500+",
                label: "Enablement Tools",
                explanation: "Training, resources, and sales support."
            },
            {
                value: "150+",
                label: "Global Reach",
                explanation: "Partners in every major market worldwide."
            }
        ],
        capabilities: [
            {
                title: "Regional Resellers",
                desc: "Local market expertise and customer relationships.",
                icon: Globe
            },
            {
                title: "Industry Channels",
                desc: "Vertical-specific distribution and expertise.",
                icon: Briefcase
            },
            {
                title: "Enterprise Alliances",
                desc: "Strategic partnerships with major enterprises.",
                icon: Building2
            },
            {
                title: "Marketplace Partners",
                desc: "Cloud marketplace and app store presence.",
                icon: Network
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Scaling Reach",
                    points: ["Limited market coverage", "Geographic expansion needs", "Resource constraints"]
                },
                {
                    title: "Local Expertise",
                    points: ["Market-specific knowledge gaps", "Cultural and language barriers", "Regulatory differences"]
                }
            ],
            features: [
                { title: "Partner Enablement", desc: "Comprehensive training and certification programs.", icon: Target },
                { title: "Shared Intelligence", desc: "Joint customer insights and market data.", icon: Lightbulb },
                { title: "Co-Selling Tools", desc: "Sales resources and deal registration.", icon: Users }
            ],
            solutions: [
                { title: "Co-Selling Programs", desc: "Joint sales motions and revenue sharing." },
                { title: "Joint GTM Strategies", desc: "Coordinated marketing and sales campaigns." },
                { title: "Partner Success", desc: "Dedicated support and enablement resources." }
            ],
            outcomes: {
                operational: ["Faster growth", "Lower customer acquisition cost", "Better market coverage"],
                risk: ["Diversified revenue streams", "Reduced market risk"]
            }
        },
        ctaHeadline: "Grow with us",
        ctaDescription: "Join our channel partner program and unlock new revenue opportunities.",
        ctaButtonText: "Join Partner Program",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Download Partner Guide"
    }
]
