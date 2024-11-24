import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../assets/sea.jpg')} style={styles.backgroundImage} />
            <View style={styles.overlay} />
            <Text style={styles.title}>Welcome!</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay for better text visibility
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    button: {
        backgroundColor: '#f4c2c2', // A more vibrant color
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30, // More rounded corners for a modern look
        marginVertical: 10,
        elevation: 5, // Adds a shadow effect on Android
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600', // Slightly bolder text
    },
});

export default Welcome;
