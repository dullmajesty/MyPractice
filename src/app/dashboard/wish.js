import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Wish = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>🎄 My Christmas Wish 🎅</Text>
                <Text style={styles.wishText}>
                    My wish for this Christmas is for others to heal from any pain they are suffering right now. I also wish for the good health of my parents.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C8A8E9", 
        padding: 20,
    },
    container: {
        width: "90%", 
        backgroundColor: "#ffff", 
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#e3aadd", 
        textAlign: "center",
    },
    wishText: {
        fontSize: 18,
        color: "#333",
        textAlign: "center",
    },
});

export default Wish;
