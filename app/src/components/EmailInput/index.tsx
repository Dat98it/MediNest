import {EmailIcon} from '@src/assets';
import {useAppTheme} from '@src/hooks';
import React, {useState} from 'react';
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

  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, isFocused && styles.focused]}>
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};
