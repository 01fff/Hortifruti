import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, Button } from 'react-native';

export default function LimparHistoricoScreen() {
  const handleLimpar = () => {
    Alert.alert('Sucesso', 'O histórico foi limpo!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Limpar histórico de busca</Text>
      <Text style={styles.text}>Essa ação não poderá ser desfeita.</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Limpar agora" onPress={handleLimpar} color="#d32f2f" />
      </View>
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
    fontSize: 14, fontFamily: 'Poppins-Regular', color: '#444', textAlign: 'center'
  }
});
