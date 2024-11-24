import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.header}>Welcome to My App Practice!</Text>

            
            <Text style={styles.welcomeText}>This is Activity 4 Lab</Text>

            
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    This app consists of a welcome page, signIn/Up, home, profile, settings, wish, and biodata.
                </Text>
                <Text style={styles.infoText}>
                    I'm using React because it provides a flexible and powerful framework to build native mobile applications.
                </Text>
            </View>

            
            <View style={styles.addInfoContainer}>
                <Text style={styles.addInfoText}>Still learning and willing to learn more!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C8A8E9",
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ffff",
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: "#555",
        marginBottom: 20,
        textAlign: "center",
    },
    infoContainer: {
        padding: 15,
        backgroundColor: "#f5bcba",
        borderRadius: 8,
        elevation: 3,
        marginBottom: 30,
    },
    infoText: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginBottom: 10,
    },

    addInfoContainer: {
        marginTop: 20,
    },
    addInfoText: {
        fontSize: 14,
        color: "#ffff",
        textAlign: "center",
    },
});

export default Home;
