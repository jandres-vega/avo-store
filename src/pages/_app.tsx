import { AppProps } from 'next/app'
import Layout from "@/components/Layout/Layout";
import '../../globals.css';

// import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
    // Aditional props
    // Aditional layout
    // Manejar errores - componentDidCatch
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
