import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function CartoesSalvosScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>CARTÕES SALVOS</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>Nenhum cartão salvo ainda.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AdicionarCartao')}
          >
            <Text style={styles.buttonText}>Adicionar Cartão</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12
  },
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#777',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-Medium'
  }
});
