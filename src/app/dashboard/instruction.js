import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";

const Home = () => {
    return (
        <ImageBackground
            source={require("../../assets/instruction.png")}
            style={styles.imageBackground}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.header}>Welcome to My App Practice!</Text>
                <Text style={styles.welcomeText}>Assignment 2</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        This app consists of a welcome page, signIn/Up, home, profile, settings, bucket list, and biodata.
                    </Text>
                    <Text style={styles.infoText}>
                        I'm using React because it provides a flexible and powerful framework to build native mobile applications.
                    </Text>
                </View>
                <Text style={styles.addInfoText}>
                    Still learning and willing to learn more!
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fffff",
        marginBottom: 20,
        textAlign: "center",
    },
    welcomeText: {
        fontSize: 20,
        color: "#fffff",
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
    },
    infoContainer: {
        padding: 20,
        backgroundColor: "#f4c2c2",
        borderRadius: 8,
        marginBottom: 30,
        width: "90%",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5, // For Android shadow
    },
    infoText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginBottom: 10,
    },
    addInfoText: {
        fontSize: 20,
        color: "#fffff",
        textAlign: "center",
        marginTop: 20,
    },
});

export default Home;
