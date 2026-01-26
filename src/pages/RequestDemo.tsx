
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitToAirtable } from "@/lib/airtable"

export default function RequestDemo() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Changed state structure to match required Airtable fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        interest: "" // "Anything specific you want to see?"
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            await submitToAirtable(import.meta.env.VITE_AIRTABLE_TABLE_DEMO, {
                "First Name": formData.firstName,
                "Last Name": formData.lastName,
                "Business Email": formData.email,
                "Company Name": formData.company,
                "Specific Interest": formData.interest
            })

            setIsSuccess(true)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                interest: ""
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
            <div className="pt-24 pb-16 min-h-[60vh] flex items-center justify-center">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg text-center space-y-6 animate-fade-up">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Demo Requested!</h2>
                    <p className="text-gray-600 text-lg">
                        Thanks for your interest. Our team will contact you shortly to schedule your personalized walkthrough.
                    </p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    >
                        Request Another Demo
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                            See TrustGrid Employee in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Action.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg">
                            Schedule a personalized demo to see how our AI-native platform can transform your workforce operations.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Unified Intelligence</h3>
                                    <p className="text-gray-600">See how we connect your HRIS, ATS, and LMS data.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Compliance Automation</h3>
                                    <p className="text-gray-600">Watch our AI predict and prevent compliance risks.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-purple-100 p-2 rounded-full text-purple-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Productivity ROI</h3>
                                    <p className="text-gray-600">Get a custom business case for your organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Request a Demo</h2>

                        {error && (
                            <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Business Email <span className="text-red-500">*</span></label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="john@company.com"
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label>
                                <input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Acme Inc."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Anything specific you want to see?</label>
                                <textarea
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="I'm interested in..."
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                size="lg"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md"
                            >
                                {isLoading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Scheduling...</> : "Schedule Demo"}
                            </Button>
                            <p className="text-xs text-gray-500 text-center">
                                We respect your privacy. No spam, ever.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
