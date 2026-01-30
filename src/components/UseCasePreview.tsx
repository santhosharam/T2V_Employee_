import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, ShieldCheck, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const useCases = [
    {
        title: "HR Leaders",
        desc: "Automate repetitive tasks and focus on strategic people initiatives.",
        icon: Users,
        link: "/who-its-for#hr-leaders",
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Operations Managers",
        desc: "Optimize workforce costs and improve resource utilization.",
        icon: TrendingUp,
        link: "/who-its-for#ops-managers",
        color: "bg-green-50 text-green-600"
    },
    {
        title: "Compliance & Risk",
        desc: "Stay ahead of regulatory changes and prevent costly violations.",
        icon: ShieldCheck,
        link: "/who-its-for#compliance-legal",
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Executives",
        desc: "Gain real-time visibility into workforce ROI and future trends.",
        icon: Briefcase,
        link: "/who-its-for#exec-leaders",
        color: "bg-indigo-50 text-indigo-600"
    }
];

export function UseCasePreview() {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for Every Stakeholder</h2>
                        <p className="text-xl text-slate-600">Tailored intelligence for every role in your organization.</p>
                    </div>
                    <Link to="/who-its-for">
                        <Button variant="ghost" className="hidden md:flex gap-2">View all stakeholders <ArrowRight className="w-4 h-4" /></Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, i) => (
                        <div key={i} className="group p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 bg-white">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${useCase.color}`}>
                                <useCase.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{useCase.desc}</p>
                            <Link to={useCase.link} className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                                Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="md:hidden mt-8 text-center">
                    <Link to="/who-its-for">
                        <Button variant="outline" className="w-full">View all stakeholders</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
