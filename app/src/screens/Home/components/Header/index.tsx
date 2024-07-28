import {useAppTheme} from '@src/hooks';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import makeStyles from './styles';

export const Header = () => {
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Hi Jhalok</Text>
          <Text style={styles.subGreeting}>Good Morning!</Text>
        </View>

        <TouchableOpacity style={styles.notificationIconContainer}>
          <Feather name="bell" size={25} color="black" />
          <View style={styles.dotNotification} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Text style={styles.searchInputLabel}>Search Doctors</Text>
        </View>
        <View style={styles.searchIconContainer}>
          <Ionicons disabled name="settings-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </>
  );
};
