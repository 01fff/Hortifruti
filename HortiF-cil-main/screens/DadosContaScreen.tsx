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
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PerfilStackParamList = {
  InformacoesPessoais: undefined;
  InformacoesAcesso: undefined;
  Anuncios: undefined;
};

export default function DadosContaScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<PerfilStackParamList>>();

  const opcoes = [
    {
      titulo: 'Informações pessoais',
      descricao: 'Preencha seu nome completo e CPF',
      destino: 'InformacoesPessoais'
    },
    {
      titulo: 'Informações de acesso',
      descricao: 'Cadastre os dados e acesse de forma segura',
      destino: 'InformacoesAcesso'
    },
    {
      titulo: 'Anúncios e Publicidades',
      descricao: 'Gerencie as permissões de anúncios e publicidades',
      destino: 'Anuncios'
    }
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>DADOS DA CONTA</Text>
        </View>

        {opcoes.map((opcao) => (
          <TouchableOpacity
            key={opcao.destino}
            style={styles.card}
            onPress={() => navigation.navigate(opcao.destino as any)}
          >
            <View>
              <Text style={styles.cardTitle}>{opcao.titulo}</Text>
              <Text style={styles.cardDesc}>{opcao.descricao}</Text>
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
