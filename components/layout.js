import Head from 'next/head';
import Footer from './footer';
import Header from './header';

//El children que le pasemos sera un componente que se renderice dentro de el
function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
