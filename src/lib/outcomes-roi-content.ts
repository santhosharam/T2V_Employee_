import {
    Zap,
    Search,
    Timer,
    TrendingUp,
    Users,
    BrainCircuit,
    DollarSign,
    Briefcase,
    FileText,
    Target,
    ShieldCheck,
    Scale,
    Gavel,
    LineChart,
    PieChart,
    BarChart3,
    ArrowRight,
    Globe,
    Rocket,
    Layers
} from "lucide-react";

export const outcomesRoiContent = {
    "productivity": {
        id: "productivity",
        badge: "Productivity Impact",
        badgeIcon: Zap,
        title: "Measurable Workforce Productivity Gains",
        tagline: "Unlocking hidden capacity across the enterprise.",
        description: "Productivity is no longer just about working harder—it’s about eliminating friction. T2V-Employee serves as a force multiplier, automating routine information retrieval and workflow tasks to return thousands of hours to the business.",
        ctaHeadline: "Stop losing time to information chaos",
        ctaDescription: "See exactly how much productivity your organization can reclaim with a personalized ROI assessment.",
        ctaButtonText: "Calculate Productivity ROI",
        ctaButtonLink: "/contact?type=roi-calculator",
        variant: "compact" as const,
        stats: [
            {
                value: "40-50%",
                label: "Productivity Improvement",
                explanation: "Measured increase in output per employee through automation and AI assistance."
            },
            {
                value: "60%",
                label: "Search Reduction",
                explanation: "Reduction in time spent searching for internal information and documents."
            },
            {
                value: "50%",
                label: "Faster Onboarding",
                explanation: "New hires reach full productivity in half the time with AI-guided ramping."
            }
        ],
        capabilities: [
            {
                title: "Knowledge Access Speed",
                desc: "Instant answers to complex questions replace hours of document hunting.",
                icon: Search
            },
            {
                title: "Workforce Readiness",
                desc: "Continuous, embedded learning ensures teams are always up-to-skill.",
                icon: Timer
            },
            {
                title: "Manager Effectiveness",
                desc: "AI insights help managers identify bottlenecks and support team needs.",
                icon: Users
            },
            {
                title: "Cross-Team Collaboration",
                desc: "Unified data breaks down silos that slow down decision making.",
                icon: BrainCircuit
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Productivity Drain",
                    points: ["Employees spend 20% of their time looking for information", "New hires take 6-9 months to become fully productive", "Fragmented knowledge silos slow down execution"]
                }
            ],
            features: [
                {
                    title: "T2V KnowledgeAI",
                    desc: "Instant, cited answers from your enterprise data.",
                    icon: BrainCircuit
                },
                {
                    title: "T2V AccelerateAI",
                    desc: "Embedded micro-learning in the flow of work.",
                    icon: Zap
                },
                {
                    title: "T2V PortalAI",
                    desc: "Unified interface for all employee requests.",
                    icon: Search
                }
            ],
            solutions: [
                {
                    title: "Knowledge Acceleration",
                    desc: "Turning static documents into an interactive knowledge base."
                },
                {
                    title: "Embedded Learning",
                    desc: "Delivering training exactly when it's needed in the workflow."
                },
                {
                    title: "AI Copilots",
                    desc: "Assisting with complex tasks to reduce error and time."
                }
            ],
            outcomes: {
                stats: [
                    { value: "3-5x", label: "Decision Speed" },
                    { value: "40%", label: "Output Increase" }
                ],
                operational: ["Faster project delivery", "Reduced onboarding ramp time"],
                risk: ["Reduced error rates in complex processes"]
            }
        }
    },
    "cost-reduction": {
        id: "cost-reduction",
        badge: "Cost Efficiency",
        badgeIcon: DollarSign,
        title: "Operational Cost Reduction at Enterprise Scale",
        tagline: "Doing more with optimized resources.",
        description: "In an era of efficiency, T2V-Employee delivers hard dollar savings by consolidating tools, automating expensive manual processes, and reducing the administrative overhead of managing a global workforce.",
        ctaHeadline: "Identify your potential savings",
        ctaDescription: "Our team can model your specific cost structures to identify immediate savings opportunities.",
        ctaButtonText: "Explore Cost Savings",
        ctaButtonLink: "/contact?type=cost-savings",
        variant: "wide" as const,
        stats: [
            {
                value: "30-60%",
                label: "HR Ops Cost Reduction",
                explanation: "Savings from automating manual ticketing and admin workflows."
            },
            {
                value: "70%",
                label: "Admin Workload Drop",
                explanation: "Reduction in routine administrative tasks for HR and IT teams."
            },
            {
                value: "30%",
                label: "Overhead Reduction",
                explanation: "Lower management overhead for contract and contingent workforces."
            }
        ],
        capabilities: [
            {
                title: "HR Operations",
                desc: "Automate higher volumes of employee requests with fewer resources.",
                icon: Briefcase
            },
            {
                title: "L&D Spend",
                desc: "Replace expensive external training with AI-generated internal content.",
                icon: FileText
            },
            {
                title: "Recruitment Costs",
                desc: "Lower agency spend and cost-per-hire with intelligent sourcing.",
                icon: Users
            },
            {
                title: "Vendor Spend",
                desc: "Identify unused licenses and optimize vendor performance.",
                icon: DollarSign
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Hidden Inefficiencies",
                    points: ["Manual processes consume expensive human hours", "Tool sprawl creates redundant licensing costs", "Contractor management overhead is often untracked"]
                }
            ],
            features: [
                {
                    title: "Process Automation",
                    desc: "End-to-end automation of onboarding, offboarding, and changes.",
                    icon: Zap
                },
                {
                    title: "AI Agents",
                    desc: "Autonomous handling of routine support tickets.",
                    icon: BrainCircuit
                },
                {
                    title: "Spend Analytics",
                    desc: "Deep visibility into vendor and workforce spend.",
                    icon: BarChart3
                }
            ],
            solutions: [
                {
                    title: "Unified Platform",
                    desc: "Consolidating multiple point solutions into one suite."
                },
                {
                    title: "Workflow Intelligence",
                    desc: "Optimizing processes to remove waste and wait times."
                },
                {
                    title: "Auto-Governance",
                    desc: "Preventing costly compliance leaks and fines."
                }
            ],
            outcomes: {
                stats: [
                    { value: "$2.5M+", label: "Annual Savings (Mid-Ent)" },
                    { value: "12mo", label: "Break-even Timeline" }
                ],
                operational: ["Lower SG&A expense ratio", "Reduced IT support costs"],
                risk: ["Elimination of duplicate payments"]
            }
        }
    },
    "talent-impact": {
        id: "talent-impact",
        badge: "Talent Outcomes",
        badgeIcon: Target,
        title: "Stronger Talent Outcomes with Measurable Impact",
        tagline: "Retain, develop, and mobilize your best people.",
        description: "The war for talent is won by retention and development. T2V-Employee uses AI to create personalized career paths, match internal talent to opportunities, and predict retention risks before people leave.",
        ctaHeadline: "Transform your talent strategy",
        ctaDescription: "See how skills intelligence can reduce attrition and boost internal mobility.",
        ctaButtonText: "Explore Talent Impact",
        ctaButtonLink: "/contact?type=talent",
        variant: "default" as const,
        stats: [
            {
                value: "40%",
                label: "Retention Improvement",
                explanation: "Reduction in voluntary turnover among first-year employees."
            },
            {
                value: "65%",
                label: "Faster Mobility",
                explanation: "Acceleration in time-to-fill for internal role transfers."
            },
            {
                value: "35%",
                label: "Engagement Lift",
                explanation: "Increase in employee engagement scores through better career pathing."
            }
        ],
        capabilities: [
            {
                title: "Retention",
                desc: "Predict flight risk and intervene with personalized retention plans.",
                icon: Users
            },
            {
                title: "Internal Mobility",
                desc: "Match employees to open roles based on inferred skills.",
                icon: ArrowRight
            },
            {
                title: "Skills Readiness",
                desc: "Identify and close skill gaps for future business needs.",
                icon: Target
            },
            {
                title: "Leadership Pipeline",
                desc: "Spot high-potential employees for succession planning.",
                icon: TrendingUp
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Talent Stagnation",
                    points: ["High attrition due to lack of career visibility", "Skills gaps widening without clear development paths", "Slow transition times for internal moves"]
                }
            ],
            features: [
                {
                    title: "T2V TalentAI",
                    desc: "Skills inference and career pathing engine.",
                    icon: BrainCircuit
                },
                {
                    title: "T2V AssessAI",
                    desc: "Continuous, objective performance measurement.",
                    icon: BarChart3
                }
            ],
            solutions: [
                {
                    title: "Skills Intelligence",
                    desc: "Real-time mapping of organizational capabilities."
                },
                {
                    title: "Career Pathways",
                    desc: "AI-generated growth plans for every employee."
                },
                {
                    title: "Opportunity Matching",
                    desc: "Automated connection of talent to gigs and roles."
                }
            ],
            outcomes: {
                stats: [
                    { value: "40%", label: "Lower External Hiring" },
                    { value: "2x", label: "Talent Pool Usage" }
                ],
                operational: ["Reduced recruiting dependency", "Higher workforce agility"],
                risk: ["Mitigated key person risk"]
            }
        }
    },
    "risk-compliance": {
        id: "risk-compliance",
        badge: "Risk & Compliance",
        badgeIcon: ShieldCheck,
        title: "Quantified Reduction in Compliance & Legal Risk",
        tagline: "Protecting the enterprise with predictive intelligence.",
        description: "In a complex global regulatory environment, T2V-Employee provides a defensive shield, using AI to monitor changes, update policies, and predict compliance failures before they result in fines.",
        ctaHeadline: "Proof-proof your compliance",
        ctaDescription: "Assess your current risk exposure and see how AI can close the gaps.",
        ctaButtonText: "Explore Compliance ROI",
        ctaButtonLink: "/contact?type=compliance",
        variant: "stacked" as const,
        stats: [
            {
                value: "85-92%",
                label: "Violation Reduction",
                explanation: "Decrease in compliance violations through predictive alerts."
            },
            {
                value: "95%",
                label: "Fine Avoidance",
                explanation: "Reduction in potential fine exposure from regulatory breaches."
            },
            {
                value: "70%",
                label: "Faster Audits",
                explanation: "Reduction in time required to complete compliance audits."
            }
        ],
        capabilities: [
            {
                title: "Regulatory Compliance",
                desc: "Automated monitoring of global labor laws and changes.",
                icon: Globe
            },
            {
                title: "Audit Readiness",
                desc: "Always-on evidence collection for instant audit response.",
                icon: FileText
            },
            {
                title: "Labor Disputes",
                desc: "prevention of disputes through accurate classification and policy.",
                icon: Gavel
            },
            {
                title: "Legal Cost Avoidance",
                desc: "Reduction in external counsel spend for routine queries.",
                icon: Scale
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Compliance Blindspots",
                    points: ["Multi-jurisdiction complexity makes manual tracking impossible", "Reactive audits scramble resources and risk fines", "Policy updates lag behind legal changes"]
                }
            ],
            features: [
                {
                    title: "T2V ComplyAI",
                    desc: "Automated policy updates and risk monitoring.",
                    icon: ShieldCheck
                },
                {
                    title: "DisputeAI",
                    desc: "Predictive analytics for labor dispute prevention.",
                    icon: Gavel
                }
            ],
            solutions: [
                {
                    title: "Predictive Intelligence",
                    desc: "Forecasting compliance risks before they occur."
                },
                {
                    title: "Automated Governance",
                    desc: "Self-correcting policy enforcement."
                },
                {
                    title: "Global Monitor",
                    desc: "24/7 scanning of international regulatory changes."
                }
            ],
            outcomes: {
                stats: [
                    { value: "75-80%", label: "Fewer Disputes" },
                    { value: "100%", label: "Audit Confidence" }
                ],
                operational: ["Streamlined legal operations", "Confident market expansion"],
                risk: ["Zero-tolerance compliance assurance"]
            }
        }
    },
    "financial-justification": {
        id: "financial-justification",
        badge: "ROI & Payback",
        badgeIcon: LineChart,
        title: "Fast Time-to-Value with Defensible ROI",
        tagline: "A business case your CFO will approve.",
        description: "We don't just promise value—we expedite it. With rapid modular deployment and high adoption rates, T2V-Employee is designed to deliver measurable financial returns within the first fiscal year.",
        ctaHeadline: "Build your business case",
        ctaDescription: "Get the tools and data you need to present a winning investment case to your board.",
        ctaButtonText: "Calculate Your ROI",
        ctaButtonLink: "/contact?type=roi-model",
        variant: "wide" as const,
        stats: [
            {
                value: "6-12mo",
                label: "ROI Realization",
                explanation: "Typical timeline to achieve positive return on investment."
            },
            {
                value: "750%+",
                label: "ROI Potential",
                explanation: "Projected 3-year ROI for large enterprise deployments."
            },
            {
                value: "1-3mo",
                label: "Payback Period",
                explanation: "Time significantly faster than industry average."
            }
        ],
        capabilities: [
            {
                title: "Implementation Speed",
                desc: "Rapid deployment methodology gets you live in weeks.",
                icon: Rocket
            },
            {
                title: "Adoption Rates",
                desc: "Intuitive, consumer-grade interfaces drive high user uptake.",
                icon: Users
            },
            {
                title: "Value Realization",
                desc: "Clear metrics track value from day one.",
                icon: PieChart
            },
            {
                title: "Scalability",
                desc: "Grow from one module to the full suite effortlessly.",
                icon: TrendingUp
            }
        ],
        moduleData: {
            challenges: [
                {
                    title: "Investment Risk",
                    points: ["Long payback periods for traditional HR tech", "Unclear ROI definitions make approval, difficult", "Low adoption kills value realization"]
                }
            ],
            features: [
                {
                    title: "Modular Deployment",
                    desc: "Start small and expand based on proven value.",
                    icon: Layers
                },
                {
                    title: "Fast Adoption",
                    desc: "Embedded in tools employees already use.",
                    icon: Zap
                }
            ],
            solutions: [
                {
                    title: "Incremental Rollout",
                    desc: "Deploying value in sprints to show quick wins."
                },
                {
                    title: "Compounding Value",
                    desc: "Data network effects increase ROI over time."
                },
                {
                    title: "Transparent Metrics",
                    desc: "Real-time dashboards showing system value."
                }
            ],
            outcomes: {
                stats: [
                    { value: "10k+", label: "Scale Impact" },
                    { value: "90 Days", label: "Measurable Returns" }
                ],
                operational: ["Predictable budget planning", "High internal rate of return"],
                risk: ["Low implementation risk profile"]
            }
        }
    }
}
