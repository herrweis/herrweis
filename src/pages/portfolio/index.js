import React from "react"
import AnimatedCursor from "react-animated-cursor"

export default function Page() {
  return (
    <div className="portfolio">
      <h1>Andreas Weis</h1>
      <div className="logoWrapper">
         <a href="/portfolio">
            <svg ariaLabelledby="description" className="logo" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 70" xmlSpace="preserve">
                <description>Logo of andreasweis.com. Two lines mimmicking an infinity symbol that it broken up in the middle.</description>
                <path d="M55.42,56.15L8.83,5.32C7.21,3.56,4.28,4.71,4.28,7.09v48.29c0,2.12,2.39,3.36,4.13,2.14l16.63-12.25"/>
                <path d="M32.96,5.24l47.5,51.9c1.61,1.76,4.55,0.62,4.55-1.77V7.09c0-2.12-2.39-3.36-4.13-2.14L64.25,17.21"/>
            </svg>
        </a>
      </div>
      <p className="intro">
        Experienced design leader with 15+ years creating and leading diverse teams, and 22+ years as a multidisciplinary designer; based in Melbourne/Narrm; making the uncomfortable comfortable.
      </p>
      <p className="links">
        I have worked with <a className="custom" href="//bendigobank.com.au" aria-label="Go to Bendigo Bank's website">Bendigo Bank</a>, <a href="//ferocia.com.au" aria-label="Go to Ferocia's website">Ferocia</a>, <a href="//up.com.au" aria-label="Go to Up's website">Up</a>, <a href="//unimelb.edu.au" aria-label="Go to University of Melbourne's website">University of Melbourne</a>, and other awesome places. <a href="//www.linkedin.com/pub/andreas-weis/15/4a1/b11/en" aria-label="Connect with me on LinkedIn">Find me on LinkedIn</a> or <a href="mailto:post@andreasweis.com?subject=👋" aria-label="Write me an email">write me an email</a>.
      </p>
      <nav className="other-work">
          <ul>
              <li>
                  <a href="ben-internet-banking">Evolving Bendigo Bank’s internet banking app</a>
              </li>
              <li>
                  <a href="#">Creating a navigation for a new bank</a>
              </li>
              <li>
                  <a href="#">Pushing a valuable brand digitally</a>
              </li>
              <li>
                  <a href="#">Product strategy and a roadmap for internet banking</a>
              </li>
              <li>
                  <a href="#">Strategy and implementation of a Digital Design Practice</a>
              </li>
          </ul>
      </nav>
      
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
          <title>Andreas Weis | Portfolio | Product Design Leadership</title>
          <meta name="description" content="Design leader with 22+ years experience as a multidisciplinary designer and 15+ years leading diverse design teams"/>
          <link rel="canonical" href="https://andreasweis.com" />
          <link rel="stylesheet" href="https://use.typekit.net/ztd8wlb.css"></link>
          <html lang="en" />
      </>
  )
}
