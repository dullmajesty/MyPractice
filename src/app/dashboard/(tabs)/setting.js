import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Setting = () => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.header}>Settings</Text>

            
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Account Settings</Text>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Change Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Change Password</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Notification Settings</Text>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Email Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Push Notifications</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Theme Settings</Text>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Dark Mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Light Mode</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    section: {
        marginBottom: 30,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
        color: "#333",
    },
    option: {
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 2,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 16,
        color: "#555",
    },
});

export default Setting;
