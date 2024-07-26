import {AppTheme} from '@src/config';
import {useTheme} from 'react-native-paper';

export const useAppTheme = () => useTheme<AppTheme>();
