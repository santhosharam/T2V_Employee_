
import { ICPSection } from "@/components/ICPSection"
import { whoItsForData } from "@/lib/who-its-for-data"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WhoItsFor() {
    const { hash } = useLocation();

    // Scroll to hash on load
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div className="pt-24 pb-16 bg-slate-50/50">
            <div className="container mx-auto px-4 mb-20 text-center">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6">
                    Who We Help
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                    Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Workforce.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Whether you lead HR, IT, Compliance, or the entire business—T2V CoreAI unifies your data to solve your specific challenges.
                </p>
            </div>

            <div className="space-y-8">
                {Object.entries(whoItsForData).map(([key, config]) => {
                    return (
                        <ICPSection
                            key={key}
                            id={key}
                            {...config}
                        />
                    )
                })}
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 py-24 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to see your specific use case?</h2>
                <div className="flex justify-center gap-4">
                    <a href="/request-demo" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                        Get Custom Demo
                    </a>
                </div>
            </div>
        </div>
    )
}
