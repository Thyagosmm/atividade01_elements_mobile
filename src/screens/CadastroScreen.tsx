import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Input, Button, Header } from "react-native-elements";

export default function CadastroScreen() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleCadastro = () => {
    console.log("Dados do Cadastro:", { nome, email, senha });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra Superior */}
      <Header
        centerComponent={{
          text: "Cadastro",
          style: { color: "#fff", fontSize: 18 },
        }}
      />

      {/* Formulário de Cadastro */}
      <View style={styles.form}>
        <Input
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          leftIcon={{ type: "font-awesome", name: "user" }}
        />

        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          leftIcon={{ type: "font-awesome", name: "envelope" }}
        />

        <Input
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          leftIcon={{ type: "font-awesome", name: "lock" }}
        />

        <Button
          title="Cadastrar"
          onPress={handleCadastro}
          buttonStyle={styles.cadastrarButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  cadastrarButton: {
    backgroundColor: "#2089dc",
    marginTop: 20,
  },
});
