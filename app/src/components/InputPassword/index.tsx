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

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <PasswordIcon />
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={toggleSecureTextEntry}>
          <View style={styles.eyeIcon}>
            <EyeIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
