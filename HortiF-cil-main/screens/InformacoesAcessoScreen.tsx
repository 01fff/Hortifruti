
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

export default function InformacoesAcessoScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSalvar = () => {
    console.log('E-mail:', email);
    console.log('Telefone:', telefone);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>INFORMAÇÕES DE ACESSO</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />

          <TouchableOpacity style={styles.button} onPress={handleSalvar}>
            <Text style={styles.buttonText}>Salvar alterações</Text>
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
