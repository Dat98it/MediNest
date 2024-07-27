import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password Component</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
});
