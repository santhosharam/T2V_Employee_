
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import VerticalModuleTabs from "@/components/ui/verticaltab"
import { StatCard } from "@/components/ui/stat-card"
import { CapabilityCard } from "@/components/ui/capability-card"

interface Stat {
    value: string
    label: string
    explanation: string
}

interface Capability {
    title: string
    desc: string
    icon: LucideIcon
}

interface ModuleData {
    challenges?: any[]
    features?: any[]
    solutions?: any[]
    outcomes?: any
}

type LayoutVariant = "default" | "compact" | "wide" | "stacked"

interface PlatformModuleSectionProps {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    stats: Stat[]
    capabilities: Capability[]
    moduleData: ModuleData
    ctaHeadline: string
    ctaDescription: string
    ctaButtonText?: string
    ctaButtonLink?: string
    secondaryCtaButtonText?: string
    variant?: LayoutVariant
}

export function PlatformModuleSection({
    id,
    badge,
    badgeIcon: BadgeIcon,
    title,
    tagline,
    description,
    stats,
    capabilities,
    moduleData,
    ctaHeadline,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink = "/contact",
    secondaryCtaButtonText,
    variant = "default"
}: PlatformModuleSectionProps) {

    // Stats Layout
    const renderStats = () => {
        const gridClass = stats.length >= 4 ? "grid md:grid-cols-2 lg:grid-cols-4" : "grid md:grid-cols-3"

        return (
            <div className={`${gridClass} gap-6`}>
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        explanation={stat.explanation}
                    />
                ))}
            </div>
        )
    }

    // Capabilities Layout
    const renderCapabilities = () => {
        if (variant === "compact") {
            return (
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 p-4">
                    {capabilities.map((cap, index) => (
                        <CapabilityCard
                            key={index}
                            title={cap.title}
                            desc={cap.desc}
                            icon={cap.icon}
                            variant="compact"
                        />
                    ))}
                </div>
            )
        }

        if (variant === "wide") {
            return (
                <div className="space-y-4">
                    {capabilities.map((cap, index) => (
                        <CapabilityCard
                            key={index}
                            title={cap.title}
                            desc={cap.desc}
                            icon={cap.icon}
                            variant="wide"
                        />
                    ))}
                </div>
            )
        }

        if (variant === "stacked") {
            return (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {capabilities.map((cap, index) => (
                        <CapabilityCard
                            key={index}
                            title={cap.title}
                            desc={cap.desc}
                            icon={cap.icon}
                            variant="stacked"
                        />
                    ))}
                </div>
            )
        }

        // Default
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((cap, index) => (
                    <CapabilityCard
                        key={index}
                        title={cap.title}
                        desc={cap.desc}
                        icon={cap.icon}
                        variant="default"
                    />
                ))}
            </div>
        )
    }

    // Title Section Positioning
    const getTitleAlignment = () => {
        if (variant === 'wide' || variant === 'compact') return 'text-left md:flex-row md:items-end md:justify-between';
        return 'text-center flex-col items-center';
    }
    const getSectionStyles = () => {
        if (variant === 'compact') return 'bg-slate-50 border-y border-slate-200';
        if (variant === 'stacked') return 'bg-white';
        return 'bg-transparent';
    }

    return (
        <section id={id} className={`py-20 md:py-32 ${getSectionStyles()}`}>
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header - Flowing & Connected */}
                <div className={`flex flex-col gap-6 mb-16 relative z-10 ${getTitleAlignment()}`}>
                    <div className={`max-w-3xl ${variant === 'stacked' || variant === 'default' ? 'mx-auto text-center' : ''}`}>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-200 text-blue-700 font-semibold text-xs uppercase tracking-wider mb-6">
                            <BadgeIcon className="w-3 h-3" />
                            <span>{badge}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
                            {title}
                        </h2>

                        <p className="text-xl md:text-2xl font-medium mb-6 text-gradient-primary">
                            {tagline}
                        </p>

                        <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Content Blocks with generous spacing */}
                <div className="space-y-16">
                    {/* Panel 2: Stats */}
                    {renderStats()}

                    {/* Panel 3: Capabilities */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-50/30 -z-10 blur-3xl opacity-50 rounded-full" />
                        <h3 className="text-sm font-bold mb-10 uppercase tracking-widest text-center text-slate-400">
                            Core Capabilities
                        </h3>
                        {renderCapabilities()}
                    </div>

                    {/* Panel 4: Vertical Tabs (Deep Dive) */}
                    <div>
                        <VerticalModuleTabs data={moduleData} variant={variant} />
                    </div>

                    {/* Panel 5: CTA - Integrated */}
                    <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 text-center shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-50" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{ctaHeadline}</h3>
                            <p className="text-slate-300 mb-8 text-lg">{ctaDescription}</p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to={ctaButtonLink}>
                                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full h-12 px-8 font-semibold">
                                        {ctaButtonText || "Get Started"} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                {secondaryCtaButtonText && (
                                    <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 rounded-full h-12 px-8">
                                        {secondaryCtaButtonText}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
