
import { cn } from "@/lib/utils"

interface StatCardProps {
    value: string
    label: string
    explanation: string
    className?: string
}

export function StatCard({ value, label, explanation, className }: StatCardProps) {
    return (
        <div className={cn(
            "p-8 rounded-2xl glass-card transition-all duration-300 hover:shadow-xl group",
            className
        )}>
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 tracking-tight group-hover:scale-105 transition-transform origin-left">
                {value}
            </div>
            <div className="text-lg font-semibold text-slate-900 mb-3">
                {label}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                {explanation}
            </p>
        </div>
    )
}
