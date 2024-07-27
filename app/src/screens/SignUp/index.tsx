import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});
