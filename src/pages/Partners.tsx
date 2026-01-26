import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { partnersPageData } from "@/lib/partners-content"
import { BecomePartnerForm } from "@/components/BecomePartnerForm"

export default function Partners() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Together.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A powerful ecosystem of technology, consulting, and industry partners to accelerate your workforce transformation.
                </p>
            </div>

            <div className="space-y-20">
                {partnersPageData.map((partner) => (
                    <PlatformModuleSection
                        key={partner.id}
                        {...partner}
                    />
                ))}

                <div className="container mx-auto px-4 max-w-5xl">
                    <BecomePartnerForm />
                </div>
            </div>
        </div>
    )
}
