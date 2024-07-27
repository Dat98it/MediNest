import {AppTheme} from '@src/config';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    header: {
      height: 240,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.colors.primary,
      textAlign: 'center',
      marginTop: 50,
    },
    subHeader: {
      fontSize: 16,
      color: theme.text.primary,
      textAlign: 'center',
      marginVertical: 10,
    },
  });
};

export default makeStyles;
