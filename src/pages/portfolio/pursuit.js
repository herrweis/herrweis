import React from "react"
import { Link } from "gatsby"
import PortfolioLinks from "../../components/PortfolioLinks"
import AnimatedCursor from "react-animated-cursor"


import ImageHeader from "../../images/pursuit/02-header.jpg"
import ImagePhone from "../../images/pursuit/Phone Picture.jpg"
import ImageWall from "../../images/pursuit/The Wall.gif"


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
            <div className="work-navigation-links">
                <Link to="/portfolio/unimelb-design" className="next">Next</Link>
            </div>
        </div>

        <div className="work-text-large">
            <p>Collating & promoting the research discoveries and public engagement activities from Australia's most prestigious university.</p>
        </div>

        <div className="work-meta">
            <div className="work-meta-element">
                <div className="work-meta-element-title">Role</div>
                <div className="work-meta-element-content">Product Design</div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Year</div>
                <div className="work-meta-element-content">2017</div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Team</div>
                <div className="work-meta-element-content">Ferocia/Up</div>
            </div>
        </div>

        <div className="media-full-width">
            <img src={ImageHeader} alt="Mockup of the website" />
        </div>

        <div className="work-text padding-top-bottom">
            <p>Together with Web Marketing Director Paul tagell we invented, prototyped and pitched a new digital publishing platform for the University on which it could increase its engagement with the public. The strength of my prototype meant that we were given a significant development budget and a mandate to build a platform on behalf of and for the entire university.</p>
        </div>

        <div className="media-full-width">
            <img src={ImagePhone} alt="Mockup of the website on a mobile phone" />
        </div>

        <div className="work-text padding-top-bottom">
            <p>After the endorsement from chancellery we successfully designed and build Pursuit by shipping a minimum feature set and continuously improving the platform based on regular user testing.</p>
        </div>

        <div className="media-full-width">
            <img src={ImageWall} alt="animation of several stages of user testing" />
            <p className="overlap">We user tested the prototypes continuously in the Alpha stage already against real users to identify areas for improvement pre-development</p>
        </div>

        <div className="work-text-large padding-top">
            <p>Pursuit is now (*2015 at the time) one of the University’s most successful web properties, delivering over 2.2 million article views to over 725,000 unique visitors in the 6 months since it launched.</p>
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
          <title>Andreas Weis | Portfolio | Product Design Leadership</title>
          <meta name="description" content="Design leader with 22+ years experience as a multidisciplinary designer and 15+ years leading diverse design teams"/>
          <link rel="canonical" href="https://andreasweis.com" />
          <link rel="stylesheet" href="https://use.typekit.net/ztd8wlb.css"></link>
          <html lang="en" />
      </>
  )
}
