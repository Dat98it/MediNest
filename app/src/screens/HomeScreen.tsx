import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MyIcon} from '@src/assets';
import {RootStackParamList} from '@src/types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <MyIcon />
      <Text style={styles.title}>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Authentication', {itemId: 86})}>
        Go to Authentication
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 30, fontFamily: 'Nunito'},
});
