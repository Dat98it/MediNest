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
import makeStyles from './styles';
import {useSignIn} from './hook';

export const SignIn = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const {goToSignup, goToForgotPassword} = useSignIn();

  return (
    <View style={styles.container}>
      <AuthHeader
        title="Sign In"
        subTitle="Log in to access your personalized Medinest experience"
      />

      <View style={styles.concent}>
        <EmailInput
          label="Email adress"
          placeholder="Enter your email address..."
          keyboardType="email-address"
        />
        <InputPassword label="Password" placeholder="Enter your password..." />

        <Button label="Sign In" rightIcon />

        <View style={styles.dividerContainer}>
          <HalfDividerIcon />
          <Text style={styles.orText}>or</Text>
          <HalfDividerIcon />
        </View>

        <SocialButton />

        <View style={styles.link}>
          <Text>Don’t have an account?</Text>
          <TouchableOpacity onPress={goToSignup}>
            <Text style={styles.linkText}>Sign Up.</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.link} onPress={goToForgotPassword}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
