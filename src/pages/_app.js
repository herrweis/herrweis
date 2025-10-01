import '../styles/font.css'
import '../styles/global.scss'
import '../styles/work.scss'
import '../styles/fieldnotes.scss'
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppProps } from 'next/app'
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <GoogleAnalytics gaId="G-2TS82343BJ" />
    </>
  )
}

export default MyApp