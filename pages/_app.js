import '../styles/styles.css';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  
  return(
    <Layout>
      <Head>
        <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>FarmVest</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
