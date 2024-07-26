import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/types';
import React from 'react';
import {Button, Text, View} from 'react-native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Authentication"
        onPress={() => navigation.navigate('Authentication', {itemId: 86})}
      />
    </View>
  );
};
