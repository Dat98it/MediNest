import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FacebookIcon, GoogleIcon, InstagramIcon} from '@src/assets';
import {AppRootStackParams} from '@src/types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

type HomeStackNavigationProp = NativeStackNavigationProp<
  AppRootStackParams,
  'Home'
>;

export const Home = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  return (
    <View>
      <FacebookIcon />
      <GoogleIcon />
      <InstagramIcon />
      <Text style={styles.title}>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Authentication')}>
        Go to Authentication
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 30, fontFamily: 'Nunito'},
});
