import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const restLink = new RestLink({uri: 'http://192.168.1.7:8080/api/'});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
