import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {Provider} from 'react-redux';

import Navigation from './navigation';
import {store} from './store/store';

const config = {
  screens: {
    Auth: {
      screens: {
        Home: 'Home',
        Settings: 'Settings',
      },
    },
  },
};

const linking = {
  prefixes: ['http://localhost:3000'],
  config,
};

const App = () => {
  // const backgroundStyle = {};

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
