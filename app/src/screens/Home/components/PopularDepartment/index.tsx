import {DoctorAvatarImage} from '@src/assets';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const items = [
  {title: 'Doctors', image: DoctorAvatarImage},
  {title: 'Video Call', image: DoctorAvatarImage},
  {title: 'Hospital', image: DoctorAvatarImage},
  {title: 'Neurology', image: DoctorAvatarImage},
  {title: 'Laboratory', image: DoctorAvatarImage},
  {title: 'Blood Test', image: DoctorAvatarImage},
  {title: 'Ambulance', image: DoctorAvatarImage},
  {title: 'Dentist', image: DoctorAvatarImage},
];

export const PopularDepartment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Department</Text>
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>SEE ALL</Text>
      </TouchableOpacity>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <View key={index} style={styles.gridItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  seeAllButton: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#007BFF',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '22%',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25, // To make images round
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  itemTitle: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
});
