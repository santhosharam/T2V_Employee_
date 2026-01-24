
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { submitToAirtable } from '@/lib/airtable';

export function TrafficTracker() {
    const location = useLocation();


    useEffect(() => {
        const trackPageView = async () => {
            // 1. Visitor ID (Persistent)
            let visitorId = localStorage.getItem('t2v_visitor_id');
            let isRepeat = true;
            if (!visitorId) {
                visitorId = crypto.randomUUID();
                localStorage.setItem('t2v_visitor_id', visitorId);
                isRepeat = false;
            }

            // 2. Session ID (Per Session)
            let sessionId = sessionStorage.getItem('t2v_session_id');
            if (!sessionId) {
                sessionId = crypto.randomUUID();
                sessionStorage.setItem('t2v_session_id', sessionId);
            }

            // 3. Screen & Device
            const screenRes = `${window.screen.width}x${window.screen.height}`;
            const userAgent = navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const deviceType = isMobile ? 'Mobile' : 'Desktop';

            // 4. Page Details
            // Note: document.title might be stale immediately on route change, but acceptable for simple tracking
            // We'll trust the current window location
            const currentUrl = window.location.href;
            const path = location.pathname;
            const title = document.title;
            const referrer = document.referrer;

            try {
                // We use the generic submitToAirtable
                // The generic function handles IP and Timestamp internally if we want, 
                // but for Traffic Table we might want explicit fields as requested.
                // Our modified submitToAirtable ALREADY adds IP and "Client Timestamp".
                // We just need to pass the rest.

                await submitToAirtable('Traffic Analysis', {
                    "Visitor ID": visitorId,
                    "Page URL": currentUrl,
                    "Page Path": path,
                    "Page Title": title || "T2V Employee",
                    "Referrer": referrer,
                    "Session ID": sessionId,
                    "Is Repeat Visitor": isRepeat ? "Yes" : "No",
                    "User Agent": userAgent,
                    "Screen": screenRes,
                    "Device Type": deviceType
                    // IP Address and Client Timestamp are added by airtable.ts
                });
                console.log(`[Analytics] Tracked view: ${path}`);
            } catch (error) {
                // Silently fail for analytics to not disturb user exp
                console.warn("[Analytics] Failed to track page view", error);
            }
        };

        // Simple debounce/check to prevent double firing in StrictMode if essential,
        // though for analytics usually we just want to fire on location change.
        trackPageView();

    }, [location]); // Runs on every route change

    return null; // Headless component
}
