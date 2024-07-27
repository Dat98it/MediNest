import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Authentication, Home} from '@src/screens';
import {PaperProvider} from 'react-native-paper';
import {DefaultTheme} from '@src/config';
import {useSelector} from 'react-redux';
import {authSelector} from '@src/redux/reducer';
import {AppRootStackParams} from '@src/types';
import {AppRouterName} from '@src/constans';

const AppRootStack = createNativeStackNavigator<AppRootStackParams>();

export const AppNavigator = () => {
  const auth = useSelector(authSelector);

  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <AppRootStack.Navigator>
          {auth ? (
            <AppRootStack.Screen
              name={AppRouterName.Home}
              component={Home}
              options={{headerShown: false}}
            />
          ) : (
            <AppRootStack.Screen
              name={AppRouterName.Authentication}
              component={Authentication}
              options={{headerShown: false}}
            />
          )}
        </AppRootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
