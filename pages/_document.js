import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="GuitarLA - Venta de guitarras y blog de musica"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Titillium+Web:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
