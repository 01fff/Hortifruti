import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function GerenciarNotificacoesScreen() {
  const navigation = useNavigation();
  const [promo, setPromo] = useState(true);
  const [pedido, setPedido] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>GERENCIAR NOTIFICAÇÕES</Text>
        </View>

        <View style={styles.option}>
          <Text style={styles.label}>Promoções e ofertas</Text>
          <Switch value={promo} onValueChange={setPromo} />
        </View>

        <View style={styles.option}>
          <Text style={styles.label}>Atualizações de pedido</Text>
          <Switch value={pedido} onValueChange={setPedido} />
        </View>
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
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  }
});
