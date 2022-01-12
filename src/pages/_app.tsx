import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/GlobalStyles'
import "the-new-css-reset/css/reset.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </>  
    
  )
}

export default MyApp
