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
import {useIntl} from 'react-intl';

export const SignUp = () => {
  const intl = useIntl();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const {goToSignIn, goToForgotPassword} = useSignUp();

  return (
    <View style={styles.container}>
      <AuthHeader
        title={intl.formatMessage({id: 'sign_up_title'})}
        subTitle={intl.formatMessage({id: 'sign_up_description'})}
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

        <InputPassword
          label={intl.formatMessage({id: 'confirm_password'})}
          placeholder={intl.formatMessage({id: 'confirm_password_placeholder'})}
        />

        <Button label={intl.formatMessage({id: 'sign_up'})} rightIcon />

        <View style={styles.dividerContainer}>
          <HalfDividerIcon />
          <Text style={styles.orText}>{intl.formatMessage({id: 'or'})}</Text>
          <HalfDividerIcon />
        </View>

        <SocialButton />

        <View style={styles.link}>
          <Text>{intl.formatMessage({id: 'aready_account'})}</Text>
          <TouchableOpacity onPress={goToSignIn}>
            <Text style={styles.linkText}>
              {intl.formatMessage({id: 'sign_in'})}
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
