import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {View, Text} from 'react-native';
import MainNavigator from './src/navigator';
import {Provider} from 'react-redux';
import {client} from './src/graphQL/rest';
import {store} from './src/redux/store';

const App = () => {
  return (
    // <Provider store={store}>
    <ApolloProvider client={client}>
      <MainNavigator />
    </ApolloProvider>
    // </Provider>
  );
};
export default App;
