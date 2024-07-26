import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/main.png")}
        />
        <Text style={styles.title}>СЛУЖБА ДОСТАВКИ</Text>
      </View>
      <Text style={styles.welcome}>Добро пожаловать!</Text>
      <Text style={styles.instructions}>
        Для входа в приложение, пожалуйста, авторизуйтесь
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Имя пользователя" />
        <Image
          style={styles.icon}
          source={require("../../assets/images/Profile.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введите пароль"
          secureTextEntry={true}
        />
        <Image
          style={styles.icon}
          source={require("../../assets/images/Eye.png")}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <View style={styles.linkReg}>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.link}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 30,
    paddingTop: "30%",
    paddingBottom: "30%",
    backgroundColor: "#fff",
  },
  logoContainer: {
    flex: 0,
    flexDirection: "row",
    gap: 20,
  },
  logo: {
    width: 70,
    height: 90,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 36,
    marginVertical: 10,
    fontWeight: "bold",
  },
  instructions: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
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
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    marginTop: 15,
    color: "#007BFF",
    textAlign: "center",
    width: "100%",
  },
  linkReg: {
    textAlign: "center",
    width: "100%",
  },
});
