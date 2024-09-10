import React from "react"

import VideoComponent from "../../components/VideoComponent"

import AnimatedCursor from "react-animated-cursor"
import VideoPoster from "../../videos/ben/poster.mp4"
import PosterPoster from "../../videos/ben/poster.jpg"
import VideoBalance from "../../videos/ben/balance.mp4"
import BalancePoster from "../../videos/ben/balance.jpg"
import VideoEvolution from "../../videos/ben/evolution.mp4"
import EvolutionPoster from "../../videos/ben/evolution.jpg"
import VideoSignup from "../../videos/ben/signup.mp4"
import SignupPoster from "../../videos/ben/signup.jpg"
import VideoLogoLoading from "../../videos/ben/logoLoading.mp4"
import ImageAppScreens from "../../images/ben/appScreens.jpg"
import ImageBigBang from "../../images/ben/bigBang.jpg"
import ImageIconBar from "../../images/ben/iconBar.png"


export default function Page() {
  return (
    <div className="work">
        <div className="work-navigation">
            <div className="logoWrapper">
                <a href="/portfolio">
                    <svg ariaLabelledby="description" className="logo" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 70" xmlSpace="preserve">
                        <description>Logo of andreasweis.com. Two lines mimmicking an infinity symbol that it broken up in the middle.</description>
                        <path d="M55.42,56.15L8.83,5.32C7.21,3.56,4.28,4.71,4.28,7.09v48.29c0,2.12,2.39,3.36,4.13,2.14l16.63-12.25"/>
                        <path d="M32.96,5.24l47.5,51.9c1.61,1.76,4.55,0.62,4.55-1.77V7.09c0-2.12-2.39-3.36-4.13-2.14L64.25,17.21"/>
                    </svg>
                </a>
            </div>
            <div className="work-navigation-links">
                <a href="#" className="next">Next</a>
            </div>
        </div>

        <div className="work-text-large">
            <p>Evolving Bendigo Bank’s internet banking app was a lot about taking what worked for Up and tailoring it for Bendigo Bank’s unique (and very different to Up’s) customer base.</p>
            <p>Also to get rid of the 90s look.</p>
        </div>

        <div className="work-meta">
            <div className="work-meta-element">
                <div className="work-meta-element-title">Role</div>
                <div className="work-meta-element-content">
                    Product design (start)
                    <br/>
                    Art Direction (later stages)
                </div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Year</div>
                <div className="work-meta-element-content">2022</div>
            </div>
            <div className="work-meta-element">
                <div className="work-meta-element-title">Team</div>
                <div className="work-meta-element-content">Ferocia/Connect</div>
            </div>
        </div>

        <div className="media-full-width">
            <VideoComponent src={VideoPoster} poster={PosterPoster} />
        </div>
        <div className="media-full-width">
            <img src={ImageAppScreens} alt="Various Bendigo Internet Banking app screens" />
        </div>
        <div className="padding-top-bottom">
            <div className="two-cols-media-right">
                <div>
                    <p className="overlap overlap-right">Showing only one balance at a time makes it easier to understand your finances at a glance, while still letting customers choose which balance they prefer to view</p>
                </div>
                <div>
                    <VideoComponent src={VideoBalance} poster={BalancePoster} />
                </div>
            </div>
            <div className="media-full-width padding-top">
                <img src={ImageIconBar} alt="Various colourful icons" />
            </div>
        </div>
        <div className="media-full-width">
            <VideoComponent src={VideoSignup} poster={SignupPoster} />
            <p className="overlap overlap-top">Increasing new customer sign-ups by offering a fully digital, seamless experience that allows you to become a customer faster than ordering and drinking your flat white.</p>
        </div>
        <div className="media-15-width padding-top-bottom-large">
            <VideoComponent src={VideoLogoLoading} />
        </div>
        <div className="media-full-width">
            <img src={ImageBigBang} alt="Image of old and new app design" />
            <div className="padding-top-bottom">
                <p className="overlap">In anticipation of potential negative feedback, we planned to introduce the new design gradually to our change-resistant user base. Instead of a big bang rollout, we opted for implementing small, incremental updates over time, allowing users to adapt more comfortably and ensuring a smoother transition to the new design.</p>
                <p className="overlap">Evolution instead of revolution.</p>
            </div>
        </div>
        <div className="media-full-width">
            <VideoComponent src={VideoEvolution} poster={EvolutionPoster} />
        </div>
        <div className="work-text-large padding-top">
            <p>The new designs sparked a completely new app strategy, but due to technological limitations, building on the existing app wasn’t feasible. Instead, the designs now form the foundation for a brand-new app, currently in development, utilizing Up’s technology.</p>
            <p>♥</p>
        </div>
            
        <nav className="other-work with-padding">
            <ul>
                <li>
                    <a href="#">Evolving Bendigo Bank’s internet banking app</a>
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
