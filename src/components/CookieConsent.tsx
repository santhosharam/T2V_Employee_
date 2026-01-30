import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if cookie preference is already set
        const choice = localStorage.getItem("cookie-consent");
        if (!choice) {
            // Show after a small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
        // Initialize analytics or pixels here
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-4 right-4 z-[100] max-w-sm w-full md:w-[400px] p-4"
                >
                    <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 relative overflow-hidden">

                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Cookie className="w-24 h-24 text-slate-900" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">We value your privacy</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        We use cookies to enhance your experience, analyze traffic, and personalize content.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Button
                                    onClick={handleAccept}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl h-10"
                                >
                                    Accept All
                                </Button>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        onClick={handleDecline}
                                        className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl h-10"
                                    >
                                        Decline
                                    </Button>
                                    <Link to="/privacy-policy" className="w-full">
                                        <Button
                                            variant="ghost"
                                            className="w-full text-slate-500 hover:text-slate-900 rounded-xl h-10"
                                        >
                                            Preferences
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleDecline}
                            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
