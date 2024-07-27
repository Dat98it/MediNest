import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Paths} from '@src/constans';
import {AuthenticationRootStack} from '@src/types';

export const useSignUp = () => {
  const navigation = useNavigation<NavigationProp<AuthenticationRootStack>>();

  const goToSignIn = () => {
    navigation.navigate(Paths.SignIn);
  };

  const goToForgotPassword = () => {
    navigation.navigate(Paths.ForgotPassword);
  };

  return {goToSignIn, goToForgotPassword};
};
