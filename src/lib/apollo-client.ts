import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = () => {
  let uri = 'http://localhost:3000/api/graphql';

  if (process.env.NODE_ENV === 'production') {
    uri = 'https://prp-nine.vercel.app//api/graphql';
  }

  return new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  });
};

export default client;
