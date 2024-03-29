import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {store} from '@redux/store';
import {Provider} from 'react-redux';
import {client} from './src/graphQL/rest';
import 'react-native-gesture-handler';
import 'react-native-devsettings';
import 'react-native-devsettings/withAsyncStorage';
import MainNavigator from '@navigator/MainNavigator';
import {PortalProvider} from '@gorhom/portal';

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PortalProvider>
          <MainNavigator />
        </PortalProvider>
      </ApolloProvider>
    </Provider>
  );
};
export default App;
