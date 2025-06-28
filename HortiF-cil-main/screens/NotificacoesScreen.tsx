import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Switch,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NotificacoesScreen() {
  const navigation = useNavigation();
  const [ativado, setAtivado] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>NOTIFICAÇÕES</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>Receber notificações</Text>
          <Switch
            value={ativado}
            onValueChange={setAtivado}
            trackColor={{ false: '#ccc', true: '#2E7D32' }}
            thumbColor={ativado ? '#2E7D32' : '#f4f3f4'}
          />
          <Text style={styles.status}>
            {ativado ? 'Notificações ativadas' : 'Notificações desativadas'}
          </Text>
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
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12
  },
  body: {
    padding: 20,
    alignItems: 'flex-start',
    gap: 10
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#444'
  },
  status: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#888'
  }
});
