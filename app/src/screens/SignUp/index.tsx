import {HalfDividerIcon} from '@src/assets';
import {
  AuthHeader,
  Button,
  EmailInput,
  InputPassword,
  SocialButton,
} from '@src/components';
import {useAppTheme} from '@src/hooks';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSignUp} from './hook';
import makeStyles from './styles';

export const SignUp = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const {goToSignIn, goToForgotPassword} = useSignUp();

  return (
    <View style={styles.container}>
      <AuthHeader
        title="Sign Up For Free"
        subTitle={
          'Let’s experience the joy of telehealth Medinest \n All In One App'
        }
      />

      <View style={styles.concent}>
        <EmailInput
          label="Email adress"
          placeholder="Enter your email address..."
          keyboardType="email-address"
        />
        <InputPassword label="Password" placeholder="Enter your password..." />

        <InputPassword
          label="Confirm Password"
          placeholder="Enter your confirm password..."
        />

        <Button label="Sign Up" rightIcon />

        <View style={styles.dividerContainer}>
          <HalfDividerIcon />
          <Text style={styles.orText}>or</Text>
          <HalfDividerIcon />
        </View>

        <SocialButton />

        <View style={styles.link}>
          <Text>You have an account?</Text>
          <TouchableOpacity onPress={goToSignIn}>
            <Text style={styles.linkText}>Sign In.</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.link} onPress={goToForgotPassword}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
