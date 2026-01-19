import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { solutionsPageData } from "@/lib/solutions-content"

export default function Solutions() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Every Challenge.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Tailored AI-native solutions to solve your most critical workforce challenges—from talent acquisition to retention and compliance.
                </p>
            </div>

            <div className="space-y-20">
                {solutionsPageData.map((solution) => (
                    <PlatformModuleSection
                        key={solution.id}
                        {...solution}
                    />
                ))}
            </div>
        </div>
    )
}
