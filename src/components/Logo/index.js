import React from "react"
import Link from 'next/link'


const Logo = () => {
    return (
        <div className="logoWrapper">
            <Link href="/">
                <svg aria-labelledby="description" className="logo" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 70" xmlSpace="preserve">
                    <description>Logo of andreasweis.com. Two lines mimmicking an infinity symbol that it broken up in the middle.</description>
                    <path d="M55.42,56.15L8.83,5.32C7.21,3.56,4.28,4.71,4.28,7.09v48.29c0,2.12,2.39,3.36,4.13,2.14l16.63-12.25"/>
                    <path d="M32.96,5.24l47.5,51.9c1.61,1.76,4.55,0.62,4.55-1.77V7.09c0-2.12-2.39-3.36-4.13-2.14L64.25,17.21"/>
                </svg>
            </Link>
        </div>
    )

};

export default Logo;