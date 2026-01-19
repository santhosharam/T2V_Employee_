import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { outcomesRoiContent } from "@/lib/outcomes-roi-content"

export default function OutcomesROI() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Business Impact.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Real-world results, quantified value, and defensible ROI for every part of your organization.
                </p>
            </div>

            <div className="space-y-20">
                {Object.values(outcomesRoiContent).map((outcome) => (
                    <PlatformModuleSection
                        key={outcome.id}
                        {...outcome}
                    />
                ))}
            </div>
        </div>
    )
}
