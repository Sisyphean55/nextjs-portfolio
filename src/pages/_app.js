import 'bootswatch/dist/darkly/bootstrap.min.css';
import '../global.css';
import { SessionProvider } from "next-auth/react"

export default function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
};