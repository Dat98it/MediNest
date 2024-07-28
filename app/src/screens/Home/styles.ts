import {AppTheme} from '@src/config';
import {StyleSheet} from 'react-native';

const makeStyles = (_: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    content: {paddingBottom: 24, gap: 24},
  });

export default makeStyles;
