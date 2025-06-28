import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AdicionarCartaoScreen() {
  const navigation = useNavigation();
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [validade, setValidade] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSalvar = () => {
    if (numero && nome && validade && cvc) {
      Alert.alert('Cartão salvo com sucesso!');
      navigation.goBack();
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ADICIONAR CARTÃO</Text>
        </View>

        <Text style={styles.label}>Número do cartão</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o número"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />

        <Text style={styles.label}>Nome no cartão</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Data de validade</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/AA"
          value={validade}
          onChangeText={setValidade}
        />

        <Text style={styles.label}>CVC</Text>
        <TextInput
          style={styles.input}
          placeholder="CVC"
          keyboardType="numeric"
          secureTextEntry
          value={cvc}
          onChangeText={setCvc}
        />

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
    marginTop: 12
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
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
