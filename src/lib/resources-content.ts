import {
    BookOpen,
    Lightbulb,
    FileText,
    ShieldCheck,
    Target,
    BarChart3,
    Users,
    TrendingUp,
    Layers,
    Network,
    Search,
    BrainCircuit,
    Zap,
    CheckCircle2,
    Scale,
    RefreshCw,
    Briefcase,
    Database
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ResourceStat {
    value: string
    label: string
    explanation: string
}

export interface ResourceCapability {
    title: string
    desc: string
    icon: LucideIcon
}

export interface ResourceData {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: ResourceStat[]
    capabilities: ResourceCapability[]
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

export const resourcesPageData: ResourceData[] = [
    {
        id: "executive-insights",
        badge: "Executive Insights",
        badgeIcon: Lightbulb,
        title: "Strategic Perspectives on the Future of Work",
        tagline: "AI, workforce intelligence, and leadership.",
        description: "Board-level insights on AI-native workforce transformation, strategic HR evolution, and the future of enterprise talent management.",
        stats: [
            {
                value: "50+",
                label: "Enterprise Insights",
                explanation: "In-depth articles and strategic perspectives."
            },
            {
                value: "150+",
                label: "Industry Coverage",
                explanation: "Insights spanning all major industries and markets."
            },
            {
                value: "100%",
                label: "Board Perspectives",
                explanation: "Strategic content for C-suite decision-makers."
            },
            {
                value: "4x",
                label: "Quarterly Updates",
                explanation: "Regular publication of new insights and research."
            }
        ],
        capabilities: [
            {
                title: "Executive Articles",
                desc: "Strategic perspectives on workforce transformation.",
                icon: FileText
            },
            {
                title: "AI Workforce Trends",
                desc: "Latest developments in AI-native workforce intelligence.",
                icon: TrendingUp
            },
            {
                title: "Future of HR & Work",
                desc: "Thought leadership on the evolving workplace.",
                icon: Lightbulb
            },
            {
                title: "Enterprise AI Strategy Briefs",
                desc: "Practical guidance for AI adoption and governance.",
                icon: Target
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Rapid Change",
                    points: ["AI disruption in HR", "Evolving workforce models", "Technology adoption pressure"]
                },
                {
                    title: "Unclear AI Strategy",
                    points: ["Lack of AI roadmap", "Uncertain ROI", "Implementation complexity"]
                }
            ],
            features: [
                { title: "Workforce Intelligence", desc: "Strategic frameworks for AI-native HR.", icon: BrainCircuit },
                { title: "AI-Native Models", desc: "Operating models for the AI era.", icon: Network },
                { title: "Executive Guidance", desc: "Board-ready insights and recommendations.", icon: Target }
            ],
            solutions: [
                { title: "Strategic Frameworks", desc: "Proven models for workforce transformation." },
                { title: "Operating Models", desc: "AI-native organizational structures." },
                { title: "Change Leadership", desc: "Guidance for leading transformation." }
            ],
            outcomes: {
                operational: ["Better executive decisions", "Clearer AI strategy", "Faster transformation"],
                risk: ["Reduced transformation risk", "Better stakeholder alignment"]
            }
        },
        ctaHeadline: "Stay ahead of the curve",
        ctaDescription: "Access the latest strategic insights on workforce intelligence and AI transformation.",
        ctaButtonText: "View All Insights",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Subscribe for Updates"
    },
    {
        id: "platform-resources",
        badge: "Platform Resources",
        badgeIcon: Layers,
        title: "Deep Dives into the T2V-Employee Platform",
        tagline: "Architecture, capabilities, and integration.",
        description: "Comprehensive technical documentation, architecture guides, and platform deep-dives for evaluators and implementers.",
        stats: [
            {
                value: "100%",
                label: "Platform Coverage",
                explanation: "Documentation for all platform modules and capabilities."
            },
            {
                value: "50+",
                label: "Architecture Guides",
                explanation: "Detailed technical architecture documentation."
            },
            {
                value: "100%",
                label: "API & Integration",
                explanation: "Complete API reference and integration guides."
            },
            {
                value: "24/7",
                label: "Regular Updates",
                explanation: "Continuously updated with platform enhancements."
            }
        ],
        capabilities: [
            {
                title: "Platform Overviews",
                desc: "High-level architecture and capability summaries.",
                icon: Layers
            },
            {
                title: "Architecture Diagrams",
                desc: "Technical architecture and data flow documentation.",
                icon: Network
            },
            {
                title: "Feature Deep Dives",
                desc: "Detailed exploration of platform capabilities.",
                icon: Search
            },
            {
                title: "Integration Guides",
                desc: "Step-by-step integration and deployment guides.",
                icon: Database
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Understanding Platform Depth",
                    points: ["Complex capabilities", "Multiple modules", "Integration requirements"]
                },
                {
                    title: "Evaluation Complexity",
                    points: ["Technical assessment needs", "Architecture validation", "Security review"]
                }
            ],
            features: [
                { title: "T2V CoreAI", desc: "Unified data foundation and intelligence layer.", icon: Database },
                { title: "T2V KnowledgeAI", desc: "AI-powered knowledge management and access.", icon: BookOpen },
                { title: "T2V RecruitAI", desc: "Intelligent talent acquisition and screening.", icon: Users },
                { title: "T2V ComplyAI", desc: "Predictive compliance and risk intelligence.", icon: ShieldCheck }
            ],
            solutions: [
                { title: "How Modules Work Together", desc: "Understanding the integrated platform architecture." },
                { title: "Deployment Models", desc: "Cloud, hybrid, and on-premise options." },
                { title: "Integration Patterns", desc: "Best practices for enterprise integration." }
            ],
            outcomes: {
                operational: ["Faster evaluation", "Better technical understanding", "Smoother adoption"],
                risk: ["Reduced implementation risk", "Better architecture decisions"]
            }
        },
        ctaHeadline: "Explore the platform in depth",
        ctaDescription: "Access comprehensive technical documentation and architecture guides.",
        ctaButtonText: "Explore Platform Docs",
        ctaButtonLink: "/platform",
        secondaryCtaButtonText: "Talk to a Solution Architect"
    },
    {
        id: "industry-research",
        badge: "Industry Research",
        badgeIcon: Briefcase,
        title: "Industry-Specific Workforce Intelligence Insights",
        tagline: "Vertical expertise and domain knowledge.",
        description: "Regulation-aware, industry-specific research, case studies, and benchmarks for healthcare, finance, manufacturing, and more.",
        stats: [
            {
                value: "20+",
                label: "Industry Coverage",
                explanation: "Research across all major industry verticals."
            },
            {
                value: "100%",
                label: "Regulation Aware",
                explanation: "Industry-specific compliance and regulatory insights."
            },
            {
                value: "100%",
                label: "Real World Use",
                explanation: "Practical examples from enterprise deployments."
            },
            {
                value: "100%",
                label: "Quantified Outcomes",
                explanation: "Measurable business impact and ROI data."
            }
        ],
        capabilities: [
            {
                title: "Healthcare Case Studies",
                desc: "Clinical compliance, credentialing, and patient safety.",
                icon: ShieldCheck
            },
            {
                title: "Financial Services Reports",
                desc: "Regulatory compliance and conduct risk intelligence.",
                icon: Scale
            },
            {
                title: "Manufacturing Use Cases",
                desc: "Safety, quality, and operational excellence.",
                icon: CheckCircle2
            },
            {
                title: "Retail Workforce Playbooks",
                desc: "High-volume hiring and seasonal workforce management.",
                icon: Users
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Industry-Specific Problems",
                    points: ["Unique regulatory requirements", "Vertical-specific challenges", "Domain expertise needs"]
                },
                {
                    title: "Generic Solutions",
                    points: ["Lack of industry customization", "Missing domain knowledge", "Compliance gaps"]
                }
            ],
            features: [
                { title: "Domain-Aware AI", desc: "Industry-specific intelligence and knowledge.", icon: BrainCircuit },
                { title: "T2V Vertical KnowledgeAI", desc: "Pre-trained on industry regulations and best practices.", icon: BookOpen },
                { title: "Industry Benchmarks", desc: "Comparative metrics and performance data.", icon: BarChart3 }
            ],
            solutions: [
                { title: "Industry-Tuned Platform", desc: "Customized for vertical requirements." },
                { title: "Regulatory Intelligence", desc: "Built-in compliance and legal knowledge." },
                { title: "Best Practice Frameworks", desc: "Industry-proven workflows and processes." }
            ],
            outcomes: {
                operational: ["Measurable business impact", "Industry-specific ROI", "Faster adoption"],
                risk: ["Better compliance", "Reduced industry-specific risks"]
            }
        },
        ctaHeadline: "Explore industry-specific insights",
        ctaDescription: "Access research, case studies, and benchmarks for your industry.",
        ctaButtonText: "Explore Industry Resources",
        ctaButtonLink: "/industries",
        secondaryCtaButtonText: "Download Case Studies"
    },
    {
        id: "compliance-legal",
        badge: "Compliance & Legal Intelligence",
        badgeIcon: ShieldCheck,
        title: "AI-Powered Compliance & Legal Knowledge Hub",
        tagline: "Regulatory intelligence and risk mitigation.",
        description: "Comprehensive compliance resources, regulatory updates, and legal intelligence for enterprise workforce management.",
        stats: [
            {
                value: "50+",
                label: "Jurisdictions",
                explanation: "Global labor law and compliance expertise."
            },
            {
                value: "24/7",
                label: "Regulatory Updates",
                explanation: "Real-time monitoring of regulatory changes."
            },
            {
                value: "100%",
                label: "Audit Ready",
                explanation: "Documentation and frameworks for compliance audits."
            },
            {
                value: "90%",
                label: "Risk Reduction",
                explanation: "Proactive risk identification and mitigation strategies."
            }
        ],
        capabilities: [
            {
                title: "Labor Law Updates",
                desc: "Latest changes in employment law and regulations.",
                icon: Scale
            },
            {
                title: "Regulatory Briefs",
                desc: "Summaries of new compliance requirements.",
                icon: FileText
            },
            {
                title: "Compliance Playbooks",
                desc: "Step-by-step compliance implementation guides.",
                icon: CheckCircle2
            },
            {
                title: "Dispute Prevention Guides",
                desc: "Best practices for employee relations and risk mitigation.",
                icon: ShieldCheck
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Regulatory Complexity",
                    points: ["Multi-jurisdiction requirements", "Frequent regulation changes", "Compliance tracking burden"]
                },
                {
                    title: "Legal Risk",
                    points: ["Potential violations", "Audit exposure", "Litigation threats"]
                }
            ],
            features: [
                { title: "Predictive Compliance", desc: "AI-powered risk forecasting and prevention.", icon: TrendingUp },
                { title: "T2V ComplyAI", desc: "Automated compliance monitoring and alerts.", icon: ShieldCheck },
                { title: "Legal AI Frameworks", desc: "AI-powered legal research and guidance.", icon: Scale }
            ],
            solutions: [
                { title: "Compliance Intelligence", desc: "Proactive monitoring and risk detection." },
                { title: "Regulatory Automation", desc: "Automated policy updates and training." },
                { title: "Audit Readiness", desc: "Continuous evidence collection and documentation." }
            ],
            outcomes: {
                operational: ["Reduced legal spend", "Faster audits", "Better compliance"],
                risk: ["Lower fines and penalties", "Reduced litigation exposure"]
            }
        },
        ctaHeadline: "Stay compliant and protected",
        ctaDescription: "Access the latest compliance resources and legal intelligence.",
        ctaButtonText: "Explore Compliance Resources",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Talk to a Compliance Expert"
    },
    {
        id: "learning-enablement",
        badge: "Learning & Enablement",
        badgeIcon: BookOpen,
        title: "Practical Guides to Accelerate Workforce Capability",
        tagline: "Implementation, adoption, and enablement.",
        description: "Comprehensive guides, playbooks, and frameworks to accelerate platform adoption and workforce transformation.",
        stats: [
            {
                value: "15+",
                label: "Role-Based Paths",
                explanation: "Tailored content for different user personas."
            },
            {
                value: "100%",
                label: "AI Generated",
                explanation: "Dynamic, personalized learning experiences."
            },
            {
                value: "3x",
                label: "Faster Readiness",
                explanation: "Accelerated time-to-competency for users."
            },
            {
                value: "100%",
                label: "Enterprise Ready",
                explanation: "Comprehensive organizational change support."
            }
        ],
        capabilities: [
            {
                title: "Implementation Guides",
                desc: "Step-by-step deployment and configuration guides.",
                icon: Target
            },
            {
                title: "Change Management Playbooks",
                desc: "Frameworks for organizational adoption and change.",
                icon: RefreshCw
            },
            {
                title: "Learning & Upskilling Frameworks",
                desc: "Structured approaches to capability development.",
                icon: Lightbulb
            },
            {
                title: "Best Practice Toolkits",
                desc: "Templates, checklists, and proven methodologies.",
                icon: CheckCircle2
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Adoption Resistance",
                    points: ["User reluctance", "Change fatigue", "Training overhead"]
                },
                {
                    title: "Slow Enablement",
                    points: ["Long ramp-up times", "Knowledge gaps", "Support needs"]
                }
            ],
            features: [
                { title: "T2V AccelerateAI", desc: "AI-powered learning and capability acceleration.", icon: Zap },
                { title: "T2V KnowledgeAI", desc: "Just-in-time knowledge access and guidance.", icon: BookOpen },
                { title: "Guided Adoption", desc: "Structured onboarding and enablement programs.", icon: Target }
            ],
            solutions: [
                { title: "Guided Learning", desc: "Structured, role-based learning paths." },
                { title: "Enablement Programs", desc: "Comprehensive organizational change support." },
                { title: "Best Practices", desc: "Proven frameworks and methodologies." }
            ],
            outcomes: {
                operational: ["Faster time-to-value", "Higher user adoption", "Better capability development"],
                risk: ["Reduced implementation risk", "Smoother change management"]
            }
        },
        ctaHeadline: "Accelerate your transformation",
        ctaDescription: "Access practical guides and enablement resources to drive adoption and success.",
        ctaButtonText: "Explore Learning Resources",
        ctaButtonLink: "/contact",
        secondaryCtaButtonText: "Request Enablement Session"
    }
]

