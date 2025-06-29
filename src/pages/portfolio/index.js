import React from "react"
import Head from 'next/head'
// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Logo from "../../components/Logo"
import PortfolioLinks from "../../components/PortfolioLinks"
import About from "../../components/About"
import Intro from "../../components/Intro"
import IntroLinks from "../../components/IntroLinks"

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
        </TabList>
        <TabPanel>
          <PortfolioLinks />
        </TabPanel>
        <TabPanel>
          <About />
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