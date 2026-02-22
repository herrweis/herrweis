import React, { useEffect, useRef, useState } from "react"
import Head from 'next/head'
import Link from 'next/link'

import Logo from "../components/Logo"
import ImageOG from "../../public/images/og/home.png"

const founderSessions = [
  {
    label: "01 | Intervention",
    title: "Am I solving the right problem?",
    summary: "Half day session + written recommendations. I look at where you actually are across product, team, priorities and readiness first and recommend pathways forward.",
    details: [
      { key: "What it is:", value: "Half day session + written recommendation. I look at where you actually are across product, team, priorities and readiness first and recommend pathways forward." },
      { key: "Who it\u2019s for:", value: "Founders about to hire, raise, spend significant money or feel stuck who want an outside perspective before they commit." },
      { key: "Typical trigger:", value: "\u201CWe\u2019re about to hire a designer but I\u2019m not sure what we actually need.\u201D \u201CSomething\u2019s broken but I can\u2019t tell if it\u2019s product, team, or timing.\u201D \u201CI need a sanity check before we commit.\u201D" },
      { key: "Hard decisions this forces:", value: "Whether to hire now or fix foundations first. What role you actually need vs what you think you need. Which problem to solve before the others. Whether to raise or wait." },
      { key: "What you leave with:", value: "A clear recommendation on what to do next, what not to do and in what order." },
      { key: "The written output:", value: "A ways forward document. What I found, what I recommend and what the risks are. Typically 2 to 4 pages." },
      { key: "Not for:", value: "Founders who have already decided and just want a rubber stamp, teams who want execution help disguised as strategy or anyone who is not ready to hear \u201Cyou are solving the wrong problem.\u201D" }
    ]
  },
  {
    label: "02 | Intensive",
    title: "We are busy but nothing is changing",
    summary: "2 to 3 day strategic immersion. I get your founding team in the room and take the whole thing apart across product, positioning, priorities, team and timeline.",
    details: [
      { key: "What it is:", value: "2 to 3 day strategic immersion. I get your founding team in the room and take the whole thing apart across product, positioning, priorities, team and timeline." },
      { key: "Who it\u2019s for:", value: "Founding teams with a lot of moving parts who haven\u2019t stepped back far enough to see the full picture. You might have traction or funding but things feel messier than they should." },
      { key: "Typical trigger:", value: "\u201CWe keep debating the same things.\u201D \u201CInvestors keep asking questions we can\u2019t answer cleanly.\u201D \u201CWe know something is off but we can\u2019t see it from the inside.\u201D" },
      { key: "Hard decisions this forces:", value: "What to stop building. Where you and your co-founder actually disagree. What your product is really for and who it\u2019s really for. What the next 6 months look like if you are honest about it." },
      { key: "What you leave with:", value: "Clarity on what to build, who it is for and what to stop doing entirely." },
      { key: "The written output:", value: "A strategy doc capturing the decisions made, principles agreed and a prioritised action list." },
      { key: "Not for:", value: "Teams who want validation not challenge, or founders who aren\u2019t willing to be in the room together for the hard conversations." }
    ]
  },
  {
    label: "03 | Narrative",
    title: "No one understands what we do",
    summary: "Half day session + written narrative outline. I make you explain your business in ways you have not tried before until we find the version that actually lands.",
    details: [
      { key: "What it is:", value: "Half day session + written narrative. I make you explain your business in ways you have not tried before until we find the version that actually lands." },
      { key: "Who it\u2019s for:", value: "Founders preparing to raise, pitch or go to market who know their story is not working but can\u2019t figure out why." },
      { key: "Typical trigger:", value: "\u201COur deck is 40 slides and none of them land.\u201D \u201CWe\u2019re raising in six weeks and our story is a mess.\u201D \u201CWe know what we do but we can\u2019t explain it simply.\u201D" },
      { key: "Hard decisions this forces:", value: "What your business actually is vs what you wish it was. Which audience matters most right now. What to leave out of the pitch entirely." },
      { key: "What you leave with:", value: "A narrative foundation. The full outline of a pitch (not a finished deck)." },
      { key: "The written output:", value: "A narrative doc covering your audience, core message, story arc and the logic behind each part of your pitch. Hand it to a designer or use it to rewrite your own deck." },
      { key: "Not for:", value: "Founders who want a pretty deck without changing anything, or anyone who thinks the problem is the slides not the story." }
    ]
  }
]

const fieldNotes = [
  {
    href: "/fieldnotes/we-are-drowning-in-the-shallow-end",
    title: "We are drowning in the shallow end",
    readTime: "8\u20139 min read"
  },
  {
    href: "/fieldnotes/why-measuring-design-ROI-kills-the-work-that-matters-most",
    title: "Why measuring design ROI kills the work that matters most",
    readTime: "7\u20138 min read"
  },
  {
    href: "/fieldnotes/you-do-not-need-a-design-system-you-need-a-designer-who-gives-a-shit",
    title: "You do not need a design system. You need a designer who gives a shit",
    readTime: "3\u20134 min read"
  }
]

const testimonials = [
  {
    quote: "\u201CHe\u2019s not susceptible to bullshit. He calls it out in a nanosecond. There is no flattery and nothing artificial in his approach. You know when he says something, he means it.\u201D",
    attribution: "Dr Lachlan Kent, Founder of Mental Gravity"
  },
  {
    quote: "\u201CWe set one metric and goal which was smacked out of the park. 200% increase over a month period after Andi had supported us in a rejuvenation, not even a full redesign.\u201D",
    attribution: "David Cain, Co-founder of Occubuy"
  },
  {
    quote: "\u201CAndi's approach is beautifully pure. Deep curiosity, honest and caring conversations, then focused actions that create real impact, not just another to-do list.\u201D",
    attribution: "Nick Carter, Founder of Sonic Leadership Group"
  },
  {
    quote: "\u201CI thought we were getting PowerPoint slides. We received a lesson in how effective design drives leading comms and set a standard amongst bank reporting\u201D",
    attribution: "Sam Miller, General Manager of Investor Relations and ESG Bendigo Bank"
  }
]

const brandList = "\u2003\u2003Up\u2003\u2003|\u2003\u2003Lyrebird Health\u2003\u2003|\u2003\u2003Bendigo Bank\u2003\u2003|\u2003\u2003University of Melbourne\u2003\u2003|\u2003\u2003Kmart\u2003\u2003|\u2003\u2003Australian Medical Angels\u2003\u2003|\u2003\u2003eSignatures\u2003\u2003|\u2003\u2003Sonic Leadership Group\u2003\u2003"

export default function Page() {
  const sectionRefs = useRef([])
  const [openSession, setOpenSession] = useState(null)
  const [activeQuote, setActiveQuote] = useState(0)
  const [autoAdvance, setAutoAdvance] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    const styles = getComputedStyle(root)
    const dark = styles.getPropertyValue("--dark").trim()
    const light = styles.getPropertyValue("--light").trim()

    const defaultColors = {
      body: styles.getPropertyValue("--bodyColor").trim() || dark,
      background: styles.getPropertyValue("--backgroundColor").trim() || light
    }

    const themeMap = {
      dark: { body: light, background: dark },
      light: { body: dark, background: light }
    }

    const applyTheme = (theme) => {
      const next = themeMap[theme] || themeMap.dark
      root.style.setProperty("--bodyColor", next.body)
      root.style.setProperty("--backgroundColor", next.background)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue
          }
          if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry
          }
        }
        if (bestEntry?.target?.dataset?.theme) {
          applyTheme(bestEntry.target.dataset.theme)
        }
      },
      {
        threshold: [0.5, 0.65, 0.8]
      }
    )

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    applyTheme("dark")

    return () => {
      observer.disconnect()
      root.style.setProperty("--bodyColor", defaultColors.body)
      root.style.setProperty("--backgroundColor", defaultColors.background)
    }
  }, [])

  useEffect(() => {
    if (!autoAdvance) return
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % testimonials.length)
    }, 20000)
    return () => clearInterval(timer)
  }, [autoAdvance])

  const setSectionRef = (element, index) => {
    sectionRefs.current[index] = element
  }

  return (
    <div className="home-v2">
      <Head>
        <title>Andreas Weis | Product Design Leadership</title>
        <meta name="description" content="Design leader with 243+ years experience as a multidisciplinary designer and 15+ years leading diverse design teams" />
        <meta name="og:description" content="Design leader with 24+ years experience as a multidisciplinary designer and 15+ years leading diverse design teams" />
        <meta property="og:image" content={ImageOG.src} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <section className="home-section home-section-dark home-hero" data-theme="dark" ref={(element) => setSectionRef(element, 0)}>
        <div className="home-grid">
          <div className="hero-title">
            <h1>
              <span>Andi Weis</span>
              <span>Design<br className="mobile-break" />&amp;Product</span>
              <span>Strategist</span>
              <span>Provoc<br className="mobile-break" />ateur</span>
            </h1>
          </div>
          <div className="hero-note">
            <p>I help founders and teams get clear on what matters and then make it real.</p>
            <p>Across design, product and story.</p>
          </div>
          <div className="hero-logo">
            <Logo />
          </div>
        </div>
      </section>

      <section className="home-section home-section-light home-sessions" data-theme="light" ref={(element) => setSectionRef(element, 1)}>
        <div className="home-grid">
          <p className="session-header">Founder sessions</p>
          <p className="section-kicker">
            Most founders I sit down with tell me things are going well. Within 30 minutes they have said the thing out loud they have been avoiding.
            <br /><br />
            I ask the questions nobody else will.
            <br />
            And I will not leave you without an answer.
          </p>
          <div className="session-list">
            {founderSessions.map((item, index) => {
              const isOpen = openSession === index
              return (
                <article
                  className={`session-row ${isOpen ? "session-row--open" : ""}`}
                  key={item.title}
                  onClick={() => setOpenSession(isOpen ? null : index)}
                >
                  <div className="session-row-header">
                    <p className="session-label">{item.label}</p>
                    <h2>{item.title}</h2>
                    <p className="session-summary">{item.summary}</p>
                  </div>
                  <div className="session-row-body">
                    <div className="session-row-inner">
                      <table className="session-details">
                        <tbody>
                          {item.details.map((row) => (
                            <tr key={row.key}>
                              <td className="session-details-key">{row.key}</td>
                              <td>{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-section-dark home-fractional" data-theme="dark" ref={(element) => setSectionRef(element, 2)}>
        <div className="home-grid">
          <div className="fractional-copy">
            <p>
              I integrate into your team as your design and product leader for 3 to 6 months, 1 to 3 days a week.
              Strategy, execution and capability building, without the full-time hire.
            </p>
            <p>
              In practice that might mean standing up your first design function, resetting product direction when
              everything feels urgent, hiring your first designer and knowing what to look for, or fixing what is broken before you scale it.
            </p>
          </div>
          <h2 className="fractional-title">Fract<br/>ional<br/>Work</h2>
          <p className="fractional-question">Not sure if or what kind of design help you need?</p>
          <p className="fractional-answer">
            I start with a short assessment. I look at your product, team, roadmap and constraints, and give
            you a written recommendation with clear options and next steps. Sometimes that leads to working
            together. Sometimes it means hiring the right person. Either way you stop guessing.
          </p>
        </div>
      </section>

      <section className="home-section home-section-light home-notes" data-theme="light" ref={(element) => setSectionRef(element, 3)}>
        <div className="home-grid">
          <p className="notes-header">Essays</p>
          <div className="section-kicker">
            <p>Opinions on design, product and the gap between what companies say they value and what they actually do.</p>
            <p>Sometimes spicy, sometimes philosophical but always my personal view</p>
          </div>
          <nav className="notes-list" aria-label="Field notes">
            {fieldNotes.map((item) => (
              <Link href={item.href} key={item.href}>
                <span>{item.title}</span>
                <span>{item.readTime}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="home-section home-section-dark home-proof" data-theme="dark" ref={(element) => setSectionRef(element, 4)}>
        <div className="home-grid">
          <h2 className="proof-title">
            In<br className="proof-title-break" />
            their<br className="proof-title-break" />
            words
          </h2>
          <div className="proof-slider">
            <div className="proof-quotes">
              <div
                className="proof-quotes-track"
                style={{ transform: `translateX(-${activeQuote * 100}%)` }}
              >
                {testimonials.map((item, index) => (
                  <div
                    className="proof-quote"
                    key={item.attribution}
                  >
                    <blockquote>{item.quote}</blockquote>
                    <p className="proof-attribution">&mdash;&mdash; {item.attribution}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="proof-arrows">
              <button
                className="proof-arrow proof-arrow--prev"
                onClick={() => { setAutoAdvance(false); setActiveQuote((prev) => (prev - 1 + testimonials.length) % testimonials.length) }}
                aria-label="Previous quote"
              >
                &#x2039;
              </button>
              <button
                className="proof-arrow proof-arrow--next"
                onClick={() => { setAutoAdvance(false); setActiveQuote((prev) => (prev + 1) % testimonials.length) }}
                aria-label="Next quote"
              >
                &#x203A;
              </button>
            </div>
          </div>
          <div className="proof-ticker">
            <div className="proof-ticker-track">
              <span>{brandList}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span>{brandList}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-light home-cta" data-theme="light" ref={(element) => setSectionRef(element, 5)}>
        <div className="home-grid">
          <h2>Every engagement starts with a conversation.</h2>
          <div className="cta-link">
            <p className="cta-label">Schedule a call</p>
            <a href="https://calendar.app.google/Y5qD1E6hJNwSQ5X67" target="_blank" rel="noopener noreferrer">calendar.google.com</a>
          </div>
          <div className="cta-link">
            <p className="cta-label">Email me</p>
            <a href="mailto:post@andreasweis.com?subject=👋">post@andreasweis.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}
