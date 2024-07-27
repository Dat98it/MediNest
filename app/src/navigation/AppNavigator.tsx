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

const AppRootStack = createNativeStackNavigator<AppRootStackParams>();

export const AppNavigator = () => {
  const auth = useSelector(authSelector);

  const locale = useSelector(localeSelector);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          <AppRootStack.Navigator>
            {auth ? (
              <AppRootStack.Screen name={Paths.Home} component={Home} />
            ) : (
              <AppRootStack.Screen
                name={Paths.Authentication}
                component={Authentication}
                options={{headerShown: false}}
              />
            )}
          </AppRootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};
