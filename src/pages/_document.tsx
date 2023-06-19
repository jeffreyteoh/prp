import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" /> */}
          <link rel="shortcut icon" href="/image/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="image/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="image/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="image/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <script src='js/particles.min.js' />
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