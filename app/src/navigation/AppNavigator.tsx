import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationStack, HomeScreen} from '@src/screens';
import {PaperProvider} from 'react-native-paper';
import {DefaultTheme} from '@src/config';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Authentication" component={AuthenticationStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
