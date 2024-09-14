import React from "react"
import { Link } from "gatsby"
import VideoComponent from "../../components/VideoComponent"
import PortfolioLinks from "../../components/PortfolioLinks"
import AnimatedCursor from "react-animated-cursor"


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
                <Link to="/portfolio/design-practice" className="next">Next</Link>
            </div>
        </div>

        <div className="work-text-large">
            <p>A digital design system and living styleguide for The University of Melbourne to help people around the University to plan, design and build web sites and web applications consistently across the unimelb domain in the pursuit of improved usability and to a strong digital brand.</p>
        </div>

        <div className="work-meta">
            <div className="work-meta-element">
                <div className="work-meta-element-title">Role</div>
                <div className="work-meta-element-content">
                    Digital Design<br/>
                    Creative Direction
                </div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Year</div>
                <div className="work-meta-element-content">2013</div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Team</div>
                <div className="work-meta-element-content">Unimelb Digtal Marketing</div>
            </div>
        </div>

        <div className="work-text">
            <p>The University of Melbourne has a large and sprawling web presence consisting of over 1000 websites and more than 2 million pages spread across a number of largely autonomous business units.</p>
            <p>Websites were hosted across a wide variety of CMS platforms. Each was designed and developed by a different set of designers and developers - often at great expense and of variable quality.</p>
            <p>There was almost no way to ensure that we provided a consistency of such a valuable brand, usability, navigation, accessibility or tag management across such a large web presence.</p>
        </div>

        <div className="work-text padding-top-bottom-large">
            <p>Video of navigation</p>
        </div>

        <div className="work-text padding-top-bottom-large">
            <p>Video of Higgsy signing up</p>
        </div>

        <div className="work-text-large padding-top">
            <p>WIP</p>
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
