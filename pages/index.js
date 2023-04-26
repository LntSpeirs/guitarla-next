import Head from 'next/head';
import Layout from '../components/layout.js';

export default function Home() {
  return (
    <>
      <Head></Head>
      <Layout title={'Inicio'} description={'Blog de música, venta de guitarras y más.'}>
        <h1>Hola next</h1>
      </Layout>
    </>
  );
}
