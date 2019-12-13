import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 66, height: 58 }}
                    source={require('../Images/logo.png')} />
                <Text style={styles.logoText}>Welcome to My app.</Text>

            </View>
        )
    }
}

export default Logo

const styles = StyleSheet.create({
    container: {
        padding:50,
        // flexGrow: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'black'
    }
});
