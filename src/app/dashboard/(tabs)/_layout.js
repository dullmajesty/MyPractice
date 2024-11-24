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
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="setting"
                options={{
                    title: "Setting",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default DashboardLayout;
