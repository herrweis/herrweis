import React from "react"
import Head from 'next/head'
import { Parallax } from 'react-scroll-parallax';
import Logo from "../../components/Logo"
import VideoComponent from "../../components/VideoComponent"

import Image from 'next/image'

import ImageHeaderPoster from "../../../public/images/fieldnotes/shallow/header_poster.jpg"
import ImageGradientPoster from "../../../public/images/fieldnotes/shallow/gradient_poster.jpg"
import ImageGradientBackground from "../../../public/images/fieldnotes/shallow/gradient.svg"


export default function Page() {

  return (
    <main className="fieldnote shallow">
        <Head>
            <title>We are drowning in the shallow end</title>
            <meta name="description" content=""/>
            <meta name="og:description" content=""/>
            <meta property="og:image" content="" />
            <meta property="og:image:width" content="1980" />
            <meta property="og:image:height" content="1080" />
        </Head>
        <div className="work-navigation">
           <Logo />
           <div className="reading-time">~8 minute read</div>
        </div>
        <article>
          <section className="intro">
              <div className="video-container">
                <VideoComponent src="../images/fieldnotes/shallow/header.mp4" poster={ImageHeaderPoster.src} />
                <div className="h1-container">
                  <Parallax translateY={[-60, 60]}>
                    <h1><span>We are drowning in the shallow end</span></h1>
                  </Parallax>
                </div>
              </div>
              <div className="header-content text-content">
                  <p><strong>Apple</strong> just spent their biggest design keynote in years showing off liquid glass, a visual effect that makes interfaces harder to read because it looks impressive in screenshots. And no, this is not another rant about Apple&apos;s new UI. This is about why we are abandoning depth.</p>
              </div>
              <svg style={{display: "none"}}>
                <defs>
                    <filter id="filter" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />

                    <feComponentTransfer in="turbulence" result="mapped">
                      <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                      <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                      <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                    </feComponentTransfer>

                    <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

                    <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lighting-color="white" result="specLight">
                      <fePointLight x="-200" y="-200" z="300" />
                    </feSpecularLighting>

                    <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />

                    <feDisplacementMap in="SourceGraphic" in2="softMap" scale="150" xChannelSelector="R" yChannelSelector="G" />
                    <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="displacementMap" edgeMode="none" result="blur" />
                  </filter>
                </defs>
              </svg>
          </section>
          <section className="text-content body-copy">
            <p>Ship faster. Add AI to everything. Be the first mover. Make it look nice enough.</p>
            <p>Everywhere you look the same pattern repeats. Production gets pushed back to sweatshops even though we know it fails long term. Companies lean on language models to replace human expertise because the output is immediate, even when it is shallow. Public discourse collapses into tribal noise because we have gamified outrage, and slow, careful conversation does not trend.</p>
            <p>The shallow end always promises to be easier, faster, more profitable. It looks safe because you can touch the bottom. But touching the bottom is not swimming. Most of the time you are just flailing your arms while leadership cheers you on because you are moving, and movement looks productive in quarterly reports.</p>
            <p>I have seen the shallow end up close. At a company building an AI scribe for doctors, everyone knew clinicians needed a way to refine their notes with AI. That was never the question. But instead of designing for that flow, the team bolted an “AI edit” button onto the page as the fastest solution to ship. They even gave it a glowing animated border to draw attention, which suggested they suspected it might be hard to find. But when the fundamental issue is that users don't understand what a feature does, making it glow doesn't solve the problem. No one used it because no one knew what was behind it. The shallow solution was fast to ship, impossible to use.</p>
            <p>Later, we removed the button and placed the input field directly beneath the generated documentation. It was obvious now. Users did not need to interpret a new control. They simply carried on with their work and discovered the system was smarter. Usage jumped 250 percent overnight. Same AI. Same power. But one version was fast shipping, the other was design that thought through the actual problem.</p>
          </section>

          <div className="gradient-background" style={{ backgroundImage: `url(${ImageGradientBackground.src})` }}>
            <section className="text-content body-copy">
              <h2>The system rewards broken work</h2>
              <p>This is the pattern everywhere. Executives who chase headlines instead of usability are complicit in sinking design quality. Investors who demand speed above all else are underwriting products that collapse under their own debt. Designers who decorate instead of question are not neutral either. Leadership that rewards screenshots gets exactly what it pays for: screenshots. If you want proof, just look at the design awards circuit: trophies handed out for the shiniest screenshot, no evidence that anyone actually wanted to use the thing.</p>
              <p>The first pull toward shallow is economic pressure. Quarterly growth, investor demands, the endless pressure to show returns. Depth is punished because it takes time and costs money. Why build something that lasts when you can squeeze more out today and let someone else deal with the damage tomorrow. The system rewards extraction, speed, and spectacle, and punishes anything that requires patience. That is how Boeing justified bolting new software onto an old airframe instead of retraining pilots. It saved costs, it looked great in the budget, and it killed 346 people.</p>
              <Parallax translateY={['-150px', '100px']}>
                <blockquote>
                  <h3>Keep winning</h3>
                  <p>How do you want to proceed?</p>
                  <div className="options">
                    <div className="secondary">Quick</div>
                    <div className="primary">Easy</div>
                  </div>
                </blockquote>
              </Parallax>
              <p>The second is cultural conditioning. We have been trained to crave shallow even when no one is forcing it on us. TikTok loops, fast food, fast fashion, advertising that tells us quick is good and easy is better. Deep work feels like punishment when everything around you screams for five second attention spans. Why wrestle with complexity when you can take the shortcut and get the dopamine reward immediately.</p>
              <p>The real problem is how these forces feed each other. The system makes shallow the rational business choice. Culture makes shallow feel good. Together they drag us down until shallow becomes the default setting for everything. Which is how we end up with Apple shipping liquid glass, a feature that creates buzz for investors and screenshots for marketing, but no clarity for the people holding the phone. Or with doctors staring at an animated “AI edit” button they do not understand, while the feature they actually need sits hidden behind it.</p>
              <p>Every shortcut is a loan and the debt always comes due. In design that debt looks like apps that impress in a keynote but frustrate users in daily life. In society it looks like institutions so hollowed out by short term thinking that trust collapses. In work it looks like the death of craft, people asked to move faster and cheaper until the pride is gone and the work is meaningless.</p>
            </section>
            <section className="text-content body-copy">
              <h2>The shallow end feels safe</h2>
              <p>You can touch the bottom in the shallow end, but stay there too long and you discover you are not swimming, you are thrashing. And thrashing is not survival, it is surrender.</p>
              <p>But shallow is not inevitable. I once met founders who had built compliance software without a designer. It was a mess: too many features, nobody could figure out how to use it. They brought in a contractor designer who stripped it back to something workable. It was the first glimpse of what real design could do. But instead of seeing it as a foundation, they treated it like a patch. They came to me next, looking for someone to ‘finish up’ the polish work.</p>
              <p>I told them their whole approach was backwards. They didn't need a contractor to make their broken product look prettier. They needed a senior designer as a founding team member, someone who could prevent them from building the wrong thing in the first place. I helped them find their first Head of Design, and they changed their entire hiring strategy that day. Six weeks later, they told me it was the conversation that shifted how they thought about their product, because it taught them that design wasn't decoration. It was how you avoid building products that nobody wants to use.</p>
            </section>
          </div>
          <section className="video-gradient">
              <VideoComponent src="../images/fieldnotes/shallow/gradient.mp4" poster={ImageGradientPoster.src} />
          </section>
          <div className="bottom-gradient">
            <section className="text-content body-copy">
              <div className="h2-container">
                <Parallax translateY={[-150, 40]}>
                  <h2>Depth is the speed that lasts</h2>
                </Parallax>
              </div>
              <p>The truth is, drowning in the shallow end is optional. You can stand up. You can walk out into deeper water where there is room to swim, to build, to do work that matters.</p>
              <p>To the designers: You must never forget what we have learned about usability over the last twenty years. Readability, contrast, hierarchy, feedback, flow. These are not negotiable. They are oxygen. Once the foundation is solid, then make it shine. Push for bold visuals, create moments of awe, invent the thing no one has seen before. People crave that because too much UX has become boilerplate, every product looking like it came straight from Untitled UI. I understand why Apple wanted to move past that. But shine without usability is shallow. The real challenge is to fuse both, to take everything we know about usability and build something extraordinary on top of it.</p>
              <p>To the leaders: Shape the incentives. Stop mistaking screenshots for success. Stop celebrating motion as progress. Reward the products that people actually love living with. Set goals that measure clarity, trust, and usability rather than empty speed.</p>
              <p>To the teams: Protect time for experiments. Track shortcuts as debt and repay them before they bury you. Depth comes from discipline, not luck.</p>
              <p>When the neo-bank wave kicked off, it felt like a gold rush. Competitors were racing to get products out and piling on features. At Up, we took a different approach. We invested in quality, the system, the craft, the clarity of the experience. That foundation gave us the ability to ship to production five times a day.</p>
              <p>Most of the competition that started with us disappeared. Up is still here because we chose quality and depth over shipping the most features first.</p>
              <p>Depth did not slow us down. It is what made sustainable speed possible.</p>
              <p>I wonder what Dieter thinks about Liquid Glass.</p>
            </section>
          </div>
        </article>
    </main>
  )
}