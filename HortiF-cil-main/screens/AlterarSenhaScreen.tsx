import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AlterarSenhaScreen() {
  const navigation = useNavigation();
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleAlterar = () => {
    console.log({ senhaAtual, novaSenha, confirmarSenha });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ALTERAR SENHA</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Senha atual</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={senhaAtual}
            onChangeText={setSenhaAtual}
          />

          <Text style={styles.label}>Nova senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={novaSenha}
            onChangeText={setNovaSenha}
          />

          <Text style={styles.label}>Confirmar nova senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity style={styles.button} onPress={handleAlterar}>
            <Text style={styles.buttonText}>Salvar nova senha</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12
  },
  form: {
    padding: 16
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: 12,
    color: '#444'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold'
  }
});
