import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Button,
  ScrollView,
} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { albums,comments,todos } from '../networks/networkcalls';

class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      array: [],
    }
  }

  componentWillMount() {
    todos()
      .then((res) => {
        this.setState({
          array: res.data,
        });
      });


  }
  render() {
    return (
      <ScrollView>
        <Button onPress={this._logout} title="Logout" />
        {this.state.array.map(array => (
          <View>
          <Text> I'd {array.id}</Text>
          <Text>Title {array.title}</Text>
          <Text>{array.completed}</Text>
          </View>


         )) }
      </ScrollView>
    );
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}


class CommentScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      array: [],
    }
  }

  componentWillMount() {
    comments()
      .then((res) => {
        this.setState({
          array: res.data,
        });
      });


  }
  render() {
    return (
      <ScrollView>
      <Button onPress={this._logout} title="Logout" />
      {this.state.array.map(array => (
        <View>

        <Text>{array.id}</Text>
        <Text>{array.name}</Text>
        <Text>{array.email}</Text>
        <Text>{array.body}</Text>
        </View>


       )) }
    </ScrollView>
    );
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}

class photoScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      array: [],
    }
  }

  componentWillMount() {
    albums()
      .then((res) => {
        this.setState({
          array: res.data,
        });
      });


  }

  render() {
    return (

      <ScrollView>
      <Button onPress={this._logout} title="Logout" />
      {this.state.array.map(array => (
        <View>

        <Text>{array.id}</Text>
        <Text>{array.title}</Text>
        </View>

       )) }
    </ScrollView>
    );
  }

  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  
}




export default createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },


  Settings: {
    screen: CommentScreen,
    navigationOptions: {
      tabBarLabel: 'Comment',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-comment" color={tintColor} size={24} />
      )
    }

  },

  Photo: {
    screen: photoScreen,
    navigationOptions: {
      tabBarLabel: 'Albums',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-albums" color={tintColor} size={24} />
      )
    }
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
