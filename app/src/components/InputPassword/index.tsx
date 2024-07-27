import {EyeIcon, PasswordIcon} from '@src/assets';
import {useAppTheme} from '@src/hooks';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import makeStyles from './styles';

interface InputPasswordProps extends TextInputProps {
  label?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, isFocused && styles.focused]}>
        <View style={styles.icon}>
          <PasswordIcon />
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity onPress={toggleSecureTextEntry}>
          <View style={styles.eyeIcon}>
            <EyeIcon color={isFocused ? theme.colors.primary : undefined} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
