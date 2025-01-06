import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"

export function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  )
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 })
    gsap.to("#cta", { opacity: 1, delay: 2, y: -50 })
  }, [])
  function handleScreenWidthChange() {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleScreenWidthChange)
    return () => {
      window.removeEventListener("resize", handleScreenWidthChange)
    }
  }, [])
  return (
    <section className="w-full relative bg-black h-[calc(100vh-60px)]">
      <div className="h-5/6 w-full flex-center flex-col">
        {/* Hero Section - Child 1: Title */}
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        {/* Hero Section - Child 2: Video */}
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* Hero Section - Child 3: Buy Button (Not at the same div level with child 1 and 2) */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}
