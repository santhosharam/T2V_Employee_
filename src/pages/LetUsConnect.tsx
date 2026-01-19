
import { Button } from "@/components/ui/button"
import { CheckCircle2, Building2, User, Mail, Phone, Briefcase } from "lucide-react"

export default function LetUsConnect() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Content: Value Proposition for HRs */}
                    <div className="space-y-8 pt-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                            <Building2 className="w-4 h-4" />
                            <span>For HR Leaders & People Operations</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Workforce Experience?</span>
                        </h1>

                        <p className="text-xl text-gray-600">
                            Connect with our specialized HR transformation team. whether you're looking to automate compliance, accelerate recruiting, or unify your employee data.
                        </p>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                            <h3 className="font-bold text-gray-900 text-lg">What happens next?</h3>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Customized Walkthrough</h4>
                                    <p className="text-sm text-gray-600">We'll show you exactly how our platform solves your specific challenges.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-purple-100 p-2 rounded-full text-purple-600 shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">ROI Analysis</h4>
                                    <p className="text-sm text-gray-600">Get a clear projection of time and cost savings for your organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form: HR Details */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600" />

                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Let's Connect</h2>

                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400" /> First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input required className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400" /> Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input required className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" /> Work Email <span className="text-red-500">*</span>
                                </label>
                                <input required type="email" className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all" placeholder="jane.doe@company.com" />
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-gray-400" /> Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <input required className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all" placeholder="Acme Inc." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-gray-400" /> Job Title <span className="text-red-500">*</span>
                                    </label>
                                    <input required className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all" placeholder="CHRO / HR Manager" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-gray-400" /> Phone Number
                                    </label>
                                    <input className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Company Size</label>
                                    <select className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all">
                                        <option value="" disabled selected>Select employees</option>
                                        <option value="1-50">1 - 50</option>
                                        <option value="51-200">51 - 200</option>
                                        <option value="201-1000">201 - 1,000</option>
                                        <option value="1000+">1,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Primary Challenge / Interest</label>
                                <select className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all">
                                    <option value="" disabled selected>What can we help you with?</option>
                                    <option value="recruitment">Recruitment Intelligence</option>
                                    <option value="compliance">Compliance & Legal Risk</option>
                                    <option value="data-unification">Data Unification (CoreAI)</option>
                                    <option value="knowledge">Knowledge & Learning</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg shadow-purple-200">
                                    Connect with our Team
                                </Button>
                            </div>

                            <p className="text-xs text-gray-500 text-center px-4">
                                By submitting this form, you agree to our privacy policy and to receive communications from our team. You can unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
