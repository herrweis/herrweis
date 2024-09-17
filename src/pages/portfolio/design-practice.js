import React from "react"
import { Link } from "gatsby"
import PortfolioLinks from "../../components/PortfolioLinks"
import AnimatedCursor from "react-animated-cursor"

import Image01Cover from "../../images/strategy/01_cover.jpg"
import Image02Intro from "../../images/strategy/02_intro.jpg"
import Image03Vision from "../../images/strategy/03_vision.jpg"
import Image04Scope from "../../images/strategy/04_scope.jpg"
import Image05Impression from "../../images/strategy/05_impression.jpg"


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
                <Link to="/portfolio/ben-internet-banking" className="next">Next</Link>
            </div> */}
        </div>

        <div className="work-text-large">
            <p>My strategy and implementation plan for the new Digital Design Practice focused on introducing start-up culture into one of Australia’s most trusted financial brands.</p>
            <p>And took into account that Bendigo Bank never had a design practice before.</p>
        </div>

        <div className="work-meta">
            <div className="work-meta-element">
                <div className="work-meta-element-title">Role</div>
                <div className="work-meta-element-content">
                    Leadership<br/>
                    Creative direction<br/>
                    Design management
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
            <img src={Image01Cover} alt="Strategy brochure cover" />
        </div>
        <div className="media-full-width">
            <img src={Image02Intro} alt="Strategy brochure intro" />
        </div>
        <div className="media-full-width">
            <img src={Image03Vision} alt="Strategy vision " />
        </div>
        <div className="media-full-width">
            <img src={Image04Scope} alt="Strategy scope " />
        </div>
        <div className="media-full-width">
            <img src={Image05Impression} alt="Strategy brochure " />
        </div>

        <div className="work-text padding-top">
            <p>Within just a year, the new Digital Design Practice proved highly successful and began to scale. Through design experiments and effective stakeholder management, the practice fostered a deeper understanding of the importance of design across the organisation. The team’s work broke down silos between divisions, simplifying complex user needs and business requirements into clear, usable product prototypes. This approach enhanced communication, collaboration, and reinforced the value of a professional design mindset, with design-led thinking becoming increasingly integrated across the organisation.</p>
        </div>

        <div className="work-text-large">
            <p>♥</p>
        </div>
            
        
        <PortfolioLinks />
            
            
        
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
          <title>Andreas Weis | Strategy and implementation of a Digital Design Practice</title>
          <meta name="description" content="My strategy and implementation plan for the new Digital Design Practice focused on introducing start-up culture into one of Australia’s most trusted financial brands."/>
          <link rel="canonical" href="https://andreasweis.com" />
          <link rel="stylesheet" href="https://use.typekit.net/ztd8wlb.css"></link>
          <html lang="en" />
      </>
  )
}
