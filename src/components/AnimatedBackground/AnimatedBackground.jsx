import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles = []
    const particleCount = 50

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? "#00d4ff" : "#0066ff",
      })
    }

    // Animated orbs
    const orbs = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        baseX: canvas.width * 0.2,
        baseY: canvas.height * 0.3,
        radius: 150,
        color: "#0066ff",
        opacity: 0.4,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.7,
        baseX: canvas.width * 0.8,
        baseY: canvas.height * 0.7,
        radius: 200,
        color: "#00d4ff",
        opacity: 0.35,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        baseX: canvas.width * 0.5,
        baseY: canvas.height * 0.5,
        radius: 120,
        color: "#0099ff",
        opacity: 0.45,
      },
    ]

    let time = 0

    const animate = () => {
      // Clear canvas with very dark blue background (near black)
      ctx.fillStyle = "#0a0e1a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.001

      // Draw animated orbs
      orbs.forEach((orb, index) => {
        orb.x = orb.baseX + Math.sin(time * 0.5 + index) * 50
        orb.y = orb.baseY + Math.cos(time * 0.3 + index * 1.5) * 50

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(
          0,
          `${orb.color}${Math.round(orb.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${orb.color}00`)

        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2)
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        particle.opacity = 0.5 + Math.sin(time * 2 + particle.x * 0.01) * 0.3

        ctx.fillStyle = `${particle.color}${Math.round(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `#00d4ff${Math.round((1 - distance / 150) * 0.4 * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0" 
      style={{ 
        zIndex: -1,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }} 
    />
  )
}