import {ArrowLeftIcon} from '@src/assets';
import {useAppTheme} from '@src/hooks';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import makeStyles from './styles';

type Props = {
  label: string;
  rightIcon?: boolean;
  onPress?: () => void;
};

export const Button = ({label, rightIcon, onPress}: Props) => {
  const theme = useAppTheme();

  const styles = makeStyles(theme);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>

      {rightIcon && <ArrowLeftIcon />}
    </TouchableOpacity>
  );
};
