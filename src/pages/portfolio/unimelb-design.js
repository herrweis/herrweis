import React from "react"
import Head from 'next/head'

import Logo from "../../components/Logo"
import PortfolioLinks from "../../components/PortfolioLinks"
// import AnimatedCursor from "react-animated-cursor"
// import { isMobile } from "react-device-detect";

import Image from 'next/image'

import ImageHeader from "../../../public/images/unimelb/design_system_header.jpg"
import ImageScreens from "../../../public/images/unimelb/screens.jpg"
import ImageSystem from "../../../public/images/unimelb/system.jpg"
import ImageHamburger from "../../../public/images/unimelb/hamburger.jpg"
import ImagePhones from "../../../public/images/unimelb/components_on_phones.jpg"


export default function Page() {
  return (
    <div className="work">
        <Head>
            <title>Andreas Weis | A digital design system and living style guide for The University of Melbourne</title>
            <meta name="description" content="Design leader with 23+ years experience as a multidisciplinary designer and 15+ years leading diverse design teams"/>   
        </Head>
        <div className="work-navigation">
            <Logo />
        </div>

        <div className="work-text-large">
            <p>A comprehensive design system and living style guide created for The University of Melbourne to empower teams across the university to plan, design, and build websites and web applications with consistency.</p>
            <p>Finally, wrangling 2 million pages into order.</p>
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
                <div className="work-meta-element-content">Unimelb Digital Marketing</div>
            </div>
        </div>

        <div className="media-full-width">
            <Image src={ImageHeader} alt="web.uimelb on a phone" />
        </div>

        <div className="work-text">
            <p>The University of Melbourne&apos;s web presence sprawled across over 1,000 websites and more than 2 million pages, managed by largely autonomous business units. Websites were hosted on a range of CMS platforms, each designed and developed by different teams—often at great expense and varying quality. This created a branding nightmare, making it nearly impossible to ensure consistency in usability, navigation, accessibility, or tag management across the domain.</p>
        </div>

        <div className="media-full-width">
            <Image src={ImageSystem} alt="design system components" />
        </div>
        <div className="work-text">
            <p>With so many different needs across numerous websites, the only way forward was to take design back to basics. The system was designed to cater to everything from text-heavy student handbook pages to bold, funky marketing campaigns. The focus? Simplicity and flexibility.</p>
        </div>

        <div className="media-full-width">
            <Image src={ImageHamburger} alt="Hamburger navigation" />
        </div>
        <div className="work-text">
            <p>Unifying navigation across such a diverse set of sites meant bringing back the hamburger. While controversial, it was the best way to centralise navigation and refocus creators on content. Every user test since has shown that people recognise and use the hamburger frequently—proof that simplicity works.</p>
        </div>

        <div className="media-full-width">
            <Image src={ImageScreens} alt="Several laptops with different unimelb  websites" />
        </div>
        <div className="work-text">
            <p>The university is legally required to ensure full accessibility for everyone, but meeting just the baseline wasn&apos;t enough. The design system was built to support all users, regardless of browser or device. Optimising, however, doesn&apos;t mean compromising. We support every device and browser but optimise only for the latest (and previous) versions to make room for the newest CSS, JavaScript, and HTML features.</p>
        </div>

        <div className="media-full-width">
            <Image src={ImagePhones} alt="Several phones with different design system compnents" />
        </div>
        <div className="work-text">
            <p>The system currently includes 28 components (and counting) with over 100 variations, making it possible to build almost any website quickly without needing design or development resources. This frees teams to focus solely on producing the best possible content.</p>
            <p>All brand assets and university-wide navigation elements (header, footer, sitemap, fonts, styles) are centrally controlled and updated. This allows for seamless rollouts of design iterations, bug fixes, or even major brand changes without any team having to touch their code.</p>
        </div>

        <div className="work-text-large padding-top">
            <p>And yes, we were one of the first in Melbourne to make our living style guide public.</p>
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