import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MyIcon} from '@src/assets';
import {RootStackParamList} from '@src/types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <Icon name="comments" size={30} color="green" />
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
