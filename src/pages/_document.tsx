import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/image/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="image/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="image/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="image/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;