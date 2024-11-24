import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from "expo-router";

const SignUp = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        router.navigate('dashboard');
    };

    const handleForgotPassword = () => {
        router.navigate('ForgotPassword');
    };

    return (
        <ImageBackground
            source={require('../assets/sea.jpg')} 
            style={styles.outerContainer}
            resizeMode="cover" 
        >
            <View style={styles.innerContainer}>
                <Text style={styles.signUp}>Sign Up</Text>
                
                <Text style={styles.label}>Gmail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#000"
                />
                
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#000"
                    secureTextEntry
                />
                
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.forgotPasswordContainer} onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => router.navigate('SignIn')}>
                    <Text style={styles.signInText}>Already have an account? Sign In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    innerContainer: {
        width: '100%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8, 
    },
    signUp: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    button: {
        backgroundColor: '#f4c2c2',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    forgotPasswordContainer: {
        marginTop: 15,
    },
    forgotPasswordText: {
        color: '#007bff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    signInText: {
        marginTop: 20,
        color: '#1E90FF',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default SignUp;
