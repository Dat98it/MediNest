import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 30, fontFamily: 'Nunito'},
});
