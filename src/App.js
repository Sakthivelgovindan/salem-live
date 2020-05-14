import React from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {
//   createStackNavigator,
//   createBottomTabNavigator,
// } from 'react-navigation-stack';

import Drawer from './navigation/sideDrawerNavigation';

// import Icon from 'react-native-vector-icons/FontAwesome';

// import HomeBoard from './screen/HomeBoard';
// import SignIn from './screen/SignInBoard';
// import SideBar from './screen/SideBar';

// const Tabs = createBottomTabNavigator({
//   Home: {
//     screen: HomeBoard,
//     navigationOptions: {
//       title: 'Home',
//       tabBarIcon: ({tintColor}) => (
//         <Icon name="microchip" size={17} color={tintColor} />
//       ),
//     },
//   },
//   SignIn: {
//     screen: SignIn,
//     navigationOptions: {
//       tabBarLabel: 'SignIn',
//       tabBarIcon: ({tintColor}) => (
//         <Icon name="memory" size={17} color={tintColor} />
//       ),
//     },
//   },
// });

// const Drawer = createDrawerNavigator(
//   {
//     HomeBoard: {
//       screen: HomeBoard,
//     },
//     SignIn: {
//       screen: SignIn,
//     },
//   },
//   {
//     initialRouteName: 'HomeBoard',
//     drawerWidth: 220,
//     drawerBackgroundColor: '#f8b035',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//     contentComponent: (props) => <SideBar {...props} />,
//   },
// );

// const AppNavigator = createStackNavigator(
//   {
//     Drawer: {screen: Drawer},
//     HomeBoard: {screen: HomeBoard},
//   },

//   {
//     initialRouteName: 'Drawer',
//     headerMode: 'none',
//   },
// );

// const AppContainer = createAppContainer(Drawer);

export default () => <Drawer />;
