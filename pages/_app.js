import '../styles/globals.css'
import Layout from "../components/layout/layout"
import "../css/hamburger.css"
import "../style/all.min.css"
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    <Component {...pageProps} />
  </Layout>

  )
   
}

export default MyApp
