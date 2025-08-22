import React from "react"
import Head from 'next/head'
import Logo from "../../components/Logo"

import Image from 'next/image'

import ImageClouds from "../../../public/images/fieldnotes/designsystem/clouds.jpg"
import ImageBurning from "../../../public/images/fieldnotes/designsystem/burning1.jpg"
import ImageOrganic from "../../../public/images/fieldnotes/designsystem/organic.jpg"
import ImageLunch from "../../../public/images/fieldnotes/designsystem/lunch2.jpg"
import ImageTogether from "../../../public/images/fieldnotes/designsystem/together.jpg"
import ImageLead from "../../../public/images/fieldnotes/designsystem/lead.jpg"
import ImageNewstart from "../../../public/images/fieldnotes/designsystem/newstart.jpg"
import ImageFinale from "../../../public/images/fieldnotes/designsystem/finale.jpg"
import ImagePointBall from "../../../public/images/fieldnotes/designsystem/point_ball.jpg"
import ImagePointDiamond from "../../../public/images/fieldnotes/designsystem/point_diamond.jpg"
import ImagePointPyramid from "../../../public/images/fieldnotes/designsystem/point_pyramid.jpg"
import ImagePointCube from "../../../public/images/fieldnotes/designsystem/point_cube.jpg"

export default function Page() {

  return (
    <div className="fieldnote designsystem" style={{backgroundColor: "#c4e1f1"}}>
        <Head>
            <title>You do not need a design system. You need a designer who gives a shit</title>
            <meta name="description" content="Chasing structure too early slows you down. Before you hire a Head of Design or spin up a design system, make sure you’re solving the real problem, not just the vibe."/>
            <meta name="og:description" content="Chasing structure too early slows you down. Before you hire a Head of Design or spin up a design system, make sure you’re solving the real problem, not just the vibe."/>
            <meta property="og:image" content={ImageBurning.src} />
            <meta property="og:image:width" content="1980" />
            <meta property="og:image:height" content="1080" />
            <style>
                @import url("https://use.typekit.net/roq0vxo.css?bla=new");
            </style>
        </Head>
        <div className="work-navigation">
           <Logo />
        </div>

        <div className="work-text-large">
            <p style={{ color: "#066640" }}>You do not need a design system.</p>
            <p style={{ color: "#010d05" }}>You need a designer who gives a shit.</p>
        </div>
        <div className="work-text background-image" style={{ backgroundImage: `url(${ImageClouds.src})` }}>
            <p>Startups love chasing maturity. Especially when things start to feel messy. There is always a moment where someone lifts their head and says, “We have grown. Things are not as fast or clean as they used to be. We need systems. We need roles. We need proper design.”</p>
            <p>This is usually when someone decides they need a Head of Design. Or a design system. Or a set of rituals that will somehow make the mess go away.</p>
            <p>But most of the time, the mess is not a maturity problem. It is just the natural consequence of doing too much, too fast, with not enough people. A new title will not fix that. A glossy playbook will not either. And trying to fast-forward into someone else’s version of “mature” usually just slows you down and introduces bloat you do not need yet.</p>
            <p>I have seen this happen across startups, corporates, and scale-ups. The pattern is the same: instead of solving the actual problem in front of them, teams try to solve their vibe.</p>
        </div>

        <div className="media-full-width">
            <Image src={ImageBurning} alt="Claymation figure holding a blueprint while everything is burning" />
        </div>
        <div className="work-text inverse padding-top padding-bottom two-col bottom intent">
            <div>
                <p>One of the easiest traps is copying what worked somewhere else. You hear that Company X uses tokens. That they have polished rituals and beautiful documentation. That they have built a huge design system and have a Figma plugin for everything.</p>
                <p>So you bring that into your team, hoping for the same results.</p>
                <p>What you do not see is the years it took to get there. Or how deeply those tools are tied to the way that company actually works. Without that context, you are just bolting on structure for its own sake. The form without the function.</p>
            </div>
            <p className="highlight">You copied the ceremony, not the intent.</p>
        </div>

        <div className="media-full-width">
            <Image src={ImageOrganic} alt="Claymation builder who is not constrained by a rigid blueprint" />
        </div>
        <div className="work-text padding-bottom two-col up" style={{ backgroundColor: "#b2d585", color: "#380a06" }}>
            <p className="highlight">Up did not have a design system for the first four years.</p>
            <div>
                <p>Not because we were careless, but because the product was evolving so quickly that a system would have slowed us down. It would have locked in assumptions too early. We needed to move fast, try things, and let the product itself shape the patterns.</p>
                <p>Instead of a system, we had shared values. Tight feedback loops. Designers who gave a shit and cared deeply about quality. That worked because we were close to the product and to each other. We did not need a rulebook to stay consistent.</p>
                <p>Eventually, we built a system. But only once the product had stabilised and the patterns were real. It was not a shortcut to good design. It was the byproduct of it.</p>
            </div>
        </div>

        <div className="leader" style={{ backgroundColor: "#dae9c2", backgroundImage: `url(${ImageLead.src})`, color: "#032b04" }}>
            <p className="highlight">Hiring too senior too soon</p>
            <div className="work-text">
                <p>Another version of the trap is bringing in a Head of Design before there is anything to lead.</p>
                <p>You think you are buying strategic thinking, clarity, and leadership. But if you do not have a team, or a clear strategy problem, or the appetite to be challenged on your decisions—what you are really buying is frustration.</p>
                <p>I have seen brilliant design leaders stuck pushing pixels because they were hired as a shortcut. No authority, no mandate, no trust. They were not the wrong person. It was just the wrong time.</p>
                <p>What you probably need is a senior designer who gives a shit. Someone who can work through ambiguity, push the work forward, and help you figure out what to do next.</p>
            </div>
        </div>

        <div className="media-full-width">
            <Image src={ImageTogether} alt="Blue builder at work and gaining the trust of the other characters" />
        </div>
        <div className="work-text two-col prove" style={{ backgroundColor: "#c0aca3", color: "#041830", paddingBottom: "5rem" }}>
            <p className="highlight">Prove the need before filling the role</p>
            <div>
                <p>At Bendigo Bank, we were trying to demonstrate the value of design inside a business unit that had never worked with a product designer. They were not hostile—just unconvinced. There was no budget, no roadmap, just a vague sense that maybe they should talk to someone.</p>
                <p>We offered to run a four-week “try-before-you-buy.” One of our best designers embedded directly with the team, working on real projects to show what was possible.</p>
                <p>By the end of the four weeks, everything had changed. The conversation shifted from “We do not need a designer” to “Next financial year, we want to bring on two seniors and a junior.”</p>
                <p>This did not happen because we convinced them with a deck. It happened because we did the work, showed the outcomes, and built trust from inside the team.</p>
                <p>Sometimes maturity looks like structure. Other times, it looks like patience.</p>
            </div>
        </div>

        <div className="media-full-width">
            <Image src={ImageLunch} alt="Blue builder and all the other characters enjoying a lunch break together" />
        </div>
        <div className="work-text two-col intent bottom">
            <div>
                <p>There are rituals that help. Crits, showcases, design huddles—these can all be powerful. But they need to grow out of what your team needs, not what you think makes you look like a real design org.</p>
                <p>Some teams thrive with structured reviews. Others work better with quick, frequent pairing. The shape of the ritual matters less than whether it helps your people work better together.</p>
                <p>When a ritual becomes a performance, or a checkbox, it is time to kill it.</p>
            </div>
            <p className="highlight">You need rituals that serve your people, not your image</p>
        </div>

        <div className="leader" style={{ backgroundColor: "#f8c569", backgroundImage: `url(${ImageNewstart.src})`, color: "#340c04" }}>
            <h3>What to try instead</h3>
        </div>
        <div className="work-text" style={{ backgroundColor: "#f8c569", color: "#340c04" }}>
            
            <ul className="points">
                <li>
                    <div>
                        <Image src={ImagePointBall} alt="Clay ball" />
                    </div>
                    <p className="highlight">Start with the problem, not the tool.</p>
                    <p>If your team is shipping bad work, do not start with components. Start by asking why nobody flagged it.</p>
                </li>
                <li>
                    <div>
                        <Image src={ImagePointPyramid} alt="Clay pyramid" />
                    </div>
                    <p className="highlight">Pilot roles before filling them.</p>
                    <p>An embedded designer will teach you more about what you need than any org chart.</p>
                </li>
                <li>
                    <div>
                        <Image src={ImagePointCube} alt="Clay cube" />
                    </div>
                    <p className="highlight">Delay structure if you can.</p>
                    <p>A focused, high-trust team beats a bloated one with processes nobody follows.</p>
                </li>
                <li>
                    <div>
                        <Image src={ImagePointDiamond} alt="Clay diamond" />
                    </div>
                    <p className="highlight">Build the system after the patterns emerge.</p>
                    <p>Good systems reflect your product. They do not predict it.</p>
                </li>
            </ul>
        </div>
        
        <div className="work-text finale" style={{ backgroundColor: "#f8c569", color: "#000000" }}>
            <p>You do not need a design system.<br/>You need a designer who gives a shit.</p>
            <p>You do not need rituals.<br/>You need a team that knows how to work together.</p>
            <p>You do not need to look mature.<br/>You need to make good decisions.</p>
            <p>Get the work right first<br/>The structure will follow.</p>
            <p className="heart">♥</p>
        </div>
         <div className="media-full-width">
            <Image src={ImageFinale} alt="Claymation builder who is not constrained by a rigid blueprint" />
        </div>
    </div>
  )
}