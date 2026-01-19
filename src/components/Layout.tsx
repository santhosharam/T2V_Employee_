
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AOSInit } from "@/components/AOSInit";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className={cn(
            "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-secondary/20 selection:text-secondary flex flex-col"
        )}>
            <AOSInit />
            <AnimatedBackground />
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
