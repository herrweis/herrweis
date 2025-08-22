import React from "react"
import Head from 'next/head'
import Logo from "../../components/Logo"
import Image from 'next/image'

import ImageBets from "../../../public/images/fieldnotes/roi/bets.jpg"
import ImageHeader from "../../../public/images/fieldnotes/roi/header_background.jpg"
import ImageHuman from "../../../public/images/fieldnotes/roi/human.jpg"
import ImagePhone from "../../../public/images/fieldnotes/roi/phone.jpg"
import ImageRover from "../../../public/images/fieldnotes/roi/rover.jpg"
import ImageSmiley from "../../../public/images/fieldnotes/roi/smiley.jpg"
import ImageOG from "../../../public/images/og/roi.jpg"


export default function Page() {

  return (
    <div className="fieldnote roi">
        <Head>
            <title>Why measuring design ROI kills the work that matters most</title>
            <meta name="description" content="When every design decision has to justify itself with ROI, the work that actually makes people love your product never gets made. This article explores why the best ideas often look like waste. Until they become the thing everyone remembers."/>
            <meta name="og:description" content="When every design decision has to justify itself with ROI, the work that actually makes people love your product never gets made. This article explores why the best ideas often look like waste. Until they become the thing everyone remembers."/>
            <meta property="og:image" content={ImageOG.src} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <style>
                @import url("https://use.typekit.net/pob2svw.css");
            </style>
        </Head>
        <div className="work-navigation">
           <Logo />
           <div className="reading-time">~7 minute read</div>
        </div>

        <header style={{ backgroundImage: `url(${ImageHeader.src})` }}>
            {/* <div className="header-img">
                <Image src={ImageHeader} alt="Abstract red background image" />
            </div> */}
            <div className="header-content">
                <h1>Why measuring <span>design ROI kills</span> the work that matters most</h1>
                <div className="roi-intro">
                    <p>Everyone wants design to prove its value right now. Fair enough. We are in a climate of budget reviews, headcount freezes, and CFOs with questions. But somewhere along the way, we have lost the plot. When every design idea has to come with a metric, a forecast and a business case, the kind of work that actually makes people love your product gets laughed out of the room.</p>
                </div>
            </div>
        </header>

        <section className="roi-up two-cols reverse end">
            <div>
                <div className="two-col-img">
                    <Image src={ImagePhone} alt="Abstract technical drawing of the pull-to-refresh motion" />
                </div>
                <h2>The best design decisions often cannot be justified upfront.</h2>
            </div>
            <div>
                <p>When we built Up, we kept all transaction screens automatically up to date, so the very common pull-to-refresh interaction became superfluous. Yet everyone kept doing it. One developer picked up on this and, for our Friday morning demos, built a little interaction where pulling down far enough would fling a coin into your savings.</p>
                <p>Lots of cheering. We all loved this instantly.<br/>Turning a pointless gesture into something useful and playful.</p>
                <p>He then spent a few weeks refining it with a designer. No business case. No A/B test plan. No measurable ROI beyond "<em>people seem to love this.</em>" And they do love it. It is one of those details people tell their friends about. The kind of thing that makes a product stick in your memory.</p>
                <p>But try getting that approved in most companies today. Suggest spending a month on something with no guaranteed metric and you will get shut down before you finish the sentence.</p>
            </div>
        </section>

        <section className="roi-soul">
            <h2>This is how we optimise the soul out of products.</h2>
            <div className="two-cols thirds">
                <div className="two-col-img">
                    <Image src={ImageSmiley} alt="Abstract technical drawing of the anatomy of a Smiley" />
                </div>
                <div>
                    <p>Think about the software you use that actually feels good. Slack's emoji reactions serve no functional purpose, but they make conversations feel human. Those little iOS animations when you open apps do nothing for task completion, but they make the phone feel premium. Stripe's developer documentation is way more polished than it needs to be functionally, but it builds massive loyalty.</p>
                    <p>None of that work would survive an "ROI first" culture. Where is the business case for an emoji reaction? What is the conversion impact of a smooth animation? How do you measure the value of documentation that makes developers smile?</p>
                    <p>You cannot. Or only in retrospect. But these details are often what separate products people choose from products people tolerate.</p>
                </div>
            </div>
        </section>

        <section className="roi-alternative two-cols">
            <div className="right-align">
                <h2>ROI doesn’t care if you hate it.</h2>
            </div>
            <div>
                <p>Everyone has that piece of enterprise software they hate using with a passion. The thing that probably has incredible engagement metrics and retention rates because what choice do you have?</p>
                <p>These companies often have armies of product managers and product designers. Best practice methodologies. They give conference talks about their user adoption frameworks and retention optimisation strategies. Detailed ROI calculations justify every feature decision.</p>
                <p>All while shipping something people actively avoid whenever possible.</p>
            </div>
        </section>

        <section className="roi-table two-cols">
            <div className="right-align stretch">
                <h2>Design finally got a seat at the table.<br/>Then it forgot why it belonged there.</h2>
                <div className="two-col-img">
                    <Image src={ImageHuman} alt="Abstract technical drawing of a human dissolving into charts and graphs" />
                </div>
            </div>
            <div>
                <p>Scroll through design LinkedIn right now and you will see the same post over and over.<br/>"<em>Design needs to speak business language.</em>"<br/>"<em>From craft to impact: how we used our design system to save $240k.</em>"<br/>"<em>Design isn’t about making things pretty — it’s about driving growth.</em>"</p>
                <p>Everyone is so desperate to prove design belongs in strategy conversations that they have forgotten what design actually brings to strategy. It is not another way to think about conversion funnels. It is the thing that helps you escape the conversion funnel mentality entirely.</p>
                <p>Design's superpower is noticing what everyone else misses. Seeing opportunities for delight in mundane interactions. Choosing humanity over optimisation. Making products that people actually want to use rather than just tolerate.</p>
                <p>But somewhere along the way, we decided that to be taken seriously, we had to talk like product managers. Measure like growth teams. Justify like finance departments.</p>
                <p>The result? Design that sounds business-savvy but feels like everything else.</p>
                <p>When design tries to speak "business language," it stops speaking human language. And that is exactly what made it valuable in the first place.</p>
            </div>
        </section>

        <section className="roi-bets">
            <div className="header-img">
                <Image src={ImageBets} alt="Abstract technical drawing of space trajectories" />
            </div>
            <h2>Great products need space for unmeasurable bets.</h2>
            <div className="two-cols">
                <div>
                    <p>Some of the most valuable work looks like waste in the short term. A developer spending Friday afternoon building something silly. A designer obsessing over an animation that serves no functional purpose. A team choosing delight over optimisation.</p>
                    <p>That Up coin flip feature probably drives more genuine brand loyalty than any conversion-tested flow. But good luck putting that in a quarterly business review.</p>
                    <p>The irony is that these unmeasurable investments often deliver the most lasting value. They just will not show up in next month's report.</p>
                </div>
                <div>
                    <p>If you demand ROI calculations for every design decision, you are not getting strategic design input. You are getting risk-averse execution that looks like everything else in your category. Sometimes the best thing you can do is notice something weird about how people behave and build something delightful around it.</p>
                    <p>Sometimes you need to make a bet on joy rather than metrics.</p>
                    <p>That takes a little faith. But it is often the difference between a product people have to use and one they actually want to.</p>
                </div>
            </div>
        </section>

        <section className="roi-hypocrisy two-cols">
            <div className="right-align">
                <h2>Hypocrisy killing innovation</h2>
            </div>
            <div>
                <p>The exact same feature that would get rejected in a roadmap review becomes the thing executives point to in company meetings. "This coin flip interaction is genius! This is exactly the kind of innovative thinking that sets us apart from competitors!"</p>
                <p>Yeah, but you would have killed it if we had asked permission first.</p>
                <p>The paradox is everywhere. Leaders want breakthrough moments while approving only incremental improvements. They celebrate creative risk-taking in retrospect while maintaining approval processes that make it impossible.</p>
                <p>You cannot have innovation without letting people build things before they can prove they work. But most companies want the results of creative bets without actually taking creative bets.</p>
                <p>The problem is not just measurement frameworks. It is the entire relationship between leadership and teams. You need a culture that allows Friday afternoon experiments. That lets designers obsess over details that might not matter. That gives teams permission to notice weird user behaviour and act on it.</p>
                <p>Otherwise you will keep wondering why your competitors are building products people actually love while you optimise conversion funnels.</p>
            </div>
        </section>

        <section className="roi-rigor">
            <div className="header-img">
                <Image src={ImageRover} alt="Abstract technical drawing of the mars rover" />
            </div>
            <h2>We do not need less rigour.<br/>We need better instincts.</h2>
            <div className="two-cols">
                <div>
                    <p>Yes, measure what matters, track the things that help you learn and make good decisions. But do not mistake measurement for leadership.</p>
                    <p>Real creative leadership means making space for the weird idea. The sideways thought. The thing that does not have a business case yet. And it means protecting the edges, where innovation actually happens.</p>
                    <p>Sometimes you need to let people build the thing that might not work and accept that a product people love is rarely the result of a spreadsheet. The work that matters most is often the hardest to defend upfront but the easiest to recognise once it is out in the world.</p>
                    <p>So make a bet. Build the unnecessary thing. It might not show up in next month's metrics, but it might be the thing your customers never forget.</p>
                    <p className="end">Let someone chase delight.</p>
                </div>
                <div className="right-align">
                    
                </div>
            </div>
        </section>
    </div>
  )
}