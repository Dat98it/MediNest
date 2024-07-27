import {FacebookIcon, GoogleIcon, InstagramIcon} from '@src/assets';
import {useAppTheme} from '@src/hooks';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';

export const SocialButton = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.socialIcon}>
        <FacebookIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialIcon}>
        <GoogleIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialIcon}>
        <InstagramIcon />
      </TouchableOpacity>
    </View>
  );
};
