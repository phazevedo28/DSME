import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Details from './screens/Details';
import SIAFEList from './screens/SIAFEList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {props => <Details {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SIAFEList">
          {props => <SIAFEList {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;