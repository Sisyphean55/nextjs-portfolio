import Navbar from './Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import nProgress from 'nprogress';
const Layout = ({ children, footer = true }) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = url => {
            nProgress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', () => nProgress.done());
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', () => nProgress.done());
        }
    })
    return (
        <>
            <Head>
                <title>Nicolás Pérez- A portfolio</title>
                <meta name="description" content="A FullStack Developer portfolio with a twist" />
            </Head>
            <Navbar />
            <main className='container py-4'>
                {children}
            </main>
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Nicolás Pérez </h1>
                            <p>2022 - {new Date().getFullYear()}</p>
                            <p>Todos los derechos e izquierdos bien puestos.</p>
                        </div>
                    </footer>

                )
            }
        </>
    )
}


export default Layout;