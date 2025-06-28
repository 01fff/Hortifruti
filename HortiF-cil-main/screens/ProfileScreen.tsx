import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Feather, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PerfilStackParamList = {
  Notificacoes: undefined;
  DadosConta: undefined;
  Pagamentos: undefined;
  Ajuda: undefined;
  Configuracoes: undefined;
  Seguranca: undefined;
};

const profileOptions = [
  { title: 'Notificações', icon: <Feather name="bell" size={20} color="#333" />, screen: 'Notificacoes' },
  { title: 'Dados da conta', icon: <MaterialIcons name="person" size={20} color="#333" />, screen: 'DadosConta' },
  { title: 'Pagamentos', icon: <Ionicons name="card" size={20} color="#333" />, screen: 'Pagamentos' },
  { title: 'Ajuda', icon: <Feather name="help-circle" size={20} color="#333" />, screen: 'Ajuda' },
  { title: 'Configurações', icon: <Feather name="settings" size={20} color="#333" />, screen: 'Configuracoes' },
  { title: 'Segurança', icon: <Entypo name="lock" size={20} color="#333" />, screen: 'Seguranca' }
];

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<PerfilStackParamList>>();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/usuario-logo.png')}
            style={styles.avatar}
          />
          <Text style={styles.username}>Usuário</Text>
        </View>

        {profileOptions.map(({ title, icon, screen }) => (
          <TouchableOpacity
            key={title}
            style={styles.item}
            onPress={() => navigation.navigate(screen as keyof PerfilStackParamList)}
          >
            <View style={styles.itemLeft}>
              {icon}
              <Text style={styles.itemText}>{title}</Text>
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
  container: { paddingVertical: 16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ddd'
  },
  username: {
    marginLeft: 12,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#2E7D32'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333'
  }
});
