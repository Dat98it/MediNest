import {useAppTheme} from '@src/hooks';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  Advise,
  Header,
  PopularDepartment,
  PopularMedicine,
  TopDoctors,
} from './components';
import makeStyles from './styles';

export const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={styles.content}>
          <Advise />

          <PopularMedicine />

          <PopularDepartment />

          <TopDoctors />
        </View>
      </ScrollView>
    </View>
  );
};
