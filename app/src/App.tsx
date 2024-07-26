/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {persistor, store} from '@src/redux/store';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AppNavigator} from '@src/navigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
