import '../styles/styles.css';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  <Head>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>FarmVest</title>
    </head>
    <body>
      
    </body>
    </html>
  </Head>
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
