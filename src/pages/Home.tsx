
import { HeroSection } from "@/components/HeroSection"
import { TrustIndicators } from "@/components/TrustIndicators"
import { HowItWorks } from "@/components/HowItWorks"
import { UseCasePreview } from "@/components/UseCasePreview"
import { FinalCTA } from "@/components/FinalCTA"
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { homeSections } from "@/lib/home-sections-data"

export default function Home() {
    return (
        <>
            <HeroSection />
            <TrustIndicators />

            {/* SECTION A: T2V CoreAI */}
            <PlatformModuleSection
                id="core-ai"
                {...homeSections.coreAI}
                variant="default"
            />

            <HowItWorks />

            {/* SECTION B: Knowledge & Learning */}
            <PlatformModuleSection
                id="knowledge-ai"
                {...homeSections.knowledgeAI}
                variant="compact"
            />

            {/* SECTION C: Recruitment Intelligence */}
            <PlatformModuleSection
                id="recruitment-ai"
                {...homeSections.recruitmentAI}
                variant="wide"
            />

            {/* SECTION D: Compliance & Legal */}
            <PlatformModuleSection
                id="compliance-ai"
                {...homeSections.complianceAI}
                variant="stacked"
            />

            <UseCasePreview />

            {/* SECTION E: Solutions Overview */}
            <PlatformModuleSection
                id="solutions"
                {...homeSections.solutions}
                variant="default"
            />

            <FinalCTA />
        </>
    )
}
