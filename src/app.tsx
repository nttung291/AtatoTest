import React, { useEffect } from 'react';
import { ActivityIndicator, NativeModules } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as PaperProvider } from 'react-native-paper';
import { AppNavigator } from './navigators';
import { CombinedDefaultTheme } from './theme';
import { store, persistor } from './redux/store';
const { CryptographicModule } = NativeModules;

const App = () => {
  useEffect(() => {
    CryptographicModule.loadKeys();
  }, [])

  return (
    <Provider store={store}>
      <PersistGate
          loading={<ActivityIndicator size="large" />}
          persistor={persistor}
        >
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PaperProvider theme={CombinedDefaultTheme}>
          <AppNavigator theme={CombinedDefaultTheme} />
        </PaperProvider>
      </SafeAreaProvider>
      </PersistGate>
    </Provider>
   
  );
};

export default App;
