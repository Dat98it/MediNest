import {useAppTheme} from '@src/hooks';
import React from 'react';
import {useIntl} from 'react-intl';
import {Text, TouchableOpacity, View} from 'react-native';
import {AuthHeader, Button, EmailInput} from '@src/components';
import {useResetPassword} from './hook';
import makeStyles from './styles';

export const ResetPassword = () => {
  const intl = useIntl();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const {goToSignIn} = useResetPassword();

  return (
    <View style={styles.container}>
      <AuthHeader
        title={intl.formatMessage({id: 'reset_pasword'})}
        subTitle={intl.formatMessage({id: 'reset_pasword_description'})}
      />

      <View style={styles.concent}>
        <EmailInput
          label={intl.formatMessage({id: 'email'})}
          placeholder={intl.formatMessage({id: 'email_placeholder'})}
          keyboardType="email-address"
        />

        <Button label={intl.formatMessage({id: 'reset_pasword'})} rightIcon />

        <TouchableOpacity style={styles.link} onPress={goToSignIn}>
          <Text style={styles.linkText}>
            {intl.formatMessage({id: 'goto_sign_in'})}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
