import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const orderDetailsData = {
  orderId: "14622",
  client: "Адольский Алексей Михайлович",
  address:
    "657646, Новосибирская обл, Ордынский р-н Козиха с, Северная ул, дом 26, кв 2",
  phones: ["8 923 191 43 53", "8 923 191 43 53", "8 923 191 43 53"],
  product: "Подгузники Камилла размер M стандарт плюс",
  size: "-",
  volume: "0,04498",
  quantity: "60,0",
  price: "2 184,00",
  comment: "нет",
};

export default function OrderDetailsScreen() {
  const {
    client,
    address,
    phones,
    product,
    size,
    volume,
    quantity,
    price,
    comment,
  } = orderDetailsData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Заказ {orderDetailsData.orderId}</Text>
      <Text style={styles.label}>ФИО</Text>
      <Text style={styles.text}>{client}</Text>
      <Text style={styles.label}>Адрес</Text>
      <Text style={styles.text}>{address}</Text>
      <Text style={styles.label}>Телефон</Text>
      {phones.map((phone, index) => (
        <View key={index} style={styles.phoneContainer}>
          <Text style={styles.text}>{phone}</Text>
          <Ionicons
            name="call-outline"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="copy-outline"
            size={20}
            color="black"
            style={styles.icon}
          />
        </View>
      ))}
      <Text style={styles.label}>Наименование товара</Text>
      <Text style={styles.text}>{product}</Text>
      <Text style={styles.label}>Размер товара</Text>
      <Text style={styles.text}>{size}</Text>
      <Text style={styles.label}>Объем</Text>
      <Text style={styles.text}>{volume}</Text>
      <Text style={styles.label}>Количество</Text>
      <Text style={styles.text}>{quantity}</Text>
      <Text style={styles.label}>Сумма</Text>
      <Text style={styles.text}>{price}</Text>
      <Text style={styles.label}>Комментарий</Text>
      <Text style={styles.text}>{comment}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Привязать заказ к клиенту</Text>
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#666",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#141317",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
