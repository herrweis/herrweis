import React, { useEffect, useRef, useState, useCallback } from "react"

const containerStyle = {
  position: "relative",
  width: "100%",
  aspectRatio: "3 / 2",
  overflow: "hidden",
}

const slideBase = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  transition: "opacity 0.8s ease-in-out",
}

const slideActive = {
  ...slideBase,
  opacity: 1,
}

const mediaStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
}

export default function ProjectSlideshow({ slides, basePath }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const videoRefs = useRef({})
  const timerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "50%", threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    clearTimeout(timerRef.current)
    const slide = slides[activeIndex]
    const duration = slide.duration || 3000
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, duration)
    return () => clearTimeout(timerRef.current)
  }, [activeIndex, isVisible, slides])

  useEffect(() => {
    const fadeTimeouts = []
    Object.entries(videoRefs.current).forEach(([idx, video]) => {
      if (!video) return
      const i = parseInt(idx)
      if (i === activeIndex && isVisible) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        // Let the video keep playing through the 1.2s fade, then pause and reset
        const id = setTimeout(() => {
          video.pause()
          video.currentTime = 0
        }, 1300)
        fadeTimeouts.push(id)
      }
    })
    return () => fadeTimeouts.forEach(clearTimeout)
  }, [activeIndex, isVisible])

  const setVideoRef = useCallback((el, index) => {
    videoRefs.current[index] = el
  }, [])

  return (
    <div style={containerStyle} ref={containerRef}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={index === activeIndex ? slideActive : slideBase}
        >
          {slide.type === "video" ? (
            <video
              ref={(el) => setVideoRef(el, index)}
              muted
              playsInline
              preload="none"
              poster={`${basePath}/${slide.name}_poster_1200w.jpg`}
              style={mediaStyle}
            >
              <source src={`${basePath}/${slide.name}_800w.webm`} type="video/webm" media="(max-width: 800px)" />
              <source src={`${basePath}/${slide.name}_1200w.webm`} type="video/webm" media="(max-width: 1200px)" />
              <source src={`${basePath}/${slide.name}_1920w.webm`} type="video/webm" />
              <source src={`${basePath}/${slide.name}_800w.mp4`} type="video/mp4" media="(max-width: 800px)" />
              <source src={`${basePath}/${slide.name}_1200w.mp4`} type="video/mp4" media="(max-width: 1200px)" />
              <source src={`${basePath}/${slide.name}_1920w.mp4`} type="video/mp4" />
            </video>
          ) : (
            <picture>
              <source
                type="image/webp"
                srcSet={`${basePath}/${slide.name}_800w.webp 800w, ${basePath}/${slide.name}_1200w.webp 1200w, ${basePath}/${slide.name}_2000w.webp 2000w`}
                sizes="100vw"
              />
              <img
                src={`${basePath}/${slide.name}_800w.jpg`}
                srcSet={`${basePath}/${slide.name}_800w.jpg 800w, ${basePath}/${slide.name}_1200w.jpg 1200w, ${basePath}/${slide.name}_2000w.jpg 2000w`}
                sizes="100vw"
                loading="lazy"
                decoding="async"
                alt=""
                style={mediaStyle}
              />
            </picture>
          )}
        </div>
      ))}
    </div>
  )
}
