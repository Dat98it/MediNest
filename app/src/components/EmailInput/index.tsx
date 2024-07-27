import {EmailIcon} from '@src/assets';
import {useAppTheme} from '@src/hooks';
import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import makeStyles from './styles';

interface InputProps extends TextInputProps {
  label?: string;
}

export const EmailInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}: InputProps) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <EmailIcon />
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};
