import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const restLink = new RestLink({uri: 'http://192.168.1.2:8082/api/'});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache({
    possibleTypes: {
      DataCategory: ['GET_PRODUCT_BY_CATE'],
      DataOrder: ['LIST_PRODUCT'],
      DataTopping: ['GET_ALL_TOPPING'],
    },
  }),
  connectToDevTools: true,
});
