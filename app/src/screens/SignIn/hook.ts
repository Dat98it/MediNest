import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Paths} from '@src/constans';
import {AuthenticationRootStack} from '@src/types';

export const useSignIn = () => {
  const navigation = useNavigation<NavigationProp<AuthenticationRootStack>>();

  const goToSignup = () => {
    navigation.navigate(Paths.SignUp);
  };

  const goToForgotPassword = () => {
    navigation.navigate(Paths.ForgotPassword);
  };

  return {goToSignup, goToForgotPassword};
};
