import React from "react"
import { Link } from "gatsby"
import PortfolioLinks from "../../components/PortfolioLinks"
import AnimatedCursor from "react-animated-cursor"
import { isMobile } from "react-device-detect";


import ImageHeader from "../../images/pursuit/header_devices.jpg"
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
            {/* <div className="work-navigation-links">
                <Link to="/portfolio/unimelb-design" className="next">Next</Link>
            </div> */}
        </div>

        <div className="work-text-large">
            <p>Making research, insights and expert commentary from Australia's most prestigious university accessible to everyone.</p>
        </div>

        <div className="work-meta">
            <div className="work-meta-element">
                <div className="work-meta-element-title">Role</div>
                <div className="work-meta-element-content">
                    Product Design<br/>
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
                <div className="work-meta-element-content">Unimelb Digital Marketing</div>
            </div>
        </div>

        <div className="media-full-width">
            <img src={ImageHeader} alt="Mockup of the website" />
        </div>

        <div className="work-text padding-top-bottom">
            <p>Pursuit is an online platform run by the University of Melbourne that shares research, insights, and expert commentary on a wide range of topics. The platform connects the public with academic research, making complex subjects more accessible through articles written by researchers, academics, and professionals. It covers topics like health, technology, society, and the environment, and is designed to engage a broad audience, including students, professionals, and the general public.</p>
            <p>Together with Web Marketing Director <a href="https://tagell.com">Paul Tagell</a>, we conceived, prototyped, and pitched the concept for what would become Pursuit. Our goal was to create a digital platform that would allow the University to engage more deeply with the public by making its research and insights more accessible. The success of our prototype led to securing a significant development budget and the mandate to build the platform for the entire University of Melbourne, amplifying its reach and impact across various disciplines.</p>
        </div>

        <div className="media-full-width">
            <img src={ImagePhone} alt="Mockup of the website on a mobile phone" />
        </div>

        <div className="work-text padding-top-bottom">
            <p>After receiving endorsement from the chancellery, we successfully designed and built Pursuit by launching with a focused minimum feature set. This allowed us to quickly bring the platform to life while ensuring flexibility for future development. Through continuous user testing, we gathered valuable insights that helped us iterate and improve the platform, refining its usability and expanding its features. Each update was driven by real user feedback, ensuring that the platform not only met the needs of the University but also enhanced public engagement with its research and insights over time. This approach allowed Pursuit to evolve into a dynamic and robust digital platform.</p>
        </div>

        <div className="media-full-width">
            <img src={ImageWall} alt="animation of several stages of user testing" />
        </div>

        <div className="work-text padding-top">
        <p>Pursuit has been highly successful since its launch in 2015. It attracts a broad international audience, with over 50% of its readers now coming from outside Australia, including countries like the United States, India, and the United Kingdom. Pursuit has also won several awards, including the prestigious Universities Australia Award for Excellence in University Research Reporting in 2022, recognizing its outstanding journalism, especially during the COVID-19 pandemic. The platform features contributions from over 1,200 academics and covers a wide range of research topics, making complex issues accessible to the public.</p>
        </div>

        <div className="work-text-large">
            {/* <p>More than 1,200 academics have contributed to Pursuit, covering a wide range of topics that showcase the university’s cutting-edge research. The platform’s ability to bring complex research to the public in an accessible way, using multimedia tools like enhanced graphics, videos, and podcasts, has helped it attract a growing readership</p> */}
            {/* <p>Pursuit is now (*2015 at the time) one of the University’s most successful web properties, delivering over 2.2 million article views to over 725,000 unique visitors in the 6 months since it launched.</p> */}
            <p>♥</p>
        </div>
            
        
        <PortfolioLinks />
            
            
        
        {isMobile ? null : <AnimatedCursor
            innerSize={44}
            outerSize={0}
            innerScale={0.2}
            outerScale={1}
            outerAlpha={0}
            innerStyle={{
            backgroundColor: 'var(--bodyColor)'
            }}
        />}
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
