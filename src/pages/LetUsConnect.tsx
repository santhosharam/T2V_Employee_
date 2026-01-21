
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Building2, User, Mail, Phone, Briefcase, Loader2, AlertCircle } from "lucide-react"
import Airtable from "airtable"

export default function LetUsConnect() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        phone: "",
        employees: "",
        challenge: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY
        const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID

        console.log("Debug - API Key exists?", !!apiKey, "First char:", apiKey?.charAt(0));
        console.log("Debug - Base ID exists?", !!baseId, "First char:", baseId?.charAt(0));

        if (!apiKey || !baseId) {
            setError("Configuration Error: Airtable credentials missing.")
            setIsLoading(false)
            return
        }

        const base = new Airtable({ apiKey: apiKey }).base(baseId)

        try {
            await base('Leads').create([
                {
                    fields: {
                        "First Name": formData.firstName,
                        "Last Name": formData.lastName,
                        "Work Email": formData.email,
                        "Company Name": formData.company,
                        "Job Title": formData.jobTitle,
                        "Phone Number": formData.phone,
                        "Company Size": formData.employees,
                        "Challenge": formData.challenge,
                        "Status": "New"
                    }
                }
            ])

            setIsSuccess(true)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                jobTitle: "",
                phone: "",
                employees: "",
                challenge: ""
            })
        } catch (err: any) {
            console.error(err)
            setError(err.message || "Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="pt-24 pb-16 min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg text-center space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Thank You!</h2>
                    <p className="text-gray-600 text-lg">
                        We've received your request. One of our specialist team members will review your details and reach out shortly.
                    </p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    >
                        Submit Another Request
                    </Button>
                </div>
            </div>
        )
    }

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

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400" /> First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400" /> Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" /> Work Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    type="email"
                                    className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                    placeholder="jane.doe@company.com"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-gray-400" /> Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="Acme Inc."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-gray-400" /> Job Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        required
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="CHRO / HR Manager"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-gray-400" /> Phone Number
                                    </label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Company Size</label>
                                    <select
                                        name="employees"
                                        value={formData.employees}
                                        onChange={handleChange}
                                        className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                    >
                                        <option value="" disabled>Select employees</option>
                                        <option value="1-50">1 - 50</option>
                                        <option value="51-200">51 - 200</option>
                                        <option value="201-1000">201 - 1,000</option>
                                        <option value="1000+">1,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Primary Challenge / Interest</label>
                                <select
                                    name="challenge"
                                    value={formData.challenge}
                                    onChange={handleChange}
                                    className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus:bg-white transition-all"
                                >
                                    <option value="" disabled>What can we help you with?</option>
                                    <option value="recruitment">Recruitment Intelligence</option>
                                    <option value="compliance">Compliance & Legal Risk</option>
                                    <option value="data-unification">Data Unification (CoreAI)</option>
                                    <option value="knowledge">Knowledge & Learning</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    size="lg"
                                    className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg shadow-purple-200"
                                >
                                    {isLoading ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Sending...</> : "Connect with our Team"}
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
