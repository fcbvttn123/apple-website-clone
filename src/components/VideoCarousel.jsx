import { useRef, useState } from "react"
import { hightlightsSlides } from "../constants"

export function VideoCarousel() {
  const videoRef = useRef([])
  const videoSpanRef = useRef([])
  const videoDivRef = useRef([])
  const [video, setVideo] = useState({
    videoId: false,
    startPlay: false,
    isPlaying: false,
    isEnd: false,
    isLastVideo: false,
  })
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          // Carousel Items
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              {/* Carousel Item - Video */}
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              {/* Carousel Item - Text */}
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
