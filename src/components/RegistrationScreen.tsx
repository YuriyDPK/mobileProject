import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return regex.test(phone);
  };

  const validateName = (name) => {
    const regex = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
    return regex.test(name);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleRegister = () => {
    let newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = "Некорректный email";
    }
    if (!validatePhone(phone)) {
      newErrors.phone = "Некорректный телефон";
    }
    if (!validateName(name)) {
      newErrors.name = "ФИО должно содержать только буквы";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with registration
      alert("Регистрация успешна");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <View style={[styles.inputContainer, errors.email && styles.errorBorder]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <View style={[styles.inputContainer, errors.phone && styles.errorBorder]}>
        <TextInput
          style={styles.input}
          placeholder="Телефон"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
      <View style={[styles.inputContainer, errors.name && styles.errorBorder]}>
        <TextInput
          style={styles.input}
          placeholder="ФИО"
          value={name}
          onChangeText={setName}
        />
      </View>
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            style={styles.icon2}
            source={
              isPasswordVisible
                ? require("../../assets/images/Eye.png")
                : require("../../assets/images/Eye_close.png")
            }
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Назад к входу</Text>
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
  icon2: {
    width: 24,
    height: 24,
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
  link: {
    marginTop: 15,
    color: "#007BFF",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 15,
    marginBottom: 10,
  },
  errorBorder: {
    borderColor: "red",
  },
});
