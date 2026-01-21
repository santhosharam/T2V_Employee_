import { type LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CapabilityCardProps {
    title: string
    desc: string
    icon: LucideIcon
    variant?: "default" | "compact" | "wide" | "stacked"
    className?: string
}

export function CapabilityCard({ title, desc, icon: Icon, variant = "default", className }: CapabilityCardProps) {

    // Variant: Compact (List style with icon)
    if (variant === "compact") {
        return (
            <div className={cn("flex gap-4 items-start group", className)}>
                <div className="mt-1 p-2 rounded-lg bg-white border border-slate-200 text-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
            </div>
        )
    }

    // Variant: Wide (Horizontal Strip)
    if (variant === "wide") {
        return (
            <div className={cn("flex items-center gap-6 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all hover:bg-white hover:shadow-md", className)}>
                <div className="p-3 bg-white rounded-full shadow-sm text-gray-700 border border-slate-200">
                    <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 md:flex md:items-center md:justify-between">
                    <h4 className="text-lg font-bold text-gray-900 mr-4">{title}</h4>
                    <p className="text-sm text-gray-600">{desc}</p>
                </div>
                <div className="hidden md:block">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                </div>
            </div>
        )
    }

    // Variant: Stacked (Compact Grid)
    if (variant === "stacked") {
        return (
            <div className={cn("p-5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all", className)}>
                <Icon className="w-8 h-8 text-gray-700 mb-4" />
                <h4 className="text-base font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-xs text-gray-600">{desc}</p>
            </div>
        )
    }

    // Default (Standard Card)
    return (
        <div className={cn("p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all group", className)}>
            <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-gray-700 mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
                {title}
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
                {desc}
            </p>
        </div>
    )
}
