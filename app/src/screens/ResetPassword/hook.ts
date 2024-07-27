import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Paths} from '@src/constans';
import {AuthenticationRootStack} from '@src/types';

export const useResetPassword = () => {
  const navigation = useNavigation<NavigationProp<AuthenticationRootStack>>();

  const goToSignIn = () => {
    navigation.navigate(Paths.SignIn);
  };

  return {goToSignIn};
};
