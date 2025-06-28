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

export default function SegurancaScreen() {
  const navigation = useNavigation();

  const opcoes = [
    {
      titulo: 'Alterar senha',
      descricao: 'Atualize sua senha de acesso',
      destino: 'AlterarSenha'
    },
    {
      titulo: 'Acesso biométrico',
      descricao: 'Gerencie o login por digital ou reconhecimento facial',
      destino: 'AcessoBiometrico'
    }
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SEGURANÇA</Text>
        </View>

        {opcoes.map((item) => (
          <TouchableOpacity
            key={item.destino}
            style={styles.card}
            onPress={() => navigation.navigate(item.destino as never)}
          >
            <View>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardDesc}>{item.descricao}</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#888" />
          </TouchableOpacity>
        ))}
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
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
