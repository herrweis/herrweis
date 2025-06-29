import React from "react"
import Head from 'next/head'

import Logo from "../components/Logo"

// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";
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
      <Head>
          <title>Andreas Weis | Product Design Leadership</title>
          <meta name="description" content="Design leader with 23+ years experience as a multidisciplinary designer and 15+ years leading diverse design teams"/>
      </Head>
      <h1>Andreas Weis</h1>
      <Logo />
      
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

      {/* {isMobile ? null : <AnimatedCursor
        innerSize={44}
        outerSize={0}
        innerScale={0.2}
        outerScale={1}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--bodyColor)'
        }}
      />} */}
    </div>
  )
}