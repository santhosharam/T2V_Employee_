
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
            "p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all",
            className
        )}>
            <div className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                {value}
            </div>
            <div className="text-lg font-semibold text-gray-800 mb-3">
                {label}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
                {explanation}
            </p>
        </div>
    )
}
