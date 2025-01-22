import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DashboardLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false, 
                tabBarStyle: {
                    backgroundColor: "#f8f9fa", 
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12, 
                    fontWeight: "600", 
                    color: "#333", 
                },
                tabBarActiveTintColor: "#007bff",
                tabBarInactiveTintColor: "#6c757d",
            }}
        >
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="biodata"
                options={{
                    title: "Bio Data",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="card-account-details-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="skills"
                options={{
                    title: "Skills",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="puzzle-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="bucketlist"
                options={{
                    title: "Bucket List",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="checkbox-marked-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default DashboardLayout;
