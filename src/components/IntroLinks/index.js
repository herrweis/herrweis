const IntroLinks = () => {
    const availability = process.env.NEXT_PUBLIC_AVAILABILITY || "Limited availability — get in touch";

    return (
        <div>
            {/* <p className="links">
                Previously at <a href="//ferocia.com.au" aria-label="Visit Ferocia's website">Ferocia</a> &amp; <a href="//up.com.au" aria-label="Visit Up's website">Up</a>, <a href="//bendigobank.com.au" aria-label="Visit Bendigo Bank's website">Bendigo Bank</a>, <a href="//kmart.com.au" aria-label="Visit Kmart's website">Kmart</a>, <a href="//lyrebirdhealth.com" aria-label="Visit Lyrebird Health">Lyrebird Health</a> and the <a href="//unimelb.edu.au" aria-label="Visit University of Melbourne's website">University of Melbourne</a> amongst&nbsp;other&nbsp;awesome&nbsp;places.
            </p> */}
            <p className="links">
                {availability}. <a href="//www.linkedin.com/in/andi-weis/" aria-label="Connect with me on LinkedIn">Connect on LinkedIn</a> or <a href="mailto:post@andreasweis.com?subject=👋" aria-label="Write me an email">drop me an email</a>.
            </p>
        </div>
    )
};

export default IntroLinks