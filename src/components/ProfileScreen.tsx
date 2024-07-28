import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ProfileScreen() {
  const [firstName, setFirstName] = useState("Иван");
  const [lastName, setLastName] = useState("Ларионов");
  const [middleName, setMiddleName] = useState("Викторович");
  const [phone, setPhone] = useState("+7 912 234 56 78");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профиль</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ваше имя"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Фамилия"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Отчество"
          value={middleName}
          onChangeText={setMiddleName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Телефон"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Сохранить</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogout}>
        <Text style={styles.buttonTextLogout}>Выйти из профиля</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    paddingTop: "30%",
    paddingBottom: "30%",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "#141317",
    padding: 25,
    borderRadius: 15,
    width: "100%",
    textAlign: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLogout: {
    backgroundColor: "#ccc",
    padding: 25,
    borderRadius: 15,
    width: "100%",
    textAlign: "center",
    marginTop: 15,
  },
  buttonTextLogout: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
});
