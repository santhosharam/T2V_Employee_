
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

    // Background styling
    const getContainerStyles = () => {
        return "bg-white shadow-lg border-gray-100";
    }

    // Stats Layout
    const renderStats = () => {
        const gridClass = stats.length >= 4 ? "grid md:grid-cols-2 lg:grid-cols-4" : "grid md:grid-cols-3"

        return (
            <div className={`${gridClass} gap-6 mb-10`}>
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
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-200">
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

    return (
        <section id={id} className="py-6 px-4 bg-transparent">
            <div className="container mx-auto max-w-7xl">

                <div className={`relative rounded-[2.5rem] p-6 md:p-10 overflow-hidden border border-gray-100 ${getContainerStyles()}`}>

                    {/* Panel 1: Header */}
                    <div className={`flex gap-6 mb-10 relative z-10 ${getTitleAlignment()}`}>
                        <div className={`max-w-3xl ${variant === 'stacked' ? 'mx-auto text-center' : ''}`}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gray-100 text-gray-600">
                                <BadgeIcon className="w-3 h-3" />
                                <span>{badge}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                                {title}
                            </h2>
                            <p className="text-xl font-medium mb-4 text-purple-600">
                                {tagline}
                            </p>
                            <p className="text-lg leading-relaxed text-gray-500">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Panel 2: Stats */}
                    {renderStats()}

                    {/* Panel 3: Capabilities */}
                    <div className="mb-10">
                        <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-center text-gray-400">
                            Core Capabilities
                        </h3>
                        {renderCapabilities()}
                    </div>

                    {/* Panel 4: Vertical Tabs (Deep Dive) */}
                    <div className="mb-10">
                        <VerticalModuleTabs data={moduleData} variant={variant} />
                    </div>

                    {/* Panel 5: CTA */}
                    <div className="text-center py-10 border-t border-gray-200 bg-slate-50 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{ctaHeadline}</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={ctaButtonLink}>
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                                    {ctaButtonText || "Get Started"} <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            {secondaryCtaButtonText && (
                                <Button size="lg" variant="outline" className="rounded-full">
                                    {secondaryCtaButtonText}
                                </Button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
