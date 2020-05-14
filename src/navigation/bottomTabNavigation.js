import React from 'react';
import Ionicons from 'react-native-ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  HomeNavigator,
  SignInNavigator,
  FeedNavigator,
  LoginNavigator,
  CreatePostNavigator,
} from './screenStackNavigation';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'home-sharp';
  } else if (routeName === 'Feed') {
    iconName = 'albums';
  } else if (routeName === 'Create') {
    iconName = 'add-circle';
  } else if (routeName === 'SignIn') {
    iconName = 'albums';
  } else if (routeName === 'Login') {
    iconName = 'home-sharp';
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Feed: FeedNavigator,
    Create: CreatePostNavigator,
    SignIn: SignInNavigator,
    Login: LoginNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

export default BottomTabNavigator;
