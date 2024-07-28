import {DoctorAvatarImage} from '@src/assets';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const items = [
  {
    title: 'Nutritional Drinks',
    // image: require('./path/to/nutritional_drinks_image.png'),
    image: DoctorAvatarImage,
  },
  {title: 'Ayurveda', image: DoctorAvatarImage},
  {
    title: 'Vitamins & Supplement',
    image: DoctorAvatarImage,
  },
  {
    title: 'Healthcare Devices',
    image: DoctorAvatarImage,
  },
  {title: 'Homeopathy', image: DoctorAvatarImage},
  {title: 'Diabetes Care', image: DoctorAvatarImage},
];

export const PopularMedicine = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Medicine</Text>
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
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
});
