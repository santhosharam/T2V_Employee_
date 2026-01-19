

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export const AOSInit = () => {
    useEffect(() => {
        // Initialize AOS with settings similar to Aivio theme
        AOS.init({
            once: true, // Animates only once
            duration: 800, // Duration similar to Aivio
            easing: "ease-out-quart", // Smooth easing
            offset: 100, // Trigger offset
            disable: "mobile" // Optional: disable on mobile if desired, but Aivio usually keeps it
        })
    }, [])

    return null
}
