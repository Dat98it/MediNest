import {AppTheme} from '@src/config';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    headerContainer: {
      marginTop: 10 + inset.top,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 70,
    },
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    subGreeting: {
      fontSize: 16,
      color: 'gray',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.background.gray,
      borderRadius: 10,
      padding: 10,
      marginVertical: 20,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      height: 40,
      justifyContent: 'center',
    },
    searchInputLabel: {
      color: theme.text.gray,
    },
    searchIconContainer: {
      marginLeft: 10,
    },
    notificationIconContainer: {
      padding: 10,
      backgroundColor: theme.background.gray,
      borderRadius: 10,
    },
    dotNotification: {
      height: 10,
      width: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      position: 'absolute',
      top: 10,
      right: 12,
    },
  });

export default makeStyles;
