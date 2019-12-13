import React, { Component } from "react";
import { StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInputLayout } from 'rn-textinputlayout';
import axios from 'axios'
import Logo from "./logo";
 
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    registerUser = () => {
        axios.post('https://reqres.in/api/users', {
            email: this.state.email,
            password: this.state.password
          })
          .then( (response) => {
              Alert.alert('You have registered successfully')
              this.setState({
                  email: '',
                  password: ''
			  })
			  this.props.navigation.navigate("HomeScreen")
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    onEmailChange = (email) => {
        this.setState({
            email: email
        })
    }

    onPasswordChange = (password) => {
        this.setState({
            password: password
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Logo />
                <Text style={styles.registerText}>Register</Text>
                <TextInputLayout
                    style={styles.textinputLayout}
                    checkValid={t => EMAIL_REGEX.test(t)}
                >
                    <TextInput
                        style={styles.inputArea}
                        placeholder={'Email'}
                        onChangeText={this.onEmailChange}
                        value={this.state.email}
                    />
                </TextInputLayout>
                <TextInputLayout 
                style={styles.textinputLayout}>
                    <TextInput
                        style={styles.inputArea}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange}
                        value={this.state.password}
                    />
                </TextInputLayout>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('HomeScreen')}}style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>


				<TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')} style={styles.loginView}>
                    <Text style={styles.accountText}>I have an account</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputArea: {
        fontSize: 16,
        height: 40
    },
    textinputLayout: {
        marginTop: 15,
        marginHorizontal: 30
    },
    button: {
        backgroundColor: '#4796BE',
        padding: 12,
        borderColor:'#4796BE',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 25,
        marginHorizontal: 36
    },
    registerText: {
        fontSize: 20,
        marginHorizontal: 36,
        fontWeight: 'bold'
    },
    loginView:{
        marginLeft:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    }
    ,
    buttonText:{
        color:'white'

    }
})
