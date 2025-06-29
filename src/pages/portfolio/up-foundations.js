import React from "react"
import Head from 'next/head'

import Logo from "../../components/Logo"
import VideoComponent from "../../components/VideoComponent"
import PortfolioLinks from "../../components/PortfolioLinks"
// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";

import SignupPoster from "../../../public/images/videos/up/signup.jpg"
import NavigationPoster from "../../../public/images/videos/up/navigation.jpg"


export default function Page() {
  return (
    <div className="work">
        <Head>
            <title>Andreas Weis | Foundations for a new digital bank</title>
          <meta name="description" content="At Up, we embraced a clean slate approach to challenge traditional banking interfaces, questioning conventional patterns and reimagining key interactions to lay the foundations for a new digital bank."/>
        </Head>
        <div className="work-navigation">
            <Logo />
        </div>

        <div className="work-text-large">
            <p>Up&apos;s mission to reinvent banking has always begun by questioning conventional patterns and embracing new ideas. With a clean slate, we had the freedom to innovate, reimagining key interactions and challenging assumptions about how banking interfaces should look and behave.</p>
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

        <div className="work-text">
            <p>This was a fantastic opportunity to explore entirely new pathways for how a banking app could function if we were to start from scratch. As one of the first product designers on the project, I was able to help break away from traditional approaches and contribute to an experience that was more intuitive, streamlined, and user-focused. This foundational work established several key patterns, many of which are still in use today, shaping the core of how users interact with the app.</p>
        </div>

        <div className="media-full-width padding-bottom">
            <VideoComponent src="/images/videos/up/navigation.mp4" poster={NavigationPoster.src} />
            <p className="overlap">Up&apos;s navigation moves away from the conventional bottom drawer layout, offering a more fluid, gesture-based approach. Users can swipe to move between different sections, making the app easy to use and efficient. The navigation labels are integrated into the page titles, keeping the interface clean and saving screen space. With no cumbersome screen transitions or loading delays, the app offers a smooth and seamless experience, allowing users to manage their finances effortlessly while maximizing screen usability.</p>
        </div>

        <div className="media-full-width">
            <VideoComponent src="/images/videos/up/signup.mp4" poster={SignupPoster.src} />
            <p className="overlap">↑ Realtime onboarding of customer number 17</p>
        </div>

        <div className="work-text">
            <p>We were the first bank in Australia to introduce a fully digital sign-up process, setting a new benchmark for the industry. This process allows customers to complete their sign-up in under two minutes and instantly access a digital card. Praised for its ease and speed, our innovation has been recognized as one of the fastest in the market, with real-time notifications and immediate usability making it a standout feature. This seamless onboarding has redefined convenience in digital banking, positioning Up as a leader and setting the standard for others to follow.</p>
        </div>

        <div className="work-text-large padding-top">
            <p>Up has instantly become a standout in the digital banking space, known for its customer-centric approach and fresh and unconventional take on traditional banking services.</p>
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