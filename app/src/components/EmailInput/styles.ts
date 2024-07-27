import {AppTheme} from '@src/config';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text.gray,
      marginBottom: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.background.gray,
      borderRadius: 16,
      paddingHorizontal: 10,
      minHeight: 53,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 50,
      fontSize: 16,
      color: theme.text.gray,
    },
  });

export default makeStyles;
