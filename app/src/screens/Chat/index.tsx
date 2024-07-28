import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Chat component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
