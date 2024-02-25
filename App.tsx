import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {store} from '@redux/store';
import MainNavigator from './src/navigator';
import {Provider} from 'react-redux';
import {client} from './src/graphQL/rest';
import 'react-native-devsettings';
import 'react-native-devsettings/withAsyncStorage';

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MainNavigator />
      </ApolloProvider>
    </Provider>
  );
};
export default App;
