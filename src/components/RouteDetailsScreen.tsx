import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RouteDetailsScreen({ route, navigation }) {
  const { route: routeDetails } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Список адресов маршрут № {routeDetails.number}
      </Text>
      <FlatList
        data={routeDetails.addresses}
        renderItem={({ item }) => (
          <View style={styles.addressContainer}>
            <Text style={styles.addressNumber}>№ акта {item.id}</Text>
            <Text style={styles.addressText}>{item.address}</Text>
            <View style={styles.addressStatusContainer}>
              <Ionicons name="md-time-outline" size={20} color="black" />
              <Text style={styles.addressStatus}>{item.status}</Text>
              <Text style={styles.addressTime}>{item.time}</Text>
            </View>
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => navigation.navigate("QRCodeScanner")}
            >
              <Ionicons name="qr-code-outline" size={20} color="black" />
              <Text style={styles.scanButtonText}>
                Сканировать QR код заказа
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapButtonText}>Построить маршрут на карте</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  addressContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  addressNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  addressStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  addressStatus: {
    fontSize: 14,
    marginLeft: 5,
    color: "gray",
  },
  addressTime: {
    marginLeft: "auto",
    fontSize: 14,
    color: "gray",
  },
  scanButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 10,
  },
  scanButtonText: {
    marginLeft: 10,
    fontSize: 14,
    color: "black",
  },
  mapButton: {
    backgroundColor: "#141317",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  mapButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
