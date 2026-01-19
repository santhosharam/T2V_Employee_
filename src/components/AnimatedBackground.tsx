

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const particles: Particle[] = []
        const particleCount = 60 // Reduced density for cleaner look
        const connectionDistance = 150

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number

            constructor() {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.vx = (Math.random() - 0.5) * 0.3 // Slower movement
                this.vy = (Math.random() - 0.5) * 0.3
                this.size = Math.random() * 1.5 + 0.5
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1
                if (this.y < 0 || this.y > height) this.vy *= -1
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(148, 163, 184, 0.4)" // Light slate gray
                ctx.fill()
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, width, height)

            particles.forEach((p, index) => {
                p.update()
                p.draw()

                // Connect particles
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(148, 163, 184, ${1 - distance / connectionDistance * 0.15})` // Very subtle lines
                        ctx.lineWidth = 0.5
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            requestAnimationFrame(animate)
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)
        const animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20 bg-white">
            {/* Canvas for Neural Network Effect */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 opacity-30"
            />

            {/* Existing Ambient Blobs - Extremely Subtle */}
            <div
                className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03] animate-blob bg-blue-200 -translate-x-1/2 -translate-y-1/2"
            />
            <div
                className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03] animate-blob animation-delay-2000 bg-slate-300 translate-x-1/3 -translate-y-1/3"
            />
        </div>
    )
}
