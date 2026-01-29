import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-16 border-t border-slate-800 font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link to="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight text-white mb-2 block">
                                TrustGrid
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            The AI-native workforce & human capital intelligence platform for modern enterprises. Predict, Accelerate, and Scale your most valuable asset—your people.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link to="/platform#core-ai" className="hover:text-primary transition-colors">T2V CoreAI</Link></li>
                            <li><Link to="/platform#knowledge-ai" className="hover:text-primary transition-colors">T2V KnowledgeAI</Link></li>
                            <li><Link to="/platform#talent-ai" className="hover:text-primary transition-colors">T2V TalentAI</Link></li>
                            <li><Link to="/platform#assess-ai" className="hover:text-primary transition-colors">T2V AssessAI</Link></li>
                            <li><Link to="/platform#comply-ai" className="hover:text-primary transition-colors">T2V ComplyAI</Link></li>
                            <li><Link to="/platform#recruit-ai" className="hover:text-primary transition-colors">T2V RecruitAI</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Industries</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link to="/industries#healthcare-life-sciences" className="hover:text-primary transition-colors">Healthcare</Link></li>
                            <li><Link to="/industries#banking-financial-services" className="hover:text-primary transition-colors">Banking & Finance</Link></li>
                            <li><Link to="/industries#manufacturing-supply-chain" className="hover:text-primary transition-colors">Manufacturing</Link></li>
                            <li><Link to="/industries#technology-software" className="hover:text-primary transition-colors">Technology</Link></li>
                            <li><Link to="/industries#retail-consumer-goods" className="hover:text-primary transition-colors">Retail</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
                            <li><Link to="/let-us-connect" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Info Footer Grid */}
                <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-slate-800 mb-8">
                    <div className="flex gap-3">
                        <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                            <h5 className="font-medium text-white mb-1">Email Us</h5>
                            <p className="text-sm text-slate-400">info@trustgrid.com</p>
                            <p className="text-sm text-slate-400">cs@trustflow.in</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                            <h5 className="font-medium text-white mb-1">Mumbai</h5>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                WeWork, Raheja Platinum, Sag Baug, Marol, Andheri East, Mumbai 400059
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <div>
                            <h5 className="font-medium text-white mb-1">Bangalore</h5>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                WeWork, 13th floor, Tin Factory, Old Madras Rd, Bengaluru 560016
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div>
                        &copy; {new Date().getFullYear()} TrustGrid. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
