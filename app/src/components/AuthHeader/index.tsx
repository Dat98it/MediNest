import {AuthHeaderImage} from '@src/assets';
import {useAppTheme} from '@src/hooks';
import React from 'react';
import {ImageBackground, Text} from 'react-native';
import makeStyles from './styles';

type Props = {
  title: string;
  subTitle: string;
};

export const AuthHeader = ({title, subTitle}: Props) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <ImageBackground source={AuthHeaderImage} style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.subHeader}>{subTitle}</Text>
    </ImageBackground>
  );
};
