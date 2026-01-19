import { LeadershipTeam } from "@/components/LeadershipTeam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, ShieldCheck, Users } from "lucide-react";

export default function About() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <div className="container mx-auto px-4 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                    We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">T2V Employee.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Our mission is to empower every organization with the intelligence to unlock the full potential of their workforce.
                </p>
            </div>

            {/* Values Section */}
            <div className="bg-slate-50 py-20 mb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-600">The principles that guide our innovation and partnership.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Trust First</h3>
                            <p className="text-gray-600">
                                We believe that workforce data is a sacred asset. Security, privacy, and ethical AI are the foundations of everything we build.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Human-Centric AI</h3>
                            <p className="text-gray-600">
                                AI should augment human potential, not replace it. We design for the people behind the data—employees, managers, and leaders.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Global Mindset</h3>
                            <p className="text-gray-600">
                                Work is global, and so are we. Our platform is built to navigate the complexity of international regulations, cultures, and languages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-20">
                <LeadershipTeam />
            </div>

            {/* CTA */}
            <div className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us on our journey</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                        Whether you are looking to transform your workforce or join our team, we'd love to hear from you.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
