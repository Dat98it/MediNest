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
import {useIntl} from 'react-intl';

export const SignIn = () => {
  const intl = useIntl();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const {goToSignup, goToForgotPassword} = useSignIn();

  return (
    <View style={styles.container}>
      <AuthHeader
        title={intl.formatMessage({id: 'sign_in'})}
        subTitle={intl.formatMessage({id: 'sign_in_description'})}
      />

      <View style={styles.concent}>
        <EmailInput
          label={intl.formatMessage({id: 'email'})}
          placeholder={intl.formatMessage({id: 'email_placeholder'})}
          keyboardType="email-address"
        />
        <InputPassword
          label={intl.formatMessage({id: 'password'})}
          placeholder={intl.formatMessage({id: 'password_placeholder'})}
        />

        <Button label={intl.formatMessage({id: 'sign_in'})} rightIcon />

        <View style={styles.dividerContainer}>
          <HalfDividerIcon />
          <Text style={styles.orText}>{intl.formatMessage({id: 'or'})}</Text>
          <HalfDividerIcon />
        </View>

        <SocialButton />

        <View style={styles.link}>
          <Text>{intl.formatMessage({id: 'dont_have_account'})}</Text>
          <TouchableOpacity onPress={goToSignup}>
            <Text style={styles.linkText}>
              {intl.formatMessage({id: 'sign_up'})}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.link} onPress={goToForgotPassword}>
          <Text style={styles.linkText}>
            {intl.formatMessage({id: 'forgot_password'})}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
