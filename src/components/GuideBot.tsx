"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { X, Sparkles, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GuideBot() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeSection, setActiveSection] = useState<string>("")
    const [showBubble, setShowBubble] = useState(false)
    const [explanation, setExplanation] = useState<string | null>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [userMessage, setUserMessage] = useState("")
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [robotState, setRobotState] = useState<'idle' | 'speaking' | 'thinking'>('idle')

    // Knowledge base for sections (simple mapping for demo)
    const explanations: Record<string, string> = {
        "hero": "This is the Command Center! From here, you can see our core value proposition: transforming regular HR operations into actionable AI intelligence.",
        "solutions": "Our Solutions section covers the entire employee lifecycle. Whether it's recruiting, onboarding, or offboarding, we have an AI agent for that.",
        "platform": "This is the heart of T2V. Our platform unifies data from fragmented systems into a single 'Knowledge Fabric'.",
        "industries": "We don't just do generic HR. We have specialized models for Healthcare, Retail, Manufacturing, and Finance.",
        "partners": "Collaboration is key. We integrate with major players like SAP, Oracle, and Microsoft.",
        "about": "Get to know us! We're a team of innovators dedicated to solving the 'fragmentation problem' in modern enterprises.",
        "cta": "Ready to take the leap? requesting a demo is the best way to see our AI agents in action with your own data.",
        "footer": "Need to navigate elsewhere? The footer has quick links to all our legal policies and social channels.",
        "default": "This section contains vital information about our services. I'm analyzing it to see how it can help you!"
    }

    // Monitor scroll to detect active section and visibility
    useEffect(() => {
        const handleScroll = () => {
            // Visibility check: Show only after scrolling past banner (e.g., > 500px)
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }

            // Simple logic: find section closest to center of screen
            const sections = document.querySelectorAll('section, header, footer')
            let currentBest = ""
            let minDistance = Infinity

            sections.forEach(section => {
                const rect = section.getBoundingClientRect()
                const center = rect.top + rect.height / 2
                const screenCenter = window.innerHeight / 2
                const distance = Math.abs(center - screenCenter)

                // Heuristic to guess section name if ID is missing
                let name = section.id ||
                    section.querySelector('h1')?.innerText ||
                    section.querySelector('h2')?.innerText ||
                    section.tagName.toLowerCase()

                name = name.toLowerCase()

                if (distance < minDistance) {
                    minDistance = distance
                    // Map detected name to a key in our knowledge base
                    if (name.includes("solution")) currentBest = "solutions"
                    else if (name.includes("industry") || name.includes("industries")) currentBest = "industries"
                    else if (name.includes("platform") || name.includes("coreai")) currentBest = "platform"
                    else if (name.includes("about") || name.includes("story")) currentBest = "about"
                    else if (name.includes("partner")) currentBest = "partners"
                    else if (name.includes("transform") || name.includes("demo")) currentBest = "cta"
                    else if (section.tagName === "HEADER") currentBest = "hero"
                    else if (section.tagName === "FOOTER") currentBest = "footer"
                    else currentBest = "default"
                }
            })

            if (currentBest && currentBest !== activeSection) {
                setActiveSection(currentBest)
                resetTimer()
                setShowBubble(false)
                setExplanation(null)
                setRobotState('idle')
            }
        }

        window.addEventListener('scroll', handleScroll)
        // Trigger once on mount to check initial position
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [activeSection])

    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            promptUser()
        }, 5000) // 5 seconds dwell time
    }

    const promptUser = () => {
        if (!isVisible) return // Don't prompt if hidden
        setRobotState('speaking')
        setShowBubble(true)
    }

    const handleExplain = () => {
        setRobotState('thinking')
        // Simulate "thinking" delay
        setTimeout(() => {
            const text = explanations[activeSection] || explanations["default"]
            setExplanation(text)
            setRobotState('speaking')
        }, 1000)
    }

    const handleDismiss = () => {
        setShowBubble(false)
        setExplanation(null)
        setRobotState('idle')
        // Don't prompt again for this specific dwell session
        if (timerRef.current) clearTimeout(timerRef.current)
    }

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!userMessage.trim()) return

        // Demo response
        setRobotState('thinking')
        setExplanation(null) // clear previous
        setTimeout(() => {
            setExplanation(`I heard you say: "${userMessage}". As an AI demo, I can't process custom queries yet, but I'm learning!`)
            setRobotState('speaking')
            setUserMessage("")
        }, 1000)
    }

    // Don't return null here, allow the component to mount but control visibility via CSS/Animation
    // This allows transition effects if needed, but for now strict visibility is fine
    if (!isVisible) return null

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 pointer-events-none">
            {/* Bubble Area */}
            {(showBubble || explanation) && (
                <div
                    className="bg-white text-slate-800 p-4 rounded-2xl rounded-br-none shadow-2xl w-72 animate-in fade-in slide-in-from-bottom-5 pointer-events-auto border border-purple-100 mb-2"
                >
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                            {explanation ? "T2V GuideBot" : "Suggestion"}
                        </span>
                        <button onClick={handleDismiss} className="text-slate-400 hover:text-slate-600">
                            <X className="h-3 w-3" />
                        </button>
                    </div>

                    <p className="text-sm leading-relaxed mb-3 font-medium">
                        {explanation ? explanation : `It looks like you're interested in this section. Shall I explain what's happening here?`}
                    </p>

                    {/* Quick Actions (only if no explanation is showing) */}
                    {!explanation && (
                        <div className="flex gap-2 mb-3">
                            <Button
                                size="sm"
                                className="h-7 text-xs bg-primary hover:bg-primary/90 text-white shadow-md shadow-purple-200"
                                onClick={handleExplain}
                            >
                                <Sparkles className="h-3 w-3 mr-1.5" /> Yes, explain
                            </Button>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 text-xs text-slate-500 hover:text-slate-800"
                                onClick={handleDismiss}
                            >
                                No thanks
                            </Button>
                        </div>
                    )}

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="relative mt-2 pt-2 border-t border-slate-100 font-sans">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            className="w-full h-8 pl-3 pr-8 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-slate-700 placeholder:text-slate-400"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1/2 translate-y-1/2 p-1 text-primary hover:text-primary/80 transition-colors"
                        >
                            <Send className="h-3.5 w-3.5" />
                        </button>
                    </form>
                </div>
            )}

            {/* Robot Avatar - Custom Design based on Image */}
            {/* Wrapper to control layout size vs visual size */}
            <div className="relative w-24 h-24 pointer-events-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => (!showBubble && !explanation) ? promptUser() : handleDismiss()}
            >
                <div
                    className={`absolute bottom-0 right-0 origin-bottom-right transition-transform duration-300 cursor-pointer ${isHovered ? 'scale-60' : 'scale-50'}`}
                >
                    {/* Float Animation */}
                    <div className={`relative flex flex-col items-center ${robotState === 'speaking' ? 'animate-bounce-slight' : 'animate-float'}`}>

                        {/* Head Container */}
                        <div className="relative z-20">
                            {/* Side Ears/Headphones */}
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-6 h-12 bg-[#1e293b] rounded-full -z-10" />
                            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-6 h-12 bg-[#1e293b] rounded-full -z-10" />

                            {/* White Outer Shell */}
                            <div className="w-40 h-32 bg-[#f1f5f9] rounded-[2rem] p-3 shadow-xl relative overflow-hidden ring-1 ring-white/50">
                                {/* Face Screen */}
                                <div className="w-full h-full bg-[#0f172a] rounded-[1.5rem] relative flex items-center justify-center overflow-hidden shadow-inner border border-white/5">
                                    {/* Screen Glare/Reflection */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />

                                    {/* Eyes */}
                                    <div className="flex gap-6 z-10">
                                        {/* Left Eye */}
                                        <div className={`w-8 h-12 bg-[#38bdf8] rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)] ${robotState === 'thinking' ? 'animate-pulse' : 'animate-blink'}`} />
                                        {/* Right Eye */}
                                        <div className={`w-8 h-12 bg-[#38bdf8] rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)] ${robotState === 'thinking' ? 'animate-pulse animation-delay-300' : 'animate-blink'}`} />
                                    </div>

                                    {/* Mouth (Only when speaking) */}
                                    {robotState === 'speaking' && (
                                        <div className="absolute bottom-4 w-8 h-1.5 bg-[#38bdf8]/50 rounded-full animate-pulse" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Neck/Collar Shadow */}
                        <div className="w-24 h-4 bg-[#1e293b] -mt-2 rounded-full relative z-10 opacity-40 blur-sm scale-90" />

                        {/* Torso/Body */}
                        <div className="relative -mt-2 z-10">
                            {/* Main Body Shape */}
                            <div className="w-28 h-24 bg-[#f1f5f9] rounded-b-[3rem] rounded-t-[1rem] shadow-lg relative z-20 flex justify-center items-end pb-2 overflow-hidden">
                                {/* Body Details/Lines */}
                                <div className="absolute bottom-4 w-20 h-0.5 bg-slate-300/50 rounded-full" />

                                {/* Dark Base */}
                                <div className="w-16 h-4 bg-[#1e293b] rounded-full mb-1 opacity-80" />
                            </div>

                            {/* Left Arm */}
                            <div className="absolute top-1 -left-10 w-12 h-24 bg-[#f1f5f9] rounded-[2rem] origin-top-right rotate-[20deg] shadow-md z-10 flex flex-col justify-end items-center pb-1">
                                {/* Fingers */}
                                <div className="flex gap-1">
                                    <div className="w-2 h-3 bg-[#1e293b] rounded-full" />
                                    <div className="w-2 h-3 bg-[#1e293b] rounded-full translate-y-1" />
                                    <div className="w-2 h-3 bg-[#1e293b] rounded-full" />
                                </div>
                            </div>

                            {/* Right Arm */}
                            <div className="absolute top-1 -right-10 w-12 h-24 bg-[#f1f5f9] rounded-[2rem] origin-top-left -rotate-[20deg] shadow-md z-10 flex flex-col justify-end items-center pb-1">
                                {/* Fingers */}
                                <div className="flex gap-1">
                                    <div className="w-2 h-3 bg-[#1e293b] rounded-full" />
                                    <div className="w-2 h-3 bg-[#1e293b] rounded-full translate-y-1" />
                                    <div className="w-2 h-3 bg-[#1e293b] rounded-full" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Hover Tooltip (Shown on hover over the wrapper) */}
                {!showBubble && !explanation && (
                    <div className="absolute right-24 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm z-50">
                        Hi there!
                    </div>
                )}
            </div>
        </div>
    )
}
