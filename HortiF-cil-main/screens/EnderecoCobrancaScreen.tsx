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

export default function EnderecoCobrancaScreen() {
  const navigation = useNavigation();
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSalvar = () => {
    if (rua && numero && bairro && cidade && estado) {
      Alert.alert('Endereço salvo com sucesso!');
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
          <Text style={styles.headerTitle}>ENDEREÇO DE COBRANÇA</Text>
        </View>

        <Text style={styles.label}>Rua</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Av. Brasil"
          value={rua}
          onChangeText={setRua}
        />

        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 123"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />

        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Centro"
          value={bairro}
          onChangeText={setBairro}
        />

        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: São Paulo"
          value={cidade}
          onChangeText={setCidade}
        />

        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: SP"
          value={estado}
          onChangeText={setEstado}
        />

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 20 },
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
    marginTop: 12,
    marginBottom: 4
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
