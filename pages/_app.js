import Providers from 'next-auth/providers'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Providers session={pageProps.session}>
        <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
