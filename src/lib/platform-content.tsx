import {
    Database,
    BrainCircuit,
    MessageSquare,
    BarChart3,
    ShieldCheck,
    ShieldAlert,
    Search,
    Users,
    TrendingUp,
    Layers,
    Cpu,
    Lock,
    Globe,
    FileText,
    Zap,
    Target,
    LayoutDashboard,
    Network,
    Gavel,
    UserCheck,
    Scale,
    PieChart,
    RefreshCw,
    Map as MapIcon,
    AlertTriangle,
    Puzzle,
    Mic,
    Activity,
    AlertOctagon,
    ArrowUpDown,
    CalendarCheck,
    DollarSign,
    Key,
    Bell,
    CheckSquare,
    Sparkles,
    Bot,
    FileCode2,
    Lightbulb
} from "lucide-react";


export const platformModulesData = {
    "core-ai": {
        challenges: [
            {
                title: "Data Silos & Fragmentation",
                points: ["Isolated HR systems (HRIS, Payroll, LMS, ATS)", "Manual reconciliation and version conflicts", "No single source of truth for decision making"]
            },
            {
                title: "Poor Data Quality",
                points: ["Inaccurate and outdated employee records", "Duplicate workforce entries across regions", "Missing skills and role metadata"]
            },
            {
                title: "Compliance & Security Risks",
                points: ["GDPR/CCPA exposure from scattered PII", "Audit failures due to incomplete history", "Inconsistent access controls"]
            }
        ],
        features: [
            { title: "Intelligent Ingestion", desc: "Connectors for 50+ HRIS/ATS platforms with real-time sync.", icon: Layers },
            { title: "AI Deduplication", desc: "Probabilistic matching to merge duplicate profiles.", icon: Cpu },
            { title: "Cognitive Enrichment", desc: "Infers skills and metadata from unstructured docs.", icon: BrainCircuit },
            { title: "Workforce Assistant", desc: "Natural language interface for querying data.", icon: MessageSquare },
            { title: "Automated Governance", desc: "Role-based access & PII masking at ingestion.", icon: ShieldCheck },
            { title: "Advanced Analytics", desc: "Pre-built dashboards for headcount & attrition.", icon: BarChart3 }
        ],
        solutions: [
            { title: "Unified Data Plane", desc: "Centralized repository creating a Single Employee Golden Record." },
            { title: "Data Quality Framework", desc: "Continuous validation rules ensuring 99.9% accuracy." },
            { title: "Integration Fabric", desc: "Bi-directional sync with ERP, IT, and Finance systems." },
            { title: "Privacy Engine", desc: "Enterprise-grade encryption and compliance controls." },
            { title: "Executive Command", desc: "AI Copilot for strategic workforce planning." }
        ],
        outcomes: {
            stats: [
                { value: "99.9%", label: "Data Accuracy" },
                { value: "40%", label: "Lower Ops Cost" },
                { value: "10x", label: "Faster Reporting" },
                { value: "100%", label: "Audit Ready" }
            ],
            operational: ["Reduced manual data entry", "Real-time workforce visibility"],
            risk: ["Reduced compliance violations", "Stronger data governance"]
        }
    },
    "knowledge-ai": {
        challenges: [
            {
                title: "Information Overload",
                points: ["Critical knowledge buried in PDFs, emails, and SharePoint", "Employees spend 20% of time searching for info", "Version control nightmares for policies"]
            },
            {
                title: "Tribal Knowledge Loss",
                points: ["Key expertise leaves with departing employees", "Onboarding slows down due to lack of documentation", "Inconsistent answers from different managers"]
            },
            {
                title: "Static Documentation",
                points: ["Manuals are obsolete the moment they are written", "No feedback loop to update content based on queries", "Search returns links, not answers"]
            }
        ],
        features: [
            { title: "Semantic Search", desc: "Understands intent, not just keywords.", icon: Search },
            { title: "Generative Answers", desc: "Synthesizes direct answers from multiple docs.", icon: Sparkles },
            { title: "Auto-Tagging", desc: "AI classifies and organizes content automatically.", icon: FileText },
            { title: "Knowledge Graph", desc: "Maps relationships between concepts and people.", icon: Network },
            { title: "Smart Ingestion", desc: "Reads Sharepoint, GDrive, Slack, and Wikis.", icon: Database },
            { title: "Feedback Loop", desc: "Learns from user queries to improve accuracy.", icon: RefreshCw }
        ],
        solutions: [
            { title: "Content Ingestion Layer", desc: "Connectors crawl and index enterprise repositories." },
            { title: "Vector Database", desc: "Stores semantic embeddings for instant retrieval." },
            { title: "LLM Orchestration", desc: "RAG pipeline ensures answers are grounded in facts." },
            { title: "Citation Engine", desc: "Answers always link back to source documents." },
            { title: "Analytics Dashboard", desc: "Tracks what employees are asking and missing." }
        ],
        outcomes: {
            stats: [
                { value: "30%", label: "Productivity Gain" },
                { value: "90%", label: "Deflection Rate" },
                { value: "24/7", label: "Instant Support" },
                { value: "0", label: "Hallucinations" }
            ],
            operational: ["Instant answers for employees", "Reduced burden on HR/IT support"],
            risk: ["Consistent policy interpretation", "Secure access to knowledge"]
        }
    },
    "vertical-knowledge-ai": {
        challenges: [
            {
                title: "Regulatory Complexity",
                points: ["Generic AI hallucinates on specific laws (e.g. labor codes)", "Subtle jurisdictional differences are missed", "High risk of legal liability from wrong advice"]
            },
            {
                title: "Domain Specificity",
                points: ["General models don't understand industry jargon", "Nuanced compliance rules require expert tuning", "One-size-fits-all approach fails in banking/pharma"]
            },
            {
                title: "Audit & Explainability",
                points: ["Black-box AI is unacceptable for legal decisions", "Need full traceability of why an answer was given", "Strict data residency requirements"]
            }
        ],
        features: [
            { title: "Jurisdiction Aware", desc: "Knows laws differ by country and state.", icon: Globe },
            { title: "Legal Ontology", desc: "Pre-trained on legal/compliance knowledge graphs.", icon: Scale },
            { title: "Verified RAG", desc: "Cites specific statutes and internal policies.", icon: ShieldCheck },
            { title: "Role-Based Answers", desc: "Adapts complexity for managers vs employees.", icon: UserCheck },
            { title: "Change Monitoring", desc: "Alerts when laws change affecting answers.", icon: Gavel },
            { title: "Audit Trail", desc: "Logs every query and citation for review.", icon: History }
        ],
        solutions: [
            { title: "Domain Knowledge Graph", desc: "Structured map of industry regulations & internal policies." },
            { title: "Multi-Model Router", desc: "Selects the best specialized model for the query." },
            { title: "Safety Guardrails", desc: "Prevents advice on prohibited or sensitive topics." },
            { title: "Expert in the Loop", desc: "Workflow for legal teams to verify complex answers." },
            { title: "Continuous Compliance", desc: "Auto-updates knowledge base with regulatory feeds." }
        ],
        outcomes: {
            stats: [
                { value: "60%", label: "Legal Cost Savings" },
                { value: "100%", label: "Traceability" },
                { value: "95%", label: "Accuracy in QA" },
                { value: "Global", label: "Coverage" }
            ],
            operational: ["Faster compliance checks", "Self-service for complex queries"],
            risk: ["Mitigated legal exposure", "Consistent global interpretation"]
        }
    },
    "accelerate-ai": {
        challenges: [
            {
                title: "Passive Learning",
                points: ["LMS content is boring and disconnected from work", "Low completion rates and even lower retention", "Generic courses don't address specific skill gaps"]
            },
            {
                title: "Slow Content Creation",
                points: ["Weeks to build a single training module", "Content is outdated by the time it launches", "Expensive reliance on external instructional designers"]
            },
            {
                title: "One-Size-Fits-None",
                points: ["Every employee gets the same onboarding path", "High performers are bored, others are overwhelmed", "No personalization based on actual role needs"]
            }
        ],
        features: [
            { title: "Auto-Course Gen", desc: "Creates micro-learning from PDFs/Docs instantly.", icon: Zap },
            { title: "Adaptive Parsers", desc: "Adjusts difficulty based on learner progress.", icon: Target },
            { title: "Just-in-Time", desc: "Surfaces learning within Slack/Teams workflows.", icon: MessageSquare },
            { title: "Skill Simulation", desc: "AI role-play scenarios for soft skills practice.", icon: Bot },
            { title: "Knowledge Quiz", desc: "Auto-generates assessments to verify understanding.", icon: FileCode2 },
            { title: "Gap Analysis", desc: "Recommends content based on performance data.", icon: TrendingUp }
        ],
        solutions: [
            { title: "Content Transformation Engine", desc: "Ingests SOPs and outputs interactive SCORM modules." },
            { title: "Personalization Matrix", desc: "Maps role requirements to individual learning paths." },
            { title: "Workflow Embedder", desc: "Delivers nuggets of learning via API to any app." },
            { title: "Gamification Layer", desc: "Adds points/badges to drive engagement automatically." },
            { title: "Impact Analytics", desc: "Correlates learning completion with job performance." }
        ],
        outcomes: {
            stats: [
                { value: "50%", label: "Faster Onboarding" },
                { value: "80%", label: "Content Cost Cut" },
                { value: "3x", label: "Engagement" },
                { value: "Real-time", label: "Skill Updates" }
            ],
            operational: ["Instant training deployment", "Learning in the flow of work"],
            risk: ["Ensured policy comprehension", "Documented training evidence"]
        }
    },
    "talent-ai": {
        challenges: [
            {
                title: "Skills Blindspots",
                points: ["Leaders don't know what skills their teams actually have", "Reliance on self-reported, outdated CVs", "Invisible internal talent leads to unnecessary hiring"]
            },
            {
                title: "Static Career Paths",
                points: ["Career ladders are rigid and unclear", "Employees leave because they don't see growth", "Succession planning is a manual spreadsheet exercise"]
            },
            {
                title: "Misaligned Resourcing",
                points: ["Right people are not on the right projects", "Burnout due to poor workload distribution", "Critical skill gaps discovered too late"]
            }
        ],
        features: [
            { title: "Skill Inference", desc: "Deduced skills from code, emails, and projects.", icon: Lightbulb },
            { title: "Talent Marketplace", desc: "Internal gig matching for short-term projects.", icon: Users },
            { title: "Succession AI", desc: "Identifies and preps future leaders automatically.", icon: TrendingUp },
            { title: "Career Copilot", desc: "Guides employees on how to reach their next role.", icon: MapIcon },
            { title: "Flight Risk Risk", desc: "Predicts attrition based on engagement signals.", icon: AlertTriangle },
            { title: "Team Builder", desc: "Optimizes squad formation based on complementary skills.", icon: Puzzle }
        ],
        solutions: [
            { title: "Dynamic Skills Ontology", desc: "Self-updating map of skills across the org." },
            { title: "Project Matching Engine", desc: "Aligns employee aspirations with business needs." },
            { title: "Career Path Visualizer", desc: "Interactive roadmap for every employee." },
            { title: "Reskill Recommendation", desc: "Suggests AccelerateAI courses for gap closure." },
            { title: "Workforce Planner", desc: "Scenario planning for future headcount needs." }
        ],
        outcomes: {
            stats: [
                { value: "25%", label: "Less External Hiring" },
                { value: "40%", label: "Higher Retention" },
                { value: "90%", label: "Skill Visibility" },
                { value: "Auto", label: "Succession" }
            ],
            operational: ["Optimized resource allocation", "Internal mobility first"],
            risk: ["Reduced key-person dependency", "Proactive retention action"]
        }
    },
    "portal-ai": {
        challenges: [
            {
                title: "Portal Fatigue",
                points: ["Employees log into 10+ systems (Workday, ServiceNow, Jira)", "Fragmented experience causes frustration", "Simple tasks take too many clicks"]
            },
            {
                title: "Support Bottlenecks",
                points: ["HR and IT flooded with repetitive 'how-to' tickets", "Slow turnaround times for simple requests", "High cost of service delivery"]
            },
            {
                title: "Poor Adoption",
                points: ["Complex tools are ignored by employees", "Process compliance drops due to friction", "Mobile experience is often broken"]
            }
        ],
        features: [
            { title: "Unified Chat", desc: "One conversational interface for all enterprise sys.", icon: MessageSquare },
            { title: "Action Agents", desc: "Executes tasks like 'Approve Leave' directly in chat.", icon: Zap },
            { title: "Universal Search", desc: "Finds people, policies, and apps instantly.", icon: Search },
            { title: "Personalized Feed", desc: "Relevant updates and tasks, no noise.", icon: LayoutDashboard },
            { title: "Multi-Channel", desc: "Works on Web, Mobile, Slack, Teams, WhatsApp.", icon: Globe },
            { title: "Voice Command", desc: "Talk to your enterprise apps naturally.", icon: Mic }
        ],
        solutions: [
            { title: "Conversational Middleware", desc: "Translates natural language to API calls." },
            { title: "Integration Hub", desc: "Connects to ITSM, HCM, and ERP backends." },
            { title: "Context Engine", desc: "Remembers past interactions for continuity." },
            { title: "Forms-to-Chat", desc: "Converts complex forms into simple Q&A flows." },
            { title: "Notification Orchestrator", desc: "Smartly routes alerts to the right channel." }
        ],
        outcomes: {
            stats: [
                { value: "70%", label: "Ticket Deflection" },
                { value: "5x", label: "Faster Resolution" },
                { value: "90%", label: "User Satisfaction" },
                { value: "1", label: "App to Rule All" }
            ],
            operational: ["Streamlined employee experience", "Reduced license shelfware"],
            risk: ["Standardized process execution", "Secure access gateway"]
        }
    },
    "assess-ai": {
        challenges: [
            {
                title: "Biased Reviews",
                points: ["Recency bias skews annual performance ratings", "Subjective opinions over objective data", "Inconsistent standards across managers"]
            },
            {
                title: "Lagging Indicators",
                points: ["Feedback comes too late (once a year) to assist", "No chance to correct course mid-cycle", "Blind to daily achievements and blockers"]
            },
            {
                title: "Effort Focus",
                points: ["Measuring hours worked instead of outcomes delivered", "High performers get burnt out covers, low get hidden", "Hard to quantify soft skills impact"]
            }
        ],
        features: [
            { title: "Continuous Listening", desc: "Real-time feedback collection from peers/tools.", icon: Activity },
            { title: "Bias Detection", desc: "Flags gender/bias in written feedback.", icon: Scale },
            { title: "Outcome Tracking", desc: "Links goals (OKRs) directly to work artifacts.", icon: Target },
            { title: "Nudge Coach", desc: "Prompts managers to give timely praise/critique.", icon: MessageSquare },
            { title: "360 Sentiment", desc: "Analyzes collaboration patterns and mood.", icon: Users },
            { title: "Performance Pred", desc: "Forecasts goal attainment risk early.", icon: TrendingUp }
        ],
        solutions: [
            { title: "Data-Driven Review", desc: "Aggregates Jira, Git, CRM data for objective view." },
            { title: "Sentiment Analysis Engine", desc: "Evaluates team morale and friction points." },
            { title: "Coaching Bot", desc: "Provides script suggestions for difficult talks." },
            { title: "Calibration Tool", desc: "Visualizes rating distribution to ensure fairness." },
            { title: "Goal Alignment", desc: "Cascades strategic objectives to individual tasks." }
        ],
        outcomes: {
            stats: [
                { value: "100%", label: "Bias Check" },
                { value: "4x", label: "Feedback Freq" },
                { value: "20%", label: "Perf Uplift" },
                { value: "Real", label: "Fairness" }
            ],
            operational: ["Culture of continuous improvement", "Clearer goal clarity"],
            risk: ["Defensible employment decisions", "Reduced discrimination risk"]
        }
    },
    "comply-ai": {
        challenges: [
            {
                title: "Regulatory Tsunami",
                points: ["Thousands of labor law changes globally per year", "Impossible to manually track and update policies", "Fines for non-compliance are increasing"]
            },
            {
                title: "Manual Audits",
                points: ["Scrambling to find documents when auditors arrive", "Sampling-based checks miss violations", "High stress and cost during audit season"]
            },
            {
                title: "Shadow Policy",
                points: ["Managers making side-deals (leaves, OT) unknowingly", "Unwritten rules creating liability", "Inconsistent application of rules"]
            }
        ],
        features: [
            { title: "Reg Monitor", desc: "Scans legal databases for changes globally.", icon: Globe },
            { title: "Policy Updater", desc: "Drafts policy amendments automatically.", icon: FileText },
            { title: "Risk Thermometer", desc: "Predictive score of compliance health.", icon: ShieldAlert },
            { title: "Audit Bot", desc: "Pre-fetches evidence and answers auditor Qs.", icon: Bot },
            { title: "Violation Alert", desc: "Real-time flag for scheduling/pay breaches.", icon: AlertOctagon },
            { title: "Whistleblower", desc: "Secure, anonymous channel with AI triage.", icon: Lock }
        ],
        solutions: [
            { title: "Global Compliance Graph", desc: "Maps internal rules to external laws." },
            { title: "Automated Evidence Collection", desc: "Snapshots proof of compliance daily." },
            { title: "Incident Management", desc: "Workflow for investigation and remediation." },
            { title: "Policy Distribution", desc: "Ensures and tracks employee acknowledgement." },
            { title: "Labor Law Engine", desc: "Calculates complex OT/Leave rules per locale." }
        ],
        outcomes: {
            stats: [
                { value: "0", label: "Audit Surprises" },
                { value: "90%", label: "Less Admin Time" },
                { value: "100%", label: "Reg Coverage" },
                { value: "$Ms", label: "Fines Avoided" }
            ],
            operational: ["Always-on survey readiness", "Automated policy governance"],
            risk: ["Systematic risk reduction", "Director liability protection"]
        }
    },
    "recruit-ai": {
        challenges: [
            {
                title: "Slow Hiring",
                points: ["Time-to-fill averaging 60+ days for key roles", "Good candidates lost due to slow process", "Revenue loss from vacant seats"]
            },
            {
                title: "Bias & Diversity",
                points: ["Unconscious bias in screening and interviewing", "Struggling to meet DEI targets", "Homogenous teams lacking innovation"]
            },
            {
                title: "Recruiter Burnout",
                points: ["Sifting through thousands of irrelevant CVs", "Endless scheduling ping-pong", "Little time for relationship building"]
            }
        ],
        features: [
            { title: "Smart Sourcing", desc: "Finds candidates on open web matching profile.", icon: Search },
            { title: "CV Ranking", desc: "Matches skills to job context, not keywords.", icon: ArrowUpDown },
            { title: "Interview Pilot", desc: "Real-time prompts for interviewers.", icon: MessageSquare },
            { title: "Scheduling Agent", desc: "Auto-books times with candidates.", icon: CalendarCheck },
            { title: "Diversity Mask", desc: "Anonymizes profiles during screen.", icon: UserCheck },
            { title: "Offer AI", desc: "Optimizes salary offer based on market data.", icon: DollarSign }
        ],
        solutions: [
            { title: "Funnel Automation", desc: "Nurtures candidates from click to offer." },
            { title: "Assessment Integration", desc: "Seamlessly triggers code/skill tests." },
            { title: "Candidate Experience", desc: "Instant updates and feedback via chat." },
            { title: "Market Intelligence", desc: "Real-time salary and talent supply data." },
            { title: "Quality of Hire Loop", desc: "Feeds new hire performance back to model." }
        ],
        outcomes: {
            stats: [
                { value: "50%", label: "Faster Hiring" },
                { value: "30%", label: "Lower Cost" },
                { value: "2x", label: "Diversity" },
                { value: "90%", label: "Offer Accept" }
            ],
            operational: ["Recruiters become talent advisors", "Better candidate experience"],
            risk: ["Fair hiring practices", "Data privacy in hiring"]
        }
    },
    "contract-ai": {
        challenges: [
            {
                title: "Misclassification",
                points: ["Risk of treating contractors like employees", "Huge legal penalties for classification errors", "Inconsistent onboarding processes"]
            },
            {
                title: "Fragmented Management",
                points: ["Contractors managed in spreadsheets, not HRIS", "Lack of visibility into spend and access", "Security risks from unrevoked access"]
            },
            {
                title: "Payment Friction",
                points: ["Complex multi-currency invoicing", "Delayed payments causing talent churn", "Manual tax form collection"]
            }
        ],
        features: [
            { title: "SOW Generator", desc: "Auto-creates compliant Statements of Work.", icon: FileText },
            { title: "Risk Classifier", desc: "Questionnaire to determine worker status.", icon: ShieldCheck },
            { title: "Instant Pay", desc: "Global payments in local currency.", icon: Globe },
            { title: "Access Lifecycle", desc: "Auto-provisions and de-provisions IT access.", icon: Key },
            { title: "Budget Track", desc: "Real-time burn rate monitoring.", icon: BarChart3 },
            { title: "Vendor Vetting", desc: "Background checks and compliance verify.", icon: UserCheck }
        ],
        solutions: [
            { title: "Contingent Workforce Hub", desc: "Single pane for all non-employee labor." },
            { title: "Compliance Guard", desc: "Enforces tenure limits and break rules." },
            { title: "Invoice Automation", desc: "Matches hours logs to invoices auto." },
            { title: "Talent Pool", desc: "Re-engage past contractors easily." },
            { title: "Legal localized", desc: "Contracts adapted to worker's country." }
        ],
        outcomes: {
            stats: [
                { value: "100%", label: "Compliant" },
                { value: "0", label: "Co-employ Risk" },
                { value: "Global", label: "Reach" },
                { value: "Fast", label: "Onboarding" }
            ],
            operational: ["Flexible workforce scaling", "Reduced admin overhead"],
            risk: ["Tax and legal safety", "IP protection"]
        }
    },
    "perform-ai": {
        challenges: [
            {
                title: "Vendor Black Box",
                points: ["No visibility into vendor deliverable quality", "Paying for services not rendered completely", "Contracts auto-renew without value check"]
            },
            {
                title: "SLA Breaches",
                points: ["Manual tracking of service level agreements", "Missed penalty claims for downtime", "Reactive rather than proactive management"]
            },
            {
                title: "Spend Leakage",
                points: ["Redundant subscriptions and services", "Overpaying compared to market rates", "Maverick spend outside of procurement"]
            }
        ],
        features: [
            { title: "SLA Monitor", desc: "Real-time tracking of vendor uptime/output.", icon: Activity },
            { title: "Spend Analyzer", desc: "Identifies duplicate or wasted spend.", icon: PieChart },
            { title: "Renewal Alert", desc: "Notify before contracts auto-renew.", icon: Bell },
            { title: "Market Compare", desc: "Benchmarks vendor rates vs market.", icon: Scale },
            { title: "Scorecarding", desc: "Auto-generates QBR decks for vendors.", icon: LayoutDashboard },
            { title: "Deliverable Verify", desc: "Checks if SOW items were actually done.", icon: CheckSquare }
        ],
        solutions: [
            { title: "Vendor Intelligence", desc: "Aggregates performance data across vendors." },
            { title: "Contract Digitization", desc: "Extracts SLAs and terms from PDF contracts." },
            { title: "Procurement Copilot", desc: "Assists in negotiation with data." },
            { title: "Risk Radar", desc: "Monitors vendor financial health/news." },
            { title: "Value Manager", desc: "Calculates ROI for each vendor." }
        ],
        outcomes: {
            stats: [
                { value: "15%", label: "Spend Saved" },
                { value: "95%", label: "SLA Compliance" },
                { value: "Auto", label: "Renewals" },
                { value: "High", label: "Vendor Quality" }
            ],
            operational: ["Data-driven negotiations", "Optimized vendor portfolio"],
            risk: ["Supply chain resilience", "No surprise renewals"]
        }
    }
};
