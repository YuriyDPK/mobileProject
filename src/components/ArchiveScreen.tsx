import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

const routesData = [
  {
    id: "1",
    number: 721,
    points: 4,
    status: "Выполнено",
    date: "2024-07-08",
    addresses: [
      {
        id: "a1",
        address:
          "657646, Новосибирская обл, Ордынский р-н Козиха с, Северная ул, дом 26, кв 2",
        status: "В работе",
        time: "_:_ - _:_",
      },
      // Другие адреса
    ],
  },
  // Другие маршруты
];

export default function ArchiveScreen({ navigation }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const onDayPress = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
    } else if (startDate && !endDate) {
      setEndDate(day.dateString);
    }
  };

  const getMarkedDates = () => {
    const markedDates = {};
    if (startDate) {
      markedDates[startDate] = { startingDay: true, color: "orange" };
      if (endDate) {
        markedDates[endDate] = { endingDay: true, color: "orange" };
        let currentDate = new Date(startDate);
        const end = new Date(endDate);
        while (currentDate < end) {
          const dateString = currentDate.toISOString().split("T")[0];
          if (dateString !== startDate && dateString !== endDate) {
            markedDates[dateString] = { color: "orange" };
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    }
    return markedDates;
  };

  const filterRoutes = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return routesData.filter((route) => {
        const routeDate = new Date(route.date);
        return routeDate >= start && routeDate <= end;
      });
    }
    return routesData;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Архив</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShowCalendar(true)}
        >
          <Text>
            {startDate
              ? new Date(startDate).toLocaleDateString()
              : "Начальная дата"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.dateSeparator}>-</Text>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShowCalendar(true)}
        >
          <Text>
            {endDate ? new Date(endDate).toLocaleDateString() : "Конечная дата"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowCalendar(true)}>
          <Ionicons name="calendar-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filterRoutes()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RouteDetails", { route: item })}
          >
            <View style={styles.routeContainer}>
              <View style={styles.routeHeader}>
                <Text style={styles.routeNumber}>Маршрут № {item.number}</Text>
                <Ionicons name="chevron-forward" size={20} color="#000" />
              </View>
              <Text style={styles.routePoints}>
                Точек на маршруте {item.points}
              </Text>
              <View style={styles.routeStatusContainer}>
                <Ionicons
                  name={
                    item.status === "Выполнено"
                      ? "checkmark-circle-outline"
                      : "alert-circle-outline"
                  }
                  size={20}
                  color={item.status === "Выполнено" ? "green" : "red"}
                />
                <Text
                  style={[
                    styles.routeStatus,
                    item.status === "Выполнено" && { color: "green" },
                    item.status === "Ошибка" && { color: "red" },
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      {showCalendar && (
        <Modal transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Выберите период</Text>
              <Text style={styles.modalInstruction}>
                Выберите период, за который хотите увидеть список маршрутов
              </Text>
              <Calendar
                markingType={"period"}
                markedDates={getMarkedDates()}
                onDayPress={onDayPress}
              />
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => setShowCalendar(false)}
              >
                <Text style={styles.buttonText}>Готово</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  dateSeparator: {
    marginHorizontal: 5,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInstruction: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  doneButton: {
    backgroundColor: "#141317",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
