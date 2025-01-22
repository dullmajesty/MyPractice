import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";

const AllAboutMeSchoolEdition = () => {
    return (
        <ImageBackground
            source={require("../../../assets/biodata.png")} 
            style={styles.imageBackground}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                {/* Header Section */}
                <View style={styles.headerBox}>
                    <Text style={styles.header}>All About Me</Text>
                </View>

                {/* Name Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Name:</Text>
                    <Text style={styles.value}>
                        Hi! I’m Mariah Shannen Sumaria, but feel free to call me Shannen!
                    </Text>
                </View>

                {/* Family Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Family:</Text>
                    <Text style={styles.value}>
                        I come from a family of 3 where everyone has a different genre of movie. 
                        I don't have siblings, but I have lots of cousins and pamangkin.
                    </Text>
                </View>

                {/* Favorites Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Favorites:</Text>
                    <Text style={styles.value}>• Favorite Color: Pink — because I'm very girly!</Text>
                    <Text style={styles.value}>
                        • Favorite Food: I like chicken and seafood. I always crave for something sweet and sour.
                    </Text>
                    <Text style={styles.value}>• Favorite Movies: Ghibli and anything Disney!</Text>
                    <Text style={styles.value}>• Favorite Song: ‘Twinkle Twinkle’—it makes me sleep!</Text>
                </View>

                {/* Languages & Personal Details Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Languages & Personal Details:</Text>
                    <Text style={styles.value}>• Languages Spoken: Bisaya, Tagalog, and English</Text>
                    <Text style={styles.value}>• Zodiac Sign: Capricorn—more move, less announcement!</Text>
                    <Text style={styles.value}>• Height: Tall enough to reach the top shelf. Almost.</Text>
                    <Text style={styles.value}>• Eye Color: Brown</Text>
                    <Text style={styles.value}>• Hair Color: Brown, dark blonde</Text>
                </View>

                {/* Hobbies Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Hobbies:</Text>
                    <Text style={styles.value}>• Sleep</Text>
                    <Text style={styles.value}>• Singing</Text>
                    <Text style={styles.value}>• Watching movies or reading comics</Text>
                </View>

                {/* Achievements Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Achievements:</Text>
                    <Text style={styles.value}>• Dean's Lister last semester</Text>
                    <Text style={styles.value}>• Finished my project!</Text>
                </View>

                {/* Fun Facts Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Fun Facts:</Text>
                    <Text style={styles.value}>• I've never tried samgyup.</Text>
                    <Text style={styles.value}>• I can go a whole day without talking.</Text>
                    <Text style={styles.value}>• My favorite random word is "indeed".</Text>
                </View>

                {/* Personal Goals Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Personal Goals:</Text>
                    <Text style={styles.value}>• Short-term: Get better at being lazy.</Text>
                    <Text style={styles.value}>• Long-term: Work at the biggest company.</Text>
                </View>

                {/* Motto Section */}
                <View style={styles.sectionBox}>
                    <Text style={styles.subHeader}>Motto to Live By:</Text>
                    <Text style={styles.value}>“Why fit in when you were born to stand out?”</Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        alignItems: "center",
        padding: 20,
    },
    headerBox: {
        backgroundColor: "#f4c2c2",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: "stretch",
        alignItems: "center",
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FFFF",
        textAlign: "center",
    },
    sectionBox: {
        width: "90%",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    value: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
});

export default AllAboutMeSchoolEdition;
