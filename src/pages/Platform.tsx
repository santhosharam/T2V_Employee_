import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { platformModulesConfig } from "@/lib/platform-modules-config"
import { platformModulesData } from "@/lib/platform-content"

export default function Platform() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Infinite Intelligence.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    The only AI-native workforce intelligence platform built to unify data, accelerate knowledge, and drive measurable outcomes across the entire employee lifecycle.
                </p>
            </div>

            <div className="space-y-20">
                {Object.entries(platformModulesConfig).map(([key, config]) => {
                    const moduleData = platformModulesData[key as keyof typeof platformModulesData];

                    // Fallback if moduleData is missing, though it should be there based on files
                    if (!moduleData) return null;

                    return (
                        <PlatformModuleSection
                            key={key}
                            id={key}
                            {...config}
                            moduleData={moduleData}
                        />
                    )
                })}
            </div>
        </div>
    )
}
