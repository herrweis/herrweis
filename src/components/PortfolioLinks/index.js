import React, { useEffect } from "react"
import Link  from "next/link"
import { isMobile } from "react-device-detect";

import ImageStrategy from "../../../public/images/previews/strategy.jpg"
import ImageBen from "../../../public/images/previews/ben.jpg"
import ImageUp from "../../../public/images/previews/up.jpg"
import ImageBrand from "../../../public/images/previews/brand.jpg"
import ImageProductStrat from "../../../public/images/previews/productstrat.jpg"
import ImagePursuit from "../../../public/images/previews/pursuit.jpg"
import ImageUnimelb from "../../../public/images/previews/unimelb.jpg"

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    useEffect(() => {
        const updateMousePosition = event => {
            setMousePosition({x: event.clientX, y: event.clientY});
        }
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, [])

    return mousePosition;
}


const PortfolioLinks = () => {


    const Navigation = [
        {
            to: "/portfolio/ben-internet-banking",
            img: ImageBen,
            label: "Evolving Bendigo Bank’s internet banking app"
        },
        {
            to: "/portfolio/up-foundations",
            img: ImageUp,
            label: "Foundations for a new digital bank"
        },
        {
            to: "/portfolio/pursuit",
            img: ImagePursuit,
            label: "Creating an award-winning research news website for Australia's leading university"
        },
        {
            to: "/portfolio/design-practice",
            img: ImageStrategy,
            label: "Strategy and implementation of a Digital Design Practice"
        },
        {
            to: "/portfolio/ben-digital-brand",
            img: ImageBrand,
            label: "Pushing a valuable brand digitally"
        },
        {
            to: "/portfolio/product-strategy",
            img: ImageProductStrat,
            label: "Product strategy and a roadmap for internet banking"
        },
        {
            to: "/portfolio/unimelb-design",
            img: ImageUnimelb,
            label: "A digital design system and living style guide for The University of Melbourne"
        },
    ]

    const [activeIndex, setActiveIndex] = React.useState(-1);
    const {x, y} = useMousePosition();

    return (
        <div>
            <nav className="other-work">
                <ul>
                    {
                        Navigation.map(({to, img, label}, index ) => (
                            <li key={index}>
                                <Link href={to}
                                    onMouseEnter={()=>setActiveIndex(index)}
                                    onMouseLeave={()=>setActiveIndex(-1)}
                                >
                                    {label}
                                </Link>
                            </li>
                    ))}
                </ul>
            </nav>
            {isMobile ? null : 
                <div className="preview-images">
                {
                Navigation.map(({to, img, label}, index ) => {
                    const active = index === activeIndex;

                    return (
                        <img
                            className={(active ? 'is-active' : 'hidden')}
                            src={img.src}
                            alt="label"
                            key={index}
                            style={{
                                // transform: `translate(${x}px, ${y}px)`
                                top: `${y}px`,
                                left: `${x}px`
                            }}
                        />
                    )
                })}
                </div>
            }
        </div>
    )

};

export default PortfolioLinks