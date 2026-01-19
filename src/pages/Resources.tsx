import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { resourcesPageData } from "@/lib/resources-content"

export default function Resources() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Insights for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Future of Work.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Strategic perspectives, technical guides, and industry research to help you lead with intelligence.
                </p>
            </div>

            <div className="space-y-20">
                {resourcesPageData.map((resource) => (
                    <PlatformModuleSection
                        key={resource.id}
                        {...resource}
                    />
                ))}
            </div>
        </div>
    )
}
