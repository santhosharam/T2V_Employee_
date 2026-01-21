
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer className="bg-secondary text-foreground/80 py-12 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold tracking-tight text-foreground mb-4 block">
                            T2V
                        </span>
                        <p className="max-w-xs text-sm leading-relaxed mb-6 opacity-60">
                            The AI-native workforce & human capital intelligence platform for modern enterprises.
                        </p>
                        <div className="text-sm opacity-60 mb-6">
                            <p>info(at)t2v.com</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8 text-sm opacity-70 mt-8">
                            <div>
                                <h5 className="font-bold text-foreground mb-2">Mumbai</h5>
                                <p className="mb-1 text-xs leading-relaxed">WeWork, Raheja Platinum,<br />Sag Baug, Marol, Andheri East,<br />Mumbai, Maharashtra 400059</p>
                                <div className="mt-2 space-y-1 text-xs">
                                    <p>cs@trustflow.in</p>
                                    <p>+91 9513088612</p>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-bold text-foreground mb-2">Bangalore</h5>
                                <p className="mb-1 text-xs leading-relaxed">WeWork, 13th floor, Tin Factory,<br />Salarpuria Magnificia, Old Madras Rd,<br />Bengaluru, Karnataka 560016</p>
                                <div className="mt-2 space-y-1 text-xs">
                                    <p>cs@trustflow.in</p>
                                    <p>+91 9513088612</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/platform#core-ai" className="hover:text-primary transition-colors">T2V CoreAI</Link></li>
                            <li><Link to="/platform#knowledge-ai" className="hover:text-primary transition-colors">T2V KnowledgeAI</Link></li>
                            <li><Link to="/platform#vertical-knowledge-ai" className="hover:text-primary transition-colors">T2V Vertical KnowledgeAI</Link></li>
                            <li><Link to="/platform#accelerate-ai" className="hover:text-primary transition-colors">T2V AccelerateAI</Link></li>
                            <li><Link to="/platform#talent-ai" className="hover:text-primary transition-colors">T2V TalentAI</Link></li>
                            <li><Link to="/platform#portal-ai" className="hover:text-primary transition-colors">T2V PortalAI</Link></li>
                            <li><Link to="/platform#assess-ai" className="hover:text-primary transition-colors">T2V AssessAI</Link></li>
                            <li><Link to="/platform#comply-ai" className="hover:text-primary transition-colors">T2V ComplyAI</Link></li>
                            <li><Link to="/platform#recruit-ai" className="hover:text-primary transition-colors">T2V RecruitAI</Link></li>
                            <li><Link to="/platform#contract-ai" className="hover:text-primary transition-colors">T2V ContractAI</Link></li>
                            <li><Link to="/platform#perform-ai" className="hover:text-primary transition-colors">T2V PerformAI</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="#" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center text-sm opacity-40">
                    &copy; {new Date().getFullYear()} T2V. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
