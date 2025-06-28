import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function SairScreen() {
  const handleLogout = () => {
    Alert.alert('Você saiu da conta!');

  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deseja sair da conta?</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Sair" onPress={handleLogout} color="#d32f2f" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  title: {
    fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#2E7D32'
  }
});
