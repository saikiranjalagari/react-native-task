import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Signin from './src/screens/login'
// import Signup from './src/screens/register.screen'
import HomeScreen from './src/screens/home'
import { ActivityIndicator, StatusBar, StyleSheet, AsyncStorage,View } from 'react-native';
import Signup from "./src/screens/register";

// const RootStack = createStackNavigator({
//   Signup: {
//     screen: Signup
//   },
//   // Signin: {
//   //   screen: Signin,
//   // },
//   Dashboard: {
//     screen: Dashboard
//   }
// });

const RootStack = createStackNavigator(
  {

    // Dashboard:Dashboard,
    HomeScreen:HomeScreen,
    Signup:Signup

}

);



const Authstack = createStackNavigator({Signin:Signin})

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this._loadData();


  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>

    );
  }

  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }

})


export default createAppContainer(createSwitchNavigator(
  
  {

  AuthLoading: AuthLoadingScreen,
  App: RootStack,
  Auth: Authstack,

},
  {
    initialRouteName: 'AuthLoading'
  }


))