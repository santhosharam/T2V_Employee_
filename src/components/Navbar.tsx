
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
                    {/* Placeholder Logo Text */}
                    <span className="text-2xl font-bold tracking-tight text-primary">
                        TrustGrid
                    </span>
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

                        <Link to="/outcomes-roi" className="hover:text-primary text-foreground/90 transition-colors">Outcomes & ROI</Link>
                        <Link to="/solutions" className="hover:text-primary text-foreground/90 transition-colors">Solutions</Link>

                        <Link to="/industries" className="hover:text-primary text-foreground/90 transition-colors">Industries</Link>
                        <Link to="/partners" className="hover:text-primary text-foreground/90 transition-colors">Partnerships</Link>
                        <Link to="/resources" className="hover:text-primary text-foreground/90 transition-colors">Resources</Link>
                        <Link to="/about" className="hover:text-primary text-foreground/90 transition-colors">About Us</Link>
                        <Link to="/let-us-connect" className="hover:text-primary text-foreground/90 transition-colors">Let's Connect</Link>
                    </nav>
                </div>
                <div className="hidden lg:flex items-center gap-4">

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
            </div>
            {isOpen && (
                <div className="lg:hidden border-t border-border p-4 space-y-4 bg-background shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        <Link to="/platform" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Platform</Link>
                        <Link to="/#recruitment" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>T2V RecruitAI</Link>
                        <Link to="/#compliance" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Compliance & Legal</Link>
                        <Link to="/#knowledge-acceleration" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Learning & Knowledge</Link>
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
            )}
        </header>
    )
}
