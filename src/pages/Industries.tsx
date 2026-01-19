import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { industriesPageData } from "@/lib/industries-content"

export default function Industries() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Built for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Industry.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Deep vertical expertise and regulation-aware intelligence for healthcare, finance, manufacturing, and beyond.
                </p>
            </div>

            <div className="space-y-20">
                {industriesPageData.map((industry) => (
                    <PlatformModuleSection
                        key={industry.id}
                        {...industry}
                    />
                ))}
            </div>
        </div>
    )
}
