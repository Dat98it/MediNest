import {AppTheme} from '@src/config';
import {StyleSheet} from 'react-native';

const makeStyles = (_: AppTheme) =>
  StyleSheet.create({
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 36,
    },
    socialIcon: {
      width: 50,
      height: 50,
      marginHorizontal: 10,
    },
  });

export default makeStyles;
