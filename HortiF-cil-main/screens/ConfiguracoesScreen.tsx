import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ConfiguracoesScreen() {
  const navigation = useNavigation();

  const opcoes = [
    {
      titulo: 'Gerenciar Notificações',
      descricao: 'Controle os alertas recebidos',
      rota: 'GerenciarNotificacoes'
    },
    {
      titulo: 'Sobre esta versão',
      descricao: 'Informações do app',
      rota: 'SobreVersao'
    },
    {
      titulo: 'Limpar histórico',
      descricao: 'Remova buscas recentes',
      rota: 'LimparHistorico'
    },
    {
      titulo: 'Sair',
      descricao: 'Finalizar sessão atual',
      rota: 'Sair'
    }
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>CONFIGURAÇÕES</Text>
        </View>

        {opcoes.map(({ titulo, descricao, rota }) => (
          <TouchableOpacity
            key={rota}
            style={styles.card}
            onPress={() => navigation.navigate(rota as never)}
          >
            <View>
              <Text style={styles.cardTitle}>{titulo}</Text>
              <Text style={styles.cardDesc}>{descricao}</Text>
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
