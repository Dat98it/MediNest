import {AppTheme} from '@src/config';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background.primary,
    },
    concent: {flex: 1, padding: 24},
    dividerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
    },
    orText: {
      textAlign: 'center',
      color: theme.text.gray2,
      marginHorizontal: 16,
      marginVertical: 20,
    },

    link: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 5,
      marginVertical: 10,
    },
    linkText: {
      color: theme.colors.primary,
    },
  });

export default makeStyles;
