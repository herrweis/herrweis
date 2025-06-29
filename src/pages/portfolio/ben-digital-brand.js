import React from "react"
import Head from 'next/head'
import Logo from "../../components/Logo"
import PortfolioLinks from "../../components/PortfolioLinks"
// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";

import Image from 'next/image'
import ImageInvestorDay from "../../../public/images/brand/investor_day.jpg"
import Mockup from "../../../public/images/brand/mockup.jpg"
import InvestorPreso from "../../../public/images/brand/investor-preso.jpg"


export default function Page() {
  return (
    <div className="work">
        <Head>
            <title>Andreas Weis | Pushing a valuable brand digitally</title>
          <meta name="description" content="Reimagining Bendigo Bank&apos;s brand digitally involved taking the well-established brand elements and translating them into a modern, digital context."/>
        </Head>
        <div className="work-navigation">
            <Logo />
        </div>

        <div className="work-text-large">
            <p>Using a highly visible event for the bank, we began to elevate the brand digitally and explore its full potential. We reimagined the existing brand elements, keeping the same colours and fonts while applying them in a different context, and also experimenting with new layouts, spacing, and simplification.</p>
        </div>

        <div className="work-meta">
            <div className="work-meta-element">
                <div className="work-meta-element-title">Role</div>
                <div className="work-meta-element-content">
                    Brand design<br/>
                    Art direction
                </div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Year</div>
                <div className="work-meta-element-content">2024</div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Team</div>
                <div className="work-meta-element-content">Bendigo Digital Design</div>
            </div>
        </div>

        <div className="media-full-width">
            <Image src={ImageInvestorDay} alt="Bendigo Bank&apos;s executive suite at Investor Day 2024" />
        </div>

        <div className="work-text padding-bottom">
            <p>For Bendigo and Adelaide Bank&apos;s high-profile Investor Day 2024, we took advantage of the event&apos;s significance to experiment with the brand&apos;s digital expression. The presentation served as an ideal platform to explore new design elements and layouts, bringing a modern twist to the bank&apos;s visual identity without altering its established tone. While the bank was sharing its strategic vision with investors and analysts, we subtly introduced fresh arrangements of the existing brand assets, including colour use, typography, and spacing. This allowed us to refresh the brand&apos;s digital presence while ensuring its core message and voice remained intact. The approach was both innovative and respectful of the brand&apos;s trusted reputation, resonating well with stakeholders while maintaining a consistent narrative.</p>
        </div>

        <div className="media-full-width">
            <Image src={Mockup} alt="Three presentation pages falling from the ceiling" />
        </div>

        <div className="work-text padding-top-bottom-large">
            <p>The presentation at Bendigo and Adelaide Bank&apos;s Investor Day 2024 was a resounding success. One immediate outcome was the rework of internal presentation templates, aligning them with the refreshed visual direction. More significantly, the event fostered a deeper understanding of the critical role design plays across the organisation. This experience emphasized the value of a professional design mindset, with design-led thinking becoming increasingly integrated into the bank&apos;s processes.</p>
        </div>

        <div className="media-full-width">
            <Image src={InvestorPreso} alt="Presentation page" />
        </div>
            
        <div className="work-text-large">
            <p>The success of this initiative helped to cement the importance of design as a key driver of innovation and clarity within the organisation, shaping the way it approaches both internal and external communications.</p>
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