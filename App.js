import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './source/screens/Home';
import OpacityScreen from './source/screens/opacity';
import TranslateScreen from './source/screens/translate';
import ScaleScreen from './source/screens/scale';
import WidthHeightScreen from './source/screens/widthHeight';
import BackgroundColorScreen from './source/screens/backgroundColor';
import RotateScreen from './source/screens/rotate';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Opacity" component={OpacityScreen} />
        <Stack.Screen name="Translate" component={TranslateScreen} />
        <Stack.Screen name="Scale" component={ScaleScreen} />  
        <Stack.Screen name="WidthHeight" component={WidthHeightScreen} />  
        <Stack.Screen name="BackgroundColor" component={BackgroundColorScreen} />  
        <Stack.Screen name="Rotate" component={RotateScreen} />  
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
