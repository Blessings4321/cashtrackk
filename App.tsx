import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import createNativeStackNavigator from '@react-navigation/native-stack/lib/typescript/src/navigators/createNativeStackNavigator';

import {Provider} from 'react-redux';
import store from './src/store'


import HomeScreen from './src/components/HomeScreen'
import AddTransaction from './src/components/AddTransaction';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Cash Track'
        }} />
        <Stack.Screen name="Add" component={AddTransaction} options={{
          title: "Add expense"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;