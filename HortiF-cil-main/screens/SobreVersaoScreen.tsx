import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function SobreVersaoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sobre esta versão</Text>
      <Text style={styles.text}>Versão 1.0.0</Text>
      <Text style={styles.text}>Desenvolvido por Hortifácil</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  title: {
    fontSize: 18, fontFamily: 'Poppins-SemiBold', marginBottom: 10, color: '#2E7D32'
  },
  text: {
    fontSize: 14, fontFamily: 'Poppins-Regular', color: '#444'
  }
});
