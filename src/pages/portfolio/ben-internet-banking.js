import React from "react"
import Head from 'next/head'
import Logo from "../../components/Logo"
import VideoComponent from "../../components/VideoComponent"
import PortfolioLinks from "../../components/PortfolioLinks"
// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";

import Image from 'next/image'

import PosterPoster from "../../../public/images/videos/ben/poster.jpg"
import BalancePoster from "../../../public/images/videos/ben/balance.jpg"
import EvolutionPoster from "../../../public/images/videos/ben/evolution.jpg"
import SignupPoster from "../../../public/images/videos/ben/signup.jpg"
import ImageAppScreens from "../../../public/images/ben/appScreens.jpg"
import ImageBigBang from "../../../public/images/ben/bigBang.jpg"
import ImageIconBar from "../../../public/images/ben/iconBar.png"


export default function Page() {
  return (
    <div className="work">
        <Head>
            <title>Andreas Weis | Evolving Bendigo Bank&apos;s internet banking app</title>
            <meta name="description" content="Evolving Bendigo Bank&apos;s internet banking app was a lot about taking what worked for Up and tailoring it for Bendigo Bank&apos;s unique (and very different to Up&apos;s) customer base."/>
        </Head>
        <div className="work-navigation">
           <Logo />
        </div>

        <div className="work-text-large">
            <p>Evolving Bendigo Bank&apos;s internet banking app was a lot about taking what worked for Up and tailoring it for Bendigo Bank&apos;s unique (and very different to Up&apos;s) customer base.</p>
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
            <VideoComponent src="/images/videos/ben/poster.mp4" poster={PosterPoster.src} />
        </div>
        <div className="media-full-width">
            <Image src={ImageAppScreens} alt="Various Bendigo Internet Banking app screens" />
        </div>
        <div className="padding-top-bottom">
            <div className="two-cols-media-right">
                <div>
                    <p className="overlap overlap-right">Showing only one balance at a time makes it easier to understand your finances at a glance, while still letting customers choose which balance they prefer to view</p>
                </div>
                <div>
                    <VideoComponent src="/images/videos/ben/balance.mp4" poster={BalancePoster.src} />
                </div>
            </div>
            <div className="media-full-width padding-top">
                <Image src={ImageIconBar} alt="Various colourful icons" />
            </div>
        </div>
        <div className="media-full-width">
            <VideoComponent src="/images/videos/ben/signup.mp4" poster={SignupPoster.src} />
            <p className="overlap">Increasing new customer sign-ups by offering a fully digital, seamless experience that allows you to become a customer faster than ordering and drinking your flat white.</p>
        </div>
        <div className="media-15-width padding-top-bottom-large">
            <VideoComponent src="/images/videos/ben/logoLoading.mp4" />
        </div>
        <div className="media-full-width">
            <Image src={ImageBigBang} alt="Comparison of old and new app design" width={"auto"}/>
            <div className="padding-top-bottom">
                <p className="overlap">In anticipation of potential negative feedback, we planned to introduce the new design gradually to our change-resistant user base. Instead of a big bang rollout, we opted for implementing small, incremental updates over time, allowing users to adapt more comfortably and ensuring a smoother transition to the new design.</p>
                <p className="overlap">Evolution instead of revolution.</p>
            </div>
        </div>
        <div className="media-full-width">
            <VideoComponent src="/images/videos/ben/evolution.mp4" poster={EvolutionPoster.src} />
        </div>
        <div className="work-text-large padding-top">
            <p>The new designs sparked a completely new app strategy, but due to technological limitations, building on the existing app wasn&apos;t feasible. Instead, the designs now form the foundation for a brand-new app, currently in development, utilizing Up&apos;s technology.</p>
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