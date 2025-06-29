import React from "react";
import Head from 'next/head'

import Logo from "../../components/Logo"
import PortfolioLinks from "../../components/PortfolioLinks"
import Metro from "../../components/Metro"
// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";

import Image from 'next/image'

import ImageDigitalBranch from "../../../public/images/productstrat/digital-branch-alt.jpg"
import ImageGoals from "../../../public/images/productstrat/customer-business-goals.jpg"


export default function Page() {

    return (
        <div className="work">
            <Head>
                <title>Andreas Weis | Product strategy and a roadmap for internet banking</title>
                <meta name="description" content="Conceptualising, developing and visualising the product roadmap and a 5 year strategy for Bendigo Bank&apos;s internet banking platform." />
            </Head>
            <div className="work-navigation">
                <Logo />
            </div>

            <div className="work-text-large">
                <p>Conceptualising, developing and visualising the product roadmap and a 5 year strategy for Bendigo Bank&apos;s internet banking platform.</p>
            </div>

            <div className="work-meta">
                <div className="work-meta-element">
                    <div className="work-meta-element-title">Role</div>
                    <div className="work-meta-element-content">
                        Product strategy & vision<br />
                        Product management<br />
                        Visual design
                    </div>
                </div>
                <div className="work-meta-element">
                    <div className="work-meta-element-title">Year</div>
                    <div className="work-meta-element-content">2020</div>
                </div>
                <div className="work-meta-element">
                    <div className="work-meta-element-title">Team</div>
                    <div className="work-meta-element-content">Ferocia/Connect</div>
                </div>
            </div>


            <div className="work-text">
                <p>In developing the product vision, 5-year strategy and roadmap for the internet banking platform, I took a comprehensive approach by gathering all business needs, customer insights, and new ideas and concepts. I then categorised and prioritised these elements into a cohesive tree, which became the roadmap itself due to its complexity and scale, making it impossible to split into traditional phases.</p>
            </div>

            <div className="media-full-width">
                <Image src={ImageDigitalBranch} alt="Cover of a presentation title 'The digital branch'" />
            </div>

            <div className="work-text padding-bottom">
                <p>I developed a bold and bespoke digital vision that aligned with Bendigo Bank&apos;s overarching goals while placing the customer at the heart of the strategy. This vision focused on bringing the bank&apos;s key differentiators—those qualities that make Bendigo Bank the most trusted in Australia—from the physical world into the digital space. By translating its core values of trust, reliability, and community into the online environment, we ensured that customers experienced the same sense of security and connection, while driving innovation and enhancing the digital experience.</p>
                <p>I worked closely with stakeholders to identify key features and functionalities that would drive both short-term engagement and long-term growth. During this process, I combined user needs with tangible business KPIs and the organisation&apos;s digital strategy to establish clear and measurable goals. This ensured that customer experience and business objectives were aligned, providing a strong foundation for the roadmap. I then created a unified vision that addressed both business objectives and customer needs.</p>
            </div>

            <div className="media-full-width">
                <Image src={ImageGoals} alt="Goals and KPIs" />
            </div>

            <div className="work-text padding-top-bottom">
                <p>Due to the complex and interconnected nature of the items, the roadmap evolved into a cohesive tree structure, which was too large to be divided into traditional phases. This allowed us to maintain flexibility, adapting priorities based on progress and emerging opportunities.</p>
            </div>

            <Metro />

            <div className="work-text">
                <p>To make this complex roadmap accessible to all stakeholders, I designed a metro map-style visualisation. This approach made the roadmap easy to read and understand, and it was widely praised within the organisation for its clear communication of priorities and connections between different features.</p>
                <p>The 5-year strategy was built around this roadmap, with a focus on scalability, security, and user experience leveraging the high value of Bendigo Bank&apos;s strong brand. Regular checkpoints were embedded to reassess priorities and adapt to changing market conditions, ensuring the strategy remained flexible and forward-looking.</p>
            </div>

            <div className="work-text-large padding-top">
                <p>The metro map visualisation became a powerful tool, providing the organisation with a clear, actionable vision for both immediate and long-term growth.</p>
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