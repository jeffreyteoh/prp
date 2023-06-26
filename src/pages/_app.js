import '../less/global.less';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Analytics />
    </ApolloProvider>
  );
}
