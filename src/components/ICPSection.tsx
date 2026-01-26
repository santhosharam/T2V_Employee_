
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
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

interface ICPSectionProps {
    id: string
    badge: string
    badgeIcon: LucideIcon
    title: string
    tagline: string
    description: string
    challenges: string[]
    capabilities: Capability[]
    outcomes: Stat[]
    ctaHeadline: string
    ctaDescription: string
    ctaButtonText: string
    ctaButtonLink?: string
}

export function ICPSection({
    id,
    badge,
    badgeIcon: BadgeIcon,
    title,
    tagline,
    description,
    challenges,
    capabilities,
    outcomes,
    ctaHeadline,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink = "/contact",
}: ICPSectionProps) {

    // Background styling
    const getContainerStyles = () => {
        return "bg-white shadow-lg border-gray-100";
    }

    // Connect outcomes to StatCard logic (Panel 4)
    const renderOutcomes = () => {
        const gridClass = outcomes.length >= 4 ? "grid md:grid-cols-2 lg:grid-cols-4" : "grid md:grid-cols-3"

        return (
            <div className={`${gridClass} gap-6 mb-6`}>
                {outcomes.map((stat, index) => (
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

    // Challenges Layout (Panel 2)
    const renderChallenges = () => {
        return (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100/50 hover:bg-red-50 transition-colors">
                        <div className="mt-1 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed">
                            {challenge}
                        </p>
                    </div>
                ))}
            </div>
        )
    }

    // Capabilities Layout (Panel 3)
    const renderCapabilities = () => {
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

    return (
        <section id={id} className="py-8 px-4 bg-transparent">
            <div className="container mx-auto max-w-7xl">

                <div className={`relative rounded-[1.5rem] p-6 md:p-10 overflow-hidden border border-gray-100 ${getContainerStyles()}`}>

                    {/* Panel 1: Header */}
                    <div className="flex flex-col items-center text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-blue-50 text-blue-700">
                            <BadgeIcon className="w-3 h-3" />
                            <span>{badge}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 max-w-4xl">
                            {title}
                        </h2>
                        <p className="text-xl font-medium mb-4 text-purple-600 max-w-3xl">
                            {tagline}
                        </p>
                        <p className="text-lg leading-relaxed text-gray-500 max-w-3xl">
                            {description}
                        </p>
                    </div>

                    {/* Panel 2: Challenges */}
                    <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                            <div className="h-px bg-gray-200 flex-grow"></div>
                            Key Challenges
                            <div className="h-px bg-gray-200 flex-grow"></div>
                        </h3>
                        {renderChallenges()}
                    </div>

                    {/* Panel 3: Capabilities */}
                    <div className="mb-12">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                            <div className="h-px bg-gray-200 flex-grow"></div>
                            Platform Capabilities
                            <div className="h-px bg-gray-200 flex-grow"></div>
                        </h3>
                        {renderCapabilities()}
                    </div>

                    {/* Panel 4: Outcomes (Stats) */}
                    <div className="mb-12">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                            <div className="h-px bg-gray-200 flex-grow"></div>
                            Impact & ROI
                            <div className="h-px bg-gray-200 flex-grow"></div>
                        </h3>
                        {renderOutcomes()}
                    </div>

                    {/* Panel 5: CTA */}
                    <div className="text-center py-8 px-6 border-t border-gray-200 bg-slate-50 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{ctaHeadline}</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={ctaButtonLink}>
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                                    {ctaButtonText} <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
