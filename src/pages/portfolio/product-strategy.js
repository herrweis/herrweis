import React from "react";

import { Link } from "gatsby"
import PortfolioLinks from "../../components/PortfolioLinks"
import Metro from "../../components/Metro"
import AnimatedCursor from "react-animated-cursor"

import ImageDigitalBranch from "../../images/productstrat/digital-branch-alt.jpg"
import ImageGoals from "../../images/productstrat/customer-business-goals.jpg"


export default function Page() {

    return (
        <div className="work">
            <div className="work-navigation">
                <div className="logoWrapper">
                    <Link to="/">
                        <svg ariaLabelledby="description" className="logo" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 70" xmlSpace="preserve">
                            <description>Logo of andreasweis.com. Two lines mimmicking an infinity symbol that it broken up in the middle.</description>
                            <path d="M55.42,56.15L8.83,5.32C7.21,3.56,4.28,4.71,4.28,7.09v48.29c0,2.12,2.39,3.36,4.13,2.14l16.63-12.25" />
                            <path d="M32.96,5.24l47.5,51.9c1.61,1.76,4.55,0.62,4.55-1.77V7.09c0-2.12-2.39-3.36-4.13-2.14L64.25,17.21" />
                        </svg>
                    </Link>
                </div>
                <div className="work-navigation-links">
                    <Link to="/portfolio/design-practice" className="next">Next</Link>
                </div>
            </div>

            <div className="work-text-large">
                <p>Conceptualising, developing and visualising the product roadmap and a 5 year strategy for Bendigo Bank’s internet banking platform.</p>
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
                <img src={ImageDigitalBranch} alt="Cover of a presentation title 'The digital branch'" />
            </div>

            <div className="work-text padding-top-bottom">
                <p>I worked closely with stakeholders to identify key features and functionalities that would drive both short-term engagement and long-term growth. During this process, I combined user needs with tangible business KPIs and the organisation’s digital strategy to establish clear and measurable goals. This ensured that customer experience and business objectives were aligned, providing a strong foundation for the roadmap. I then created a unified vision that addressed both business objectives and customer needs.</p>
            </div>

            <div className="media-full-width">
                <img src={ImageGoals} alt="Goals and KPIs" />
            </div>

            <div className="work-text padding-top-bottom">
                <p>Due to the complex and interconnected nature of the items, the roadmap evolved into a cohesive tree structure, which was too large to be divided into traditional phases. This allowed us to maintain flexibility, adapting priorities based on progress and emerging opportunities.</p>
            </div>

            <Metro />

            <div className="work-text">
                <p>To make this complex roadmap accessible to all stakeholders, I designed a metro map-style visualisation. This approach made the roadmap easy to read and understand, and it was widely praised within the organisation for its clear communication of priorities and connections between different features.</p>
                <p>The 5-year strategy was built around this roadmap, with a focus on scalability, security, and user experience leveraging the high value of Bendigo Bank's strong brand. Regular checkpoints were embedded to reassess priorities and adapt to changing market conditions, ensuring the strategy remained flexible and forward-looking.</p>
            </div>

            <div className="work-text-large padding-top">
                <p>The metro map visualisation became a powerful tool, providing the organisation with a clear, actionable vision for both immediate and long-term growth.</p>
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
            <title>Andreas Weis | Product strategy and a roadmap for internet banking</title>
            <meta name="description" content="Conceptualising, developing and visualising the product roadmap and a 5 year strategy for Bendigo Bank’s internet banking platform." />
            <link rel="canonical" href="https://andreasweis.com" />
            <link rel="stylesheet" href="https://use.typekit.net/ztd8wlb.css"></link>
            <html lang="en" />
        </>
    )
}
