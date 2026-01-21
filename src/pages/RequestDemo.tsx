import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function RequestDemo() {
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
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Business Email</label>
                                <input className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@company.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Company Name</label>
                                <input className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Acme Inc." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Anything specific you want to see?</label>
                                <textarea className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="I'm interested in..." />
                            </div>
                            <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md">
                                Schedule Demo
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
