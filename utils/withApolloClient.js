import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

export const ENDPOINT = `http://localhost:4444`;

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? ENDPOINT : ENDPOINT,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
