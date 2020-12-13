import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SelectionScreen from '../screens/SelectionScreen';
import Opacity from '../screens/Opacity';
import Translate from '../screens/Translate';
import Scale from '../screens/Scale';
import WidthHeight from '../screens/WidthHeight';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="Opacity" component={Opacity} />
        <Stack.Screen name="Translate" component={Translate} />
        <Stack.Screen name="Scale" component={Scale} />
        <Stack.Screen name="WidthHeight" component={WidthHeight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
