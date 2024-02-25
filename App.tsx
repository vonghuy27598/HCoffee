import React from 'react';
import {ApolloProvider} from '@apollo/client';
import MainNavigator from './src/navigator';
import {Provider} from 'react-redux';
import {client} from './src/graphQL/rest';
import {store} from './src/redux/store';
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
