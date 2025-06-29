import '../styles/font.css'
import '../styles/global.scss'
import '../styles/work.scss'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp