import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from "expo-router";
import { supabase } from '../lib/supabase'; 
import Icon from 'react-native-vector-icons/Feather'; // Import Feather Icons for eye toggle

const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in both email and password fields.");
            return;
        }

        setIsSubmitting(true); // Disable button while submitting
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                let errorMessage = "An unexpected error occurred.";
                
                // Check for specific error codes or conditions
                if (error.message.includes("invalid")) {
                    errorMessage = "Invalid email or password. Please try again.";
                }
                
                Alert.alert("Sign In Error", errorMessage);
            } else {
                if (data.user?.email_confirmed_at) {
                    Alert.alert("Success", "Welcome back!");
                    router.navigate('dashboard');
                } else {
                    Alert.alert("Email Not Verified", "Please verify your email first.");
                }
            }
        } catch (error) {
            console.error("Sign In Error:", error.message);
            Alert.alert("Error", "An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false); // Re-enable button after submission
        }
    };

    const handleForgotPassword = () => {
        router.navigate('ForgotPassword');
    };

    return (
        <ImageBackground
            source={require('../assets/pink.png')} 
            style={styles.outerContainer}
            resizeMode="cover"
        >
            <View style={styles.innerContainer}>
                <Text style={styles.signUp}>Sign In</Text>
                
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#000"
                    value={email}
                    onChangeText={setEmail}
                />
                
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#000"
                        secureTextEntry={!showPassword} // Toggle password visibility
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                        <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#666" />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={[styles.button, isSubmitting && { opacity: 0.5 }]} onPress={handleSignIn} disabled={isSubmitting}>
                    <Text style={styles.buttonText}>{isSubmitting ? "Signing In..." : "Sign In"}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.forgotPasswordContainer} onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => router.navigate('SignUp')}>
                    <Text style={styles.signInText}>Don't have an account? Sign Up</Text>
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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
    button: {
        backgroundColor: '#f4c2c2',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', 
        borderBottomWidth: 3, 
        borderBottomColor: '#d1a1a1', 
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

export default SignIn;
