
import { HeroSection } from "@/components/HeroSection"
import { FinalCTA } from "@/components/FinalCTA"
import { PlatformModuleSection } from "@/components/PlatformModuleSection"
import { homeSections } from "@/lib/home-sections-data"

export default function Home() {
    return (
        <>
            <HeroSection />

            {/* SECTION A: T2V CoreAI */}
            <PlatformModuleSection
                id="core-ai"
                {...homeSections.coreAI}
                variant="default"
            />

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
