import '../styles/globals.css'
import Footer from './Footer'
import Navbar from './navbar'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
