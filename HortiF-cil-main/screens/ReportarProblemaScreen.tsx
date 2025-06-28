import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ReportarProblemaScreen() {
  const [mensagem, setMensagem] = useState('');

  const enviar = () => {
    console.log('Problema enviado:', mensagem);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Descreva o problema</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={6}
        placeholder="Digite aqui..."
        value={mensagem}
        onChangeText={setMensagem}
      />
      <TouchableOpacity style={styles.button} onPress={enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12,
    color: '#2E7D32'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'top'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff'
  }
});
