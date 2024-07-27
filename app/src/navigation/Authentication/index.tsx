import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Paths} from '@src/constans';
import {ForgotPassword, SignIn, SignUp} from '@src/screens';
import {AuthenticationRootStack} from '@src/types';
import React from 'react';

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationRootStack>();

export const Authentication = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName={Paths.SignIn}
      screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen name={Paths.SignIn} component={SignIn} />

      <AuthenticationStack.Screen name={Paths.SignUp} component={SignUp} />

      <AuthenticationStack.Screen
        name={Paths.ForgotPassword}
        component={ForgotPassword}
      />
    </AuthenticationStack.Navigator>
  );
};
