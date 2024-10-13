import React from "react"
import AnimatedCursor from "react-animated-cursor"
import { isMobile } from "react-device-detect";
import Intro from "../components/Intro"
import IntroLinks from "../components/IntroLinks"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import About from "../components/About"
import Expertise from "../components/Expertise"
import PortfolioLinks from "../components/PortfolioLinks"

// import setBodyColors from "../components/setBodyColors"
// import Humanize from "../components/humanize"
// let getAJobText = "I have been designing and developing digital and physical things for over <Humanize number={(new Date().getFullYear() - 2002)} /> years."

// setBodyColors();

export default function Page() {
  return (
    <div className="portfolio">
    <h1>Andreas Weis</h1>
    <div className="logoWrapper">
       <a href="/portfolio" aria-label="Home">
          <svg ariaLabelledby="description" className="logo" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 70" xmlSpace="preserve">
              <description>Logo of andreasweis.com. Two lines mimmicking an infinity symbol that it broken up in the middle.</description>
              <path d="M55.42,56.15L8.83,5.32C7.21,3.56,4.28,4.71,4.28,7.09v48.29c0,2.12,2.39,3.36,4.13,2.14l16.63-12.25"/>
              <path d="M32.96,5.24l47.5,51.9c1.61,1.76,4.55,0.62,4.55-1.77V7.09c0-2.12-2.39-3.36-4.13-2.14L64.25,17.21"/>
          </svg>
      </a>
    </div>
    
    <Intro />
    <IntroLinks />
    <Tabs>
      <TabList>
        <Tab>Work</Tab>
        <Tab>About</Tab>
        <Tab>Expertise</Tab>
      </TabList>
      <TabPanel>
        <PortfolioLinks />
      </TabPanel>
      <TabPanel>
        <About />
      </TabPanel>
      <TabPanel>
        <Expertise />
      </TabPanel>
    </Tabs>

    {isMobile ? null : <AnimatedCursor
      innerSize={44}
      outerSize={0}
      innerScale={0.2}
      outerScale={1}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: 'var(--bodyColor)'
      }}
    />}
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
