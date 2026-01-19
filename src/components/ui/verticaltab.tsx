import { useState } from "react";
import { CheckCircle2, ShieldAlert, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VerticalModuleTabs({ data, variant = "default" }: { data: any, variant?: string }) {
    const [activeTabId, setActiveTabId] = useState("challenges");

    if (!data) return null;

    const {
        challenges = [],
        features = [],
        solutions = [],
        outcomes = { stats: [], operational: [], risk: [] }
    } = data;

    const tabs = [
        { id: "challenges", label: "Challenges", title: "Key Challenges Solved" },
        { id: "features", label: "Features", title: "Platform Capabilities" },
        { id: "solutions", label: "Solutions", title: "Solution Architecture" },
        { id: "outcomes", label: "Outcomes", title: "Business Outcomes" }
    ];

    const activeTabInfo = tabs.find(t => t.id === activeTabId);

    const renderContent = () => {
        switch (activeTabId) {
            case "challenges":
                return (
                    <div className="space-y-8">
                        {challenges.map((challenge: any, idx: number) => (
                            <div key={idx} className="space-y-4">
                                <h4 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold">{idx + 1}</span>
                                    {challenge.title}
                                </h4>
                                <ul className="space-y-2 ml-8 text-muted-foreground text-sm">
                                    {challenge.points.map((point: any, pIdx: number) => (
                                        <li key={pIdx} className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                );
            case "features":
                return (
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature: any, i: number) => {
                            const Icon = feature.icon;
                            return (
                                <div key={i} className="p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/50 transition-colors group">
                                    {Icon && <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />}
                                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            case "solutions":
                return (
                    <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">Architecture & Workflow:</span> How this module integrates and delivers value.
                        </p>
                        <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 py-2">
                            {solutions.map((item: any, i: number) => (
                                <div key={i} className="relative pl-6">
                                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "outcomes":
                return (
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {outcomes.stats.map((stat: any, i: number) => (
                                <div key={i} className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                            <div className="bg-card p-4 rounded-xl border border-border">
                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-green-500" /> Operational Excellence
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {outcomes.operational.map((op: any, i: number) => (
                                        <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {op}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card p-4 rounded-xl border border-border">
                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-blue-500" /> Risk Management
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {outcomes.risk.map((r: any, i: number) => (
                                        <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {r}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // Layout variants
    const getLayoutClasses = () => {
        switch (variant) {
            case "compact":
                return {
                    container: "flex flex-col lg:flex-row items-stretch font-sans rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white",
                    nav: "w-full lg:w-1/5 flex flex-col bg-slate-50 border-r border-slate-200 p-2 gap-1",
                    navHeader: "p-3 mb-1",
                    navHeaderText: "text-xs font-bold uppercase tracking-wider text-slate-500",
                    button: (isActive: boolean) => `relative text-left py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-slate-600 hover:bg-white/60 hover:text-gray-900"
                        }`,
                    indicator: "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-r",
                    content: "w-full lg:w-4/5 bg-white p-6 lg:p-8 min-h-[400px]"
                };
            case "wide":
                return {
                    container: "flex flex-col font-sans rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white",
                    nav: "w-full flex flex-row overflow-x-auto bg-slate-50 border-b border-slate-200 p-2 gap-2",
                    navHeader: "hidden",
                    navHeaderText: "",
                    button: (isActive: boolean) => `relative text-center py-4 px-6 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${isActive
                        ? "bg-white text-gray-900 shadow-md"
                        : "text-slate-600 hover:bg-white/60 hover:text-gray-900"
                        }`,
                    indicator: "absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-t",
                    content: "w-full bg-white p-8 lg:p-12 min-h-[450px]"
                };
            case "stacked":
                return {
                    container: "flex flex-col font-sans rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-50",
                    nav: "w-full flex flex-row justify-center bg-white border-b-2 border-slate-200 p-3 gap-3",
                    navHeader: "hidden",
                    navHeaderText: "",
                    button: (isActive: boolean) => `relative py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 ${isActive
                        ? "bg-gray-900 text-white shadow-lg"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`,
                    indicator: "hidden",
                    content: "w-full bg-slate-50 p-8 lg:p-10 min-h-[400px]"
                };
            default:
                return {
                    container: "flex flex-col lg:flex-row items-stretch font-sans rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm",
                    nav: "w-full lg:w-1/4 flex flex-col bg-muted/30 border-r border-border/50 p-2 gap-2",
                    navHeader: "p-4 mb-2",
                    navHeaderText: "text-sm font-bold uppercase tracking-wider text-muted-foreground/70",
                    button: (isActive: boolean) => `relative text-left py-4 px-6 rounded-lg text-base font-medium transition-all duration-300 outline-none group flex items-center gap-3 ${isActive
                        ? "bg-white dark:bg-slate-800 text-primary shadow-md"
                        : "text-muted-foreground hover:bg-white/50 dark:hover:bg-slate-800/50 hover:text-foreground"
                        }`,
                    indicator: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full",
                    content: "w-full lg:w-3/4 bg-background/50 p-8 lg:p-12 min-h-[500px] relative"
                };
        }
    };

    const layout = getLayoutClasses();

    return (
        <div className="w-full max-w-6xl mx-auto py-12">
            <div className={layout.container}>

                {/* Navigation Tabs */}
                <div className={layout.nav}>
                    {layout.navHeader !== "hidden" && (
                        <div className={layout.navHeader}>
                            <h3 className={layout.navHeaderText}>Overview</h3>
                        </div>
                    )}
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTabId(tab.id)}
                            className={layout.button(activeTabId === tab.id)}
                        >
                            {activeTabId === tab.id && layout.indicator !== "hidden" && (
                                <motion.div
                                    layoutId={`activeTabIndicator-${variant}`}
                                    className={layout.indicator}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div className={layout.content}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTabId}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="h-full"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-foreground tracking-tight">{activeTabInfo?.title}</h3>
                                <div className="h-1 w-20 bg-primary/20 mt-4 rounded-full"></div>
                            </div>

                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                {renderContent()}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
