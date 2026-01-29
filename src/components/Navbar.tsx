
import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md shadow-sm">
            <div className="container flex h-20 items-center justify-between mx-auto px-4 lg:px-8">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/trustgrid_logo.png" alt="TrustGrid.AI" className="h-10 w-auto" />
                </Link>
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex items-center gap-6 text-sm font-medium text-foreground/80">
                        <div className="group relative cursor-pointer md:py-4">
                            <Link to="/platform" className="flex items-center gap-1 text-foreground/90 group-hover:text-primary transition-colors">Platform <ChevronDown className="h-4 w-4" /></Link>
                            <div className="absolute top-full -left-10 w-[600px] bg-card border border-border shadow-xl rounded-xl p-6 hidden group-hover:grid grid-cols-2 gap-x-8 gap-y-4 animate-in fade-in zoom-in-95 duration-200">

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 border-b border-border/50 pb-1">Core Intelligence</h4>
                                    <Link to="/platform#core-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V CoreAI</div>
                                            <div className="text-xs text-muted-foreground">Master Data Management</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link to="/platform#knowledge-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V KnowledgeAI</div>
                                            <div className="text-xs text-muted-foreground">Enterprise Knowledge Fabric</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link to="/platform#vertical-knowledge-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V Vertical KnowledgeAI</div>
                                            <div className="text-xs text-muted-foreground">Industry-Specific Intelligence</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link to="/#compliance" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V ComplyAI</div>
                                            <div className="text-xs text-muted-foreground">Compliance & Risk</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 border-b border-border/50 pb-1">Workforce Enablement</h4>
                                    <Link to="/platform#talent-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V TalentAI</div>
                                            <div className="text-xs text-muted-foreground">Skills & Capability</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link to="/#knowledge-acceleration" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V AccelerateAI</div>
                                            <div className="text-xs text-muted-foreground">Knowledge Acceleration</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link to="/platform#portal-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V PortalAI</div>
                                            <div className="text-xs text-muted-foreground">Conversational Experience</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link to="/platform#assess-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground text-sm">T2V AssessAI</div>
                                            <div className="text-xs text-muted-foreground">Performance Intelligence</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </Link>
                                </div>

                                <div className="col-span-2 space-y-4 pt-4 border-t border-border/50">
                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Extended Workforce</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        <Link to="/#recruitment" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                            <div>
                                                <div className="font-semibold text-foreground text-sm">T2V RecruitAI</div>
                                                <div className="text-xs text-muted-foreground">RPO Platform</div>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        </Link>
                                        <Link to="/platform#contract-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                            <div>
                                                <div className="font-semibold text-foreground text-sm">T2V ContractAI</div>
                                                <div className="text-xs text-muted-foreground">Contract Workforce</div>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        </Link>
                                        <Link to="/platform#perform-ai" className="group/item flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors">
                                            <div>
                                                <div className="font-semibold text-foreground text-sm">T2V PerformAI</div>
                                                <div className="text-xs text-muted-foreground">Vendor Performance</div>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="group relative cursor-pointer md:py-4">
                            <Link to="/who-its-for" className="flex items-center gap-1 text-foreground/90 group-hover:text-primary transition-colors">Who It's For <ChevronDown className="h-4 w-4" /></Link>
                            <div className="absolute top-full -left-4 w-[280px] bg-card border border-border shadow-xl rounded-xl p-4 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                                <div className="space-y-1">
                                    <Link to="/who-its-for#hr-leaders" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">HR & People Leaders</Link>
                                    <Link to="/who-its-for#talent-learning" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Talent & Learning</Link>
                                    <Link to="/who-its-for#compliance-legal" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Compliance & Legal</Link>
                                    <Link to="/who-its-for#exec-leaders" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Exec & Business Leaders</Link>
                                    <Link to="/who-its-for#data-teams" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Data & Analytics</Link>
                                    <Link to="/who-its-for#tech-leaders" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Tech & Platform Leaders</Link>
                                </div>
                            </div>
                        </div>


                        <div className="group relative cursor-pointer md:py-4">
                            <Link to="/outcomes-roi" className="flex items-center gap-1 text-foreground/90 group-hover:text-primary transition-colors">Outcomes & ROI <ChevronDown className="h-4 w-4" /></Link>
                            <div className="absolute top-full -left-4 w-[280px] bg-card border border-border shadow-xl rounded-xl p-4 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                                <div className="space-y-1">
                                    <Link to="/outcomes-roi#productivity" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Productivity Impact</Link>
                                    <Link to="/outcomes-roi#cost-reduction" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Cost Efficiency</Link>
                                    <Link to="/outcomes-roi#talent-impact" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Talent Outcomes</Link>
                                    <Link to="/outcomes-roi#risk-compliance" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Risk & Compliance</Link>
                                    <Link to="/outcomes-roi#financial-justification" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">ROI & Payback</Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer md:py-4">
                            <Link to="/solutions" className="flex items-center gap-1 text-foreground/90 group-hover:text-primary transition-colors">Solutions <ChevronDown className="h-4 w-4" /></Link>
                            <div className="absolute top-full -left-4 w-[280px] bg-card border border-border shadow-xl rounded-xl p-4 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                                <div className="space-y-1">
                                    <Link to="/solutions#workforce-intelligence" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Workforce Intelligence</Link>
                                    <Link to="/solutions#knowledge-acceleration" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Knowledge Acceleration</Link>
                                    <Link to="/solutions#talent-acquisition" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Talent Acquisition</Link>
                                    <Link to="/solutions#compliance-risk" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Compliance & Risk</Link>
                                    <Link to="/solutions#performance-intelligence" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Performance Intelligence</Link>
                                    <Link to="/solutions#hybrid-workforce" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Hybrid Workforce</Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer md:py-4">
                            <Link to="/industries" className="flex items-center gap-1 text-foreground/90 group-hover:text-primary transition-colors">Industries <ChevronDown className="h-4 w-4" /></Link>
                            <div className="absolute top-full -left-4 w-[280px] bg-card border border-border shadow-xl rounded-xl p-4 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                                <div className="space-y-1">
                                    <Link to="/industries#healthcare-life-sciences" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Healthcare & Life Sciences</Link>
                                    <Link to="/industries#banking-financial-services" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Banking & Finance</Link>
                                    <Link to="/industries#manufacturing-supply-chain" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Manufacturing</Link>
                                    <Link to="/industries#technology-software" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Technology & Software</Link>
                                    <Link to="/industries#retail-consumer-goods" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Retail & Consumer Goods</Link>
                                    <Link to="/industries#professional-services" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Professional Services</Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer md:py-4">
                            <Link to="/partners" className="flex items-center gap-1 text-foreground/90 group-hover:text-primary transition-colors">Partnerships <ChevronDown className="h-4 w-4" /></Link>
                            <div className="absolute top-full -left-4 w-[280px] bg-card border border-border shadow-xl rounded-xl p-4 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                                <div className="space-y-1">
                                    <Link to="/partners#technology-partners" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Technology Partners</Link>
                                    <Link to="/partners#si-consulting-partners" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">SI & Consulting</Link>
                                    <Link to="/partners#industry-partners" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Industry Partners</Link>
                                    <Link to="/partners#compliance-legal-partners" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Compliance & Legal</Link>
                                    <Link to="/partners#channel-partners" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Channel Partners</Link>
                                </div>
                            </div>
                        </div>

                        <div className="group relative cursor-pointer md:py-4">
                            <Link to="/resources" className="flex items-center gap-1 text-foreground/90 group-hover:text-primary transition-colors">Resources <ChevronDown className="h-4 w-4" /></Link>
                            <div className="absolute top-full -left-4 w-[280px] bg-card border border-border shadow-xl rounded-xl p-4 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                                <div className="space-y-1">
                                    <Link to="/resources#executive-insights" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Executive Insights</Link>
                                    <Link to="/resources#platform-resources" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Platform Resources</Link>
                                    <Link to="/resources#industry-research" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Industry Research</Link>
                                    <Link to="/resources#compliance-legal" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Compliance & Legal</Link>
                                    <Link to="/resources#learning-enablement" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors">Learning & Enablement</Link>
                                </div>
                            </div>
                        </div>

                        <Link to="/about" className="hover:text-primary text-foreground/90 transition-colors">About Us</Link>

                    </nav>
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/let-us-connect">
                        <Button variant="outline" size="sm" className="shadow-sm">Let's Connect</Button>
                    </Link>
                    <Link to="/request-demo">
                        <Button size="sm" className="btn-primary-gradient text-white shadow-md border-0">Request Demo</Button>
                    </Link>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div >
            {isOpen && (
                <div className="lg:hidden border-t border-border p-4 space-y-4 bg-background shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        <Link to="/platform" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Platform</Link>
                        <Link to="/#recruitment" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>T2V RecruitAI</Link>
                        <Link to="/#compliance" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Compliance & Legal</Link>
                        <Link to="/#knowledge-acceleration" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Learning & Knowledge</Link>
                        <Link to="/#knowledge-acceleration" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Learning & Knowledge</Link>
                        <Link to="/who-its-for" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Who It's For</Link>
                        <Link to="/outcomes-roi" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Outcomes & ROI</Link>
                        <Link to="/solutions" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Solutions</Link>

                        <Link to="/industries" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Industries</Link>
                        <Link to="/partners" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Partnerships</Link>
                        <Link to="/resources" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Resources</Link>
                        <Link to="/let-us-connect" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Let's Connect</Link>

                        <Link to="/request-demo">
                            <Button size="sm" className="justify-start w-full btn-primary-gradient text-white">Request Demo</Button>
                        </Link>
                    </nav>
                </div>
            )
            }
        </header >
    )
}
