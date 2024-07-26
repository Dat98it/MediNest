import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@src/types';
import React from 'react';
import {Text, View} from 'react-native';

type ParamList = {
  params: RootStackParamList['Authentication'];
};
export const AuthenticationStack = () => {
  const route = useRoute<RouteProp<ParamList, 'params'>>();
  const {itemId, otherParam} = route.params;

  return (
    <View>
      <Text>Authentication Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );
};
