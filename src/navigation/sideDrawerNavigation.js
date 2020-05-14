import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import BottomTabNavigator from './bottomTabNavigation';
import {SignInNavigator} from './screenStackNavigation';

const DrawerNavigator = createDrawerNavigator({
  Home: BottomTabNavigator,
  Settings: SignInNavigator,
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
