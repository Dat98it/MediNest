/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {DefaultTheme} from '@src/config';
import {useSelector} from 'react-redux';
import {authSelector, localeSelector} from '@src/redux/reducer';
import {AppRootStackParams} from '@src/types';
import {Paths} from '@src/constans';
import {Home} from './Home';
import {Authentication} from './Authentication';
import {IntlProvider} from 'react-intl';
import {messages} from '@src/locale';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from '@src/components';

const AppRootStack = createNativeStackNavigator<AppRootStackParams>();
const DrawerStack = createDrawerNavigator();

export const AppNavigator = () => {
  const auth = useSelector(authSelector);

  const locale = useSelector(localeSelector);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          {auth ? (
            <DrawerStack.Navigator
              useLegacyImplementation={false}
              drawerContent={props => <CustomDrawerContent {...props} />}
              screenOptions={{
                headerShown: false,
              }}>
              <DrawerStack.Screen name="Home" component={Home} />
            </DrawerStack.Navigator>
          ) : (
            <AppRootStack.Navigator>
              <AppRootStack.Screen
                name={Paths.Authentication}
                component={Authentication}
                options={{headerShown: false}}
              />
            </AppRootStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};
