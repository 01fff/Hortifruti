import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ContatoSuporteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fale com a gente</Text>
      <Text style={styles.text}>Email: suporte@hortif.com</Text>
      <Text style={styles.text}>WhatsApp: (11) 99999-0000</Text>
      <Text style={styles.text}>Atendimento: Seg à Sex, das 9h às 18h</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
    color: '#2E7D32'
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
    color: '#444'
  }
});
