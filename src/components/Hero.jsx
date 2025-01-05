import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Hero() {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 })
  }, [])
  return (
    <section className="w-full relative bg-black h-[calc(100vh-60px)]">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
      </div>
    </section>
  )
}
