import React from "react"
import Head from 'next/head'
import Logo from "../../components/Logo"
import PortfolioLinks from "../../components/PortfolioLinks"
// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";

import Image from 'next/image'

import Image01Cover from "../../../public/images/strategy/01_cover.jpg"
import Image02Intro from "../../../public/images/strategy/02_intro.jpg"
import Image03Vision from "../../../public/images/strategy/03_vision.jpg"
import Image04Scope from "../../../public/images/strategy/04_scope.jpg"
import Image05Impression from "../../../public/images/strategy/05_impression.jpg"


export default function Page() {
  return (
    <div className="work">
        <Head>
            <title>Andreas Weis | Strategy and implementation of a Digital Design Practice</title>
            <meta name="description" content="My strategy and implementation plan for the new Digital Design Practice focused on introducing start-up culture into one of Australia&apos;s most trusted financial brands."/>
        </Head>
        <div className="work-navigation">
            <Logo />
        </div>

        <div className="work-text-large">
            <p>My strategy and implementation plan for the new Digital Design Practice focused on introducing start-up culture into one of Australia&apos;s most trusted financial brands.</p>
            <p>And took into account that Bendigo Bank never had a design practice before.</p>
        </div>

        <div className="work-meta">
            <div className="work-meta-element">
                <div className="work-meta-element-title">Role</div>
                <div className="work-meta-element-content">
                    Leadership<br/>
                    Management<br/>
                    Creative direction
                </div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Year</div>
                <div className="work-meta-element-content">2023</div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Team</div>
                <div className="work-meta-element-content">Bendigo Bank Digital Design</div>
            </div>
        </div>

        <div className="work-text">
            <p>Outlining a framework for governing digital design across the entire organisation, the strategy included steps to socialize the practice, educate teams, and promote design-led thinking at all levels. It also focused on creating clear career paths and ladders while fostering a strong design community. My plan emphasized collaboration, innovation, and consistency, transforming how the organisation approached digital experiences.</p>
        </div>

        <div className="media-full-width">
            <Image src={Image01Cover} alt="Strategy brochure cover" />
        </div>
        <div className="media-full-width">
            <Image src={Image02Intro} alt="Strategy brochure intro" />
        </div>
        <div className="media-full-width">
            <Image src={Image03Vision} alt="Strategy vision " />
        </div>
        <div className="media-full-width">
            <Image src={Image04Scope} alt="Strategy scope " />
        </div>
        <div className="media-full-width">
            <Image src={Image05Impression} alt="Strategy brochure " />
        </div>

        <div className="work-text padding-top">
            <p>Within just a year, the new Digital Design Practice proved highly successful and began to scale. Through design experiments and effective stakeholder management, the practice fostered a deeper understanding of the importance of design across the organisation. The team&apos;s work broke down silos between divisions, simplifying complex user needs and business requirements into clear, usable product prototypes. This approach enhanced communication, collaboration, and reinforced the value of a professional design mindset, with design-led thinking becoming increasingly integrated across the organisation.</p>
        </div>

        <div className="work-text-large">
            <p>♥</p>
        </div>
            
        
        <PortfolioLinks />
            
            
        
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