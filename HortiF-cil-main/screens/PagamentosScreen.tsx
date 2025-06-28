import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PagamentosScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>PAGAMENTOS</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('CartoesSalvos')}
        >
          <Text style={styles.cardTitle}>Cartões Salvos</Text>
          <Text style={styles.cardDesc}>Gerencie seus cartões de crédito e débito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EnderecoCobranca')}
        >
          <Text style={styles.cardTitle}>Endereço de Cobrança</Text>
          <Text style={styles.cardDesc}>Atualize seu endereço de faturamento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('HistoricoPagamentos')}
        >
          <Text style={styles.cardTitle}>Histórico de Pagamentos</Text>
          <Text style={styles.cardDesc}>Veja suas transações anteriores</Text>
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
  card: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#222'
  },
  cardDesc: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#777',
    marginTop: 2
  }
});
