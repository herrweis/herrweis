import React, { useEffect } from "react"
import Link  from "next/link"
import { isMobile } from "react-device-detect";


const FieldnotesLinks = () => {


    const Navigation = [
        {
            to: "/fieldnotes/why-measuring-design-ROI-kills-the-work-that-matters-most",
            label: "Why measuring design ROI kills the work that matters most"
        },
        {
            to: "/fieldnotes/you-do-not-need-a-design-system-you-need-a-designer-who-gives-a-shit",
            label: "You do not need a design system. You need a designer who gives a shit"
        },
        {
            to: "https://swift-yttrium-b7a.notion.site/How-to-know-if-you-are-hiring-your-first-designer-too-late-2469856d8f28805497b5dcef256b3320",
            label: "How to know if you are hiring your first designer too late"
        },
        {
            to: "https://swift-yttrium-b7a.notion.site/What-you-get-with-a-fractional-design-lead-and-what-you-don-t-2459856d8f28809aacb9cc04fa736f0e",
            label: "What you get with a fractional design lead (and what you don’t)"
        },
        
    ]

    const [activeIndex, setActiveIndex] = React.useState(-1);

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
        </div>
    )

};

export default FieldnotesLinks