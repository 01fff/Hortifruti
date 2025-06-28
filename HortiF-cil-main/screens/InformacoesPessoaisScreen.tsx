
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

export default function InformacoesPessoaisScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const handleAtualizar = () => {
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>EDITAR INFORMAÇÕES PESSOAIS</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome completo"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />

          <Text style={styles.info}>
            Confirme se os números de seu CPF estão corretos antes de confirmar a edição
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
            <Text style={styles.buttonText}>Atualizar</Text>
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
    fontSize: 15,
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
  info: {
    marginTop: 10,
    fontSize: 12,
    color: '#777',
    fontFamily: 'Poppins-Regular'
  },
  button: {
    marginTop: 24,
    backgroundColor: '#d50032',
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
