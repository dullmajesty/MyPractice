import React, { useState } from "react"; 
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { router } from "expo-router"; // Consistent navigation
import { supabase } from "../lib/supabase"; // Import your Supabase client
import Icon from 'react-native-vector-icons/Feather'; // Import Feather Icons for eye toggle

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // State to control visibility of the password input fields
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // New state for confirm password visibility
    const [loading, setLoading] = useState(false); // State for loading (disable button during sign-up)

    const handleSignUp = async () => {
        if (!fullName || !email || !password || !confirmPassword) {
            Alert.alert("Error", "Please fill out all fields.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match!");
            return;
        }

        setLoading(true); // Set loading to true to disable button and show a loading state
        try {
            // Sign up user using Supabase Auth
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error("Sign Up Error:", error);
                Alert.alert("Sign Up Error", error.message);
                setLoading(false); // Reset loading state
                return;
            }

            // Get the user ID from Supabase Auth
            const userId = data.user?.id;
        
            if (userId) {
                // Insert additional user details into the `users` table
                const { error: dbError } = await supabase.from("users").insert([{
                    auth_id: userId, 
                    full_name: fullName,
                    email: data.user?.email,
                }]);
        
                if (dbError) {
                    console.error("Database Insertion Error:", dbError);
                    Alert.alert("Database Error", dbError.message);
                    setLoading(false); // Reset loading state
                    return;
                }

                // Success alert after successful sign-up
                Alert.alert(
                    "Success",
                    "Account created successfully! Please check your email to confirm your account."
                );
                router.push("SignIn"); // Redirect to SignIn screen
            } else {
                Alert.alert("Error", "User ID not available. Please try again.");
                setLoading(false); // Reset loading state
            }
        } catch (error) {
            console.error("Sign Up Error:", error);
            Alert.alert("Error", "An unexpected error occurred. Please try again.");
            setLoading(false); // Reset loading state
        }
    };

    return (
        <ImageBackground
            source={require("../assets/pink.png")}
            style={styles.outerContainer}
            resizeMode="cover"
        >
            <View style={styles.innerContainer}>
                <Text style={styles.signUp}>Sign Up</Text>

                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor="#666"
                    value={fullName}
                    onChangeText={setFullName}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#666"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#666"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword} // Conditionally secure text entry
                    />
                    <TouchableOpacity 
                        style={styles.eyeIcon} 
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm your password"
                        placeholderTextColor="#666"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword} // Conditionally secure text entry
                    />
                    <TouchableOpacity 
                        style={styles.eyeIcon} 
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={[styles.button, loading && { opacity: 0.5 }]} 
                    onPress={handleSignUp} 
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>{loading ? "Signing Up..." : "Sign Up"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("SignIn")}>
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
    },
    innerContainer: {
        width: '90%',
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
        alignSelf: 'flex-start',
        marginTop: 10,
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
        marginBottom: 10, 
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
    signInText: {
        marginTop: 15,
        color: '#1E90FF',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default SignUp;
