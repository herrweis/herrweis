import React from "react"
import AnimatedCursor from "react-animated-cursor"

export default function Page() {
  return (
    <div className="wrapper">
      <h1>Andreas Weis</h1>
      <div className="logoWrapper">
         <a href="/" aria-label="Home">
            <svg ariaLabelledby="description" className="logo" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 70" xmlSpace="preserve">
                <description>Logo of andreasweis.com. Two lines mimmicking an infinity symbol that it broken up in the middle.</description>
                <path d="M55.42,56.15L8.83,5.32C7.21,3.56,4.28,4.71,4.28,7.09v48.29c0,2.12,2.39,3.36,4.13,2.14l16.63-12.25"/>
                <path d="M32.96,5.24l47.5,51.9c1.61,1.76,4.55,0.62,4.55-1.77V7.09c0-2.12-2.39-3.36-4.13-2.14L64.25,17.21"/>
            </svg>
        </a>
      </div>
      <p className="intro">
        About
      </p>
      <p className="links">
        I’m a design leader with over 22 years of experience who’s spent 15+ years building and transforming diverse design teams. I live for the challenge of making digital experiences not just usable but exceptional, both visually and functionally. Based in Melbourne/Narrm, I thrive on finding that sweet spot where design meets accessibility and usability—without sacrificing a single pixel of visual quality.
      </p>
      <p className="links">
        I’ve been known to be the spanner in the works—the one who isn’t afraid to shake things up when it feels like everything’s getting too comfortable. I’ve built design practices from the ground up, shaped digital brands, and had my hands in just about every aspect of design you can imagine. And yes, I bring a bit of that start-up mentality everywhere I go because the best solutions usually come from a bit of disruption.
      </p>
      <p className="links">
        Diversity and accessibility aren’t just buzzwords for me; they’re non-negotiables. I’m all about creating products that everyone can use, understand, and enjoy—whether that means meticulously refining micro-interactions or blowing up a design system that just doesn’t fit.
      </p>
      <p className="links">
        So, if you’re after someone who will challenge the norm, push for the best possible design, and maybe stir the pot a little along the way, <a href="mailto:post@andreasweis.com?subject=👋" aria-label="Write me an email">let's chat</a>.
      </p>

      {/* <PortfolioLinks /> */}

      <AnimatedCursor
        innerSize={44}
        outerSize={0}
        innerScale={0.2}
        outerScale={1}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--bodyColor)'
        }}
      />
    </div>
  )
}

export function Head() {
  return (
      <>
          <meta charSet="utf-8" />
          <title>Andreas Weis | Product Design Leadership</title>
          <meta name="description" content="Design leader with 22+ years experience as a multidisciplinary designer and 15+ years leading diverse design teams"/>
          <link rel="canonical" href="https://andreasweis.com" />
          <link rel="stylesheet" href="https://use.typekit.net/ztd8wlb.css"></link>
          <html lang="en" />
      </>
  )
}
