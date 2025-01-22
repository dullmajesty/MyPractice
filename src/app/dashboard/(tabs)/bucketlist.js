import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const BucketList = () => {
    return (
        <ImageBackground
            source={require("../../../assets/bucketlist.png")}
            style={styles.imageBackground}
            resizeMode="cover"
        >
            <View style={styles.outerContainer}>
                <View style={styles.container}>
                    <Text style={styles.header}>My Bucket List</Text>
                    <Text style={styles.item}>1. Travel to Japan and explore Kyoto's temples.</Text>
                    <Text style={styles.item}>2. Learn to play the guitar and compose a song.</Text>
                    <Text style={styles.item}>3. Run a marathon and cross the finish line.</Text>
                    <Text style={styles.item}>4. Volunteer at an animal shelter.</Text>
                    <Text style={styles.item}>5. Write and publish a book.</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    container: {
        width: "90%",
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#e3aadd",
        textAlign: "center",
    },
    item: {
        fontSize: 18,
        color: "#333",
        marginBottom: 10,
    },
});

export default BucketList;
