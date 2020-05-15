import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './../screen/HomeBoard';
import SignInBoard from './../screen/SignInBoard';
import LoginBoard from './../screen/LoginBoard';
import FeedBoard from './../screen/FeedBoard';
import CreatePostBoard from './../screen/CreatePostBoard';

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

export const SignInNavigator = createStackNavigator({
  SignIn: {screen: SignInBoard},
});

export const LoginNavigator = createStackNavigator({
  Login: {screen: LoginBoard},
});

export const FeedNavigator = createStackNavigator({
  Feed: {screen: FeedBoard},
});

export const CreatePostNavigator = createStackNavigator({
  Create: {screen: CreatePostBoard},
});
