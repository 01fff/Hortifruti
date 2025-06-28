import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AjudaStackParamList = {
  Faq: undefined;
  ContatoSuporte: undefined;
  ReportarProblema: undefined;
};

export default function AjudaScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AjudaStackParamList>>();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>AJUDA</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Faq')}
        >
          <Text style={styles.cardTitle}>Perguntas Frequentes</Text>
          <Text style={styles.cardDesc}>Dúvidas comuns e respostas rápidas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ContatoSuporte')}
        >
          <Text style={styles.cardTitle}>Contato com o Suporte</Text>
          <Text style={styles.cardDesc}>Fale conosco via e-mail ou telefone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ReportarProblema')}
        >
          <Text style={styles.cardTitle}>Reportar um Problema</Text>
          <Text style={styles.cardDesc}>Nos avise sobre algo que não esteja funcionando</Text>
        </TouchableOpacity>
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
