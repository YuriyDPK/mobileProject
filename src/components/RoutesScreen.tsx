import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const routesData = [
  {
    id: "1",
    number: 754,
    points: 4,
    status: "В работе",
    date: "Сегодня 9.07.24",
  },
  {
    id: "2",
    number: 756,
    points: 6,
    status: "В работе",
    date: "Сегодня 9.07.24",
  },
  {
    id: "3",
    number: 721,
    points: 4,
    status: "Выполнено",
    date: "Понедельник 8.07.24",
  },
  {
    id: "4",
    number: 712,
    points: 4,
    status: "Выполнено",
    date: "Воскресенье 7.07.24",
  },
  {
    id: "5",
    number: 679,
    points: 4,
    status: "В работе",
    date: "Воскресенье 7.07.24",
  },
];

export default function RoutesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.routeContainer}>
      <View style={styles.routeHeader}>
        <Text style={styles.routeNumber}>Маршрут № {item.number}</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>
      <Text style={styles.routePoints}>Точек на маршруте {item.points}</Text>
      <View style={styles.routeStatusContainer}>
        <Ionicons
          name={
            item.status === "Выполнено"
              ? "checkmark-circle-outline"
              : "time-outline"
          }
          size={20}
          color={item.status === "Выполнено" ? "green" : "gray"}
        />
        <Text
          style={[
            styles.routeStatus,
            item.status === "Выполнено" && { color: "green" },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Здравствуйте, Иван</Text>
      <FlatList
        data={routesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={styles.dateHeader}>Сегодня 9.07.24</Text>
        }
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  routeContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  routeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  routeNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  routePoints: {
    fontSize: 14,
    color: "#666",
  },
  routeStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  routeStatus: {
    fontSize: 14,
    color: "gray",
    marginLeft: 5,
  },
});
