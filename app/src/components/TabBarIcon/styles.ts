import {AppTheme} from '@src/config';
import {Platform, StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme, focused: boolean) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: 50,
      ...(focused && {
        backgroundColor: theme.colors.primary,
      }),
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 17,
      ...(Platform.OS === 'ios' && {marginTop: 30}),
      paddingTop: 10,
    },
    lineBottom: {
      height: 5,
      width: 20,
      backgroundColor: theme.background.white,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  });

export default makeStyles;
