/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarIcon} from '@src/components';
import {AppTheme} from '@src/config';
import {HomeStacks} from '@src/constans';
import {useAppTheme} from '@src/hooks';
import {Chat, Home, Medicine, Profile} from '@src/screens';
import {BottomRootStack} from '@src/types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<BottomRootStack>();

export const BottomStackScreen = () => {
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: props => <TabBarIcon routeName={route.name} {...props} />,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      })}>
      <Tab.Screen name={HomeStacks.Home}>{() => <Home />}</Tab.Screen>

      <Tab.Screen name={HomeStacks.Chat}>{() => <Chat />}</Tab.Screen>

      <Tab.Screen name={HomeStacks.Medicine}>{() => <Medicine />}</Tab.Screen>

      <Tab.Screen name={HomeStacks.Profile}>{() => <Profile />}</Tab.Screen>
    </Tab.Navigator>
  );
};

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    tabBarStyle: {
      backgroundColor: theme.colors.primary,
      height: 70 + inset.bottom,
    },
  });
