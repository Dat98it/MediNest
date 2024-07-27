import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Component</Text>
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
