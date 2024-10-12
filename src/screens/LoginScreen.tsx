import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Ícone de usuário */}
      <Icon
        name="user"
        type="font-awesome"
        size={100}
        color="#333"
        style={styles.icon}
      />

      {/* Campo de e-mail */}
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de senha */}
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Logar</Text>
      </TouchableOpacity>

      {/* Botão de Cadastro */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.signupButtonText}>Cadastre-se</Text>
      </TouchableOpacity>

      {/* Link "Esqueceu a senha?" */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  icon: {
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupButton: {
    marginVertical: 10,
  },
  signupButtonText: {
    color: "#4CAF50",
    fontSize: 16,
  },
  forgotPasswordText: {
    color: "#888",
    fontSize: 14,
    marginTop: 15,
  },
});
