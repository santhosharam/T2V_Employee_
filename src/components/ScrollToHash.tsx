import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If there is no hash, or we are just changing routes without a hash, 
        // we might want to scroll to top (optional, but good UX)
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        // If there is a hash, try to scroll to it
        const element = document.getElementById(hash.replace("#", ""));

        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        } else {
            // If element not found immediately (e.g. lazy loading), retry after a short delay
            const timer = setTimeout(() => {
                const retryElement = document.getElementById(hash.replace("#", ""));
                if (retryElement) {
                    retryElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 300); // Wait for Suspense/render

            return () => clearTimeout(timer);
        }
    }, [pathname, hash, key]);

    return null;
}
