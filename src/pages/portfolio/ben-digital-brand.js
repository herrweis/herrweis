import React from "react"
import { Link } from "gatsby"
import PortfolioLinks from "../../components/PortfolioLinks"
import AnimatedCursor from "react-animated-cursor"
import { isMobile } from "react-device-detect";

import ImageInvestorDay from "../../images/brand/investor_day.jpg"
import Mockup from "../../images/brand/mockup.jpg"
import InvestorPreso from "../../images/brand/investor-preso.jpg"


export default function Page() {
  return (
    <div className="work">
        <div className="work-navigation">
            <div className="logoWrapper">
                <Link to="/">
                    <svg ariaLabelledby="description" className="logo" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 70" xmlSpace="preserve">
                        <description>Logo of andreasweis.com. Two lines mimmicking an infinity symbol that it broken up in the middle.</description>
                        <path d="M55.42,56.15L8.83,5.32C7.21,3.56,4.28,4.71,4.28,7.09v48.29c0,2.12,2.39,3.36,4.13,2.14l16.63-12.25"/>
                        <path d="M32.96,5.24l47.5,51.9c1.61,1.76,4.55,0.62,4.55-1.77V7.09c0-2.12-2.39-3.36-4.13-2.14L64.25,17.21"/>
                    </svg>
                </Link>
            </div>
            {/* <div className="work-navigation-links">
                <Link to="/portfolio/product-strategy" className="next">Next</Link>
            </div> */}
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
            <img src={ImageInvestorDay} alt="Bendigo Bank's executive suite at Investor Day 2024" />
        </div>

        <div className="work-text padding-bottom">
            <p>For Bendigo and Adelaide Bank’s high-profile Investor Day 2024, we took advantage of the event’s significance to experiment with the brand’s digital expression. The presentation served as an ideal platform to explore new design elements and layouts, bringing a modern twist to the bank’s visual identity without altering its established tone. While the bank was sharing its strategic vision with investors and analysts, we subtly introduced fresh arrangements of the existing brand assets, including colour use, typography, and spacing. This allowed us to refresh the brand’s digital presence while ensuring its core message and voice remained intact. The approach was both innovative and respectful of the brand’s trusted reputation, resonating well with stakeholders while maintaining a consistent narrative.</p>
        </div>

        <div className="media-full-width">
            <img src={Mockup} alt="Three presentation pages falling from the ceiling" />
        </div>

        <div className="work-text padding-top-bottom-large">
            <p>The presentation at Bendigo and Adelaide Bank’s Investor Day 2024 was a resounding success. One immediate outcome was the rework of internal presentation templates, aligning them with the refreshed visual direction. More significantly, the event fostered a deeper understanding of the critical role design plays across the organisation. This experience emphasized the value of a professional design mindset, with design-led thinking becoming increasingly integrated into the bank’s processes.</p>
        </div>

        <div className="media-full-width">
            <img src={InvestorPreso} alt="Presentation page" />
        </div>
            
        <div className="work-text-large">
            <p>The success of this initiative helped to cement the importance of design as a key driver of innovation and clarity within the organisation, shaping the way it approaches both internal and external communications.</p>
            <p>♥</p>
        </div>
        
        <PortfolioLinks />
            
            
        
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
          <title>Andreas Weis | Pushing a valuable brand digitally</title>
          <meta name="description" content="Reimagining Bendigo Bank’s brand digitally involved taking the well-established brand elements and translating them into a modern, digital context."/>
          <link rel="canonical" href="https://andreasweis.com" />
          <link rel="stylesheet" href="https://use.typekit.net/ztd8wlb.css"></link>
          <html lang="en" />
      </>
  )
}
