import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SelectionScreen from '../screens/SelectionScreen';
import Opacity from '../screens/Opacity';
import Translate from '../screens/Translate';
import Scale from '../screens/Scale';
import WidthHeight from '../screens/WidthHeight';
import Absolute from '../screens/Absolute';
import ColorInterpolation from '../screens/ColorInterpolation';
import RotateInterpolation from '../screens/RotateInterpolation';
import PercentageHeightWidth from '../screens/PercentageHeightWidth';
import Easing from '../screens/Easing';

import { navigationRef } from '../utils/navigation';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="Opacity" component={Opacity} />
        <Stack.Screen name="Translate" component={Translate} />
        <Stack.Screen name="Scale" component={Scale} />
        <Stack.Screen name="WidthHeight" component={WidthHeight} />
        <Stack.Screen name="Absolute" component={Absolute} />
        <Stack.Screen
          name="ColorInterpolation"
          component={ColorInterpolation}
        />
        <Stack.Screen
          name="RotateInterpolation"
          component={RotateInterpolation}
        />
        <Stack.Screen
          name="PercentageWidthHeight"
          component={PercentageHeightWidth}
        />
        <Stack.Screen name="Easing" component={Easing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
