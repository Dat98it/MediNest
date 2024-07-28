import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Advise = () => {
  return (
    <View style={styles.container}>
      <View style={styles.adviceContainer}>
        <Text style={styles.adviceTitle}>Looking Specialist Doctor?</Text>
        <Text style={styles.adviceDescription}>
          Upload a Prescription and Tell Us what you Need. We do the Rest.!
        </Text>
        <TouchableOpacity style={styles.adviceButton}>
          <Text style={styles.adviceButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.offerContainer}>
        <Text style={styles.offerText}>
          UP TO 80% OFFER* On Health Products
        </Text>
        <Text style={styles.offerSubText}>
          Homeopathy, Ayurvedic, Personal Care & More
        </Text>
        <TouchableOpacity style={styles.offerButton}>
          <Text style={styles.offerButtonText}>SET NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  adviceContainer: {
    backgroundColor: '#E3E8FF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  adviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  adviceDescription: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  adviceButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  adviceButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  offerContainer: {
    backgroundColor: '#DFFFD6',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  offerSubText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  offerButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  offerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
