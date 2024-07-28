import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./src/components/LoginScreen";
import RegistrationScreen from "./src/components/RegistrationScreen";
import ProfileScreen from "./src/components/ProfileScreen";
import RoutesScreen from "./src/components/RoutesScreen";
import ArchiveScreen from "./src/components/ArchiveScreen";
import RouteDetailsScreen from "./src/components/RouteDetailsScreen";
import OrderDetailsScreen from "./src/components/OrderDetailsScreen";
import QRCodeScannerScreen from "./src/components/QRCodeScannerScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Routes") {
            iconName = "clipboard-outline";
          } else if (route.name === "Archive") {
            iconName = "calendar-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Routes"
        component={RoutesScreen}
        options={{ title: "Маршруты" }}
      />
      <Tab.Screen
        name="Archive"
        component={ArchiveScreen}
        options={{ title: "Архив" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Профиль" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RouteDetails"
          component={RouteDetailsScreen}
          options={{ headerTitle: "Детали маршрута" }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetailsScreen}
          options={{ headerTitle: "Детали заказа" }}
        />
        <Stack.Screen
          name="QRCodeScanner"
          component={QRCodeScannerScreen}
          options={{ headerTitle: "Сканировать заказ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
