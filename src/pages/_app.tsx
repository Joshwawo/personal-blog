import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </>
  )
}
