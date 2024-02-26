import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const restLink = new RestLink({uri: 'http://localhost:5132/api/'});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
