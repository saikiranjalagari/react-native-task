import React, { Component } from "react";
import { StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, Alert ,AsyncStorage} from 'react-native';
import { TextInputLayout } from 'rn-textinputlayout';
import axios from 'axios'
import Logo from "./logo";
 
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userInfo ={email:'admin',password:'12345678'}

export default class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    loginUser = () => {
        axios.post('https://reqres.in/api/users', {
            email: this.state.email,
            password: this.state.password
          })
          .then( (response) => {
			  Alert.alert('You have logged in successfully')
			  
              this.setState({
                email: '',
                password: ''
            })
			this.props.navigation.navigate('HomeScreen')
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
                <Text style={styles.loginText}>Login</Text>
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
                <TextInputLayout style={styles.textinputLayout}>
                    <TextInput
                        style={styles.inputArea}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange}
                        value={this.state.password}
                    />
                </TextInputLayout>
                <TouchableOpacity 
                // onPress={() => {this.props.navigation.navigate('Dashboard')}} 
                onPress={this._login}
                
                style={styles.button}>
                    <Text style={styles.buttonText}>Signin</Text>
                </TouchableOpacity>

				<TouchableOpacity onPress={() => {this.props.navigation.navigate('Signup')}} style={styles.registerButton}>
                    <Text>Don't have an account</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }

    _login = async () =>{
        if(userInfo.email === this.state.email && userInfo.password === this.state.password){
            await AsyncStorage.setItem('isLoggedIn','1');
            this.props.navigation.navigate('HomeScreen');
            // alert('logged in')
        }
        else{
            alert('worng email and password please use username as admin and password as 12345678')
        }
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
        marginHorizontal: 32
    },
    button: {
        backgroundColor: '#4796BE',
        padding: 12,
        borderColor:'#4796BE',
        alignItems: 'center',
        justifyContent: 'center',
        color:'white',
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 25,
        marginHorizontal: 36,
    },
    loginText: {
        fontSize: 20,
        marginHorizontal: 36,
        fontWeight: 'bold'
    },
    registerButton:{
        marginLeft:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    },
    buttonText:{
        color:'white'

    }
})
