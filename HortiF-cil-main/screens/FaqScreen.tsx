import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function FaqScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.question}>Como faço um pedido?</Text>
        <Text style={styles.answer}>Basta navegar pelas lojas, escolher os itens e confirmar no carrinho.</Text>

        <Text style={styles.question}>Quais formas de pagamento são aceitas?</Text>
        <Text style={styles.answer}>Aceitamos cartão de crédito, Pix e boleto bancário.</Text>

        <Text style={styles.question}>Como acompanho meu pedido?</Text>
        <Text style={styles.answer}>Na aba “Pedidos”, você verá o andamento de cada entrega.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  question: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 12,
    color: '#2E7D32'
  },
  answer: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#444',
    marginBottom: 12
  }
});
