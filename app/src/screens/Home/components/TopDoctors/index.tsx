import {DoctorAvatarImage} from '@src/assets';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const doctors = [
  {
    name: 'Dr. James Smith',
    specialty: 'Cardiology',
    degree: 'MBBS, PHD',
    rating: 4.8,
    reviews: 1300,
    image: DoctorAvatarImage,
  },
  {
    name: 'Dr. Emily Taylor',
    specialty: 'Psychiatrist',
    degree: 'MBBS, PHD',
    rating: 4.7,
    reviews: 1200,
    image: DoctorAvatarImage,
  },
  {
    name: 'Dr. Emily Taylor',
    specialty: 'Psychiatrist',
    degree: 'MBBS, PHD',
    rating: 4.7,
    reviews: 1200,
    image: DoctorAvatarImage,
  },
];

export const TopDoctors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Doctors</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>

      {doctors.map((item, idx) => {
        return (
          <View key={idx} style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.specialty}>{item.specialty}</Text>
              <Text style={styles.degree}>{item.degree}</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={14} color="#FFD700" />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.reviews}>({item.reviews})</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  seeAllText: {
    fontSize: 14,
    color: '#007BFF',
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  degree: {
    fontSize: 12,
    color: '#999',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    marginLeft: 4,
    color: '#666',
  },
  reviews: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4,
  },
});
