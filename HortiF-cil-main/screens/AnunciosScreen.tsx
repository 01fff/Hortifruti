import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AnunciosScreen() {
  const navigation = useNavigation();
  const [ofertas, setOfertas] = useState(true);
  const [novidades, setNovidades] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ANÚNCIOS E PUBLICIDADES</Text>
        </View>

        <View style={styles.optionBlock}>
          <Text style={styles.optionTitle}>Receber ofertas por e-mail</Text>
          <Switch
            value={ofertas}
            onValueChange={setOfertas}
            trackColor={{ false: '#ccc', true: '#2E7D32' }}
            thumbColor={ofertas ? '#2E7D32' : '#f4f3f4'}
          />
        </View>

        <View style={styles.optionBlock}>
          <Text style={styles.optionTitle}>Novidades e atualizações do app</Text>
          <Switch
            value={novidades}
            onValueChange={setNovidades}
            trackColor={{ false: '#ccc', true: '#2E7D32' }}
            thumbColor={novidades ? '#2E7D32' : '#f4f3f4'}
          />
        </View>

        <Text style={styles.description}>
          Você pode alterar essas permissões a qualquer momento. O uso das permissões respeita a sua privacidade.
        </Text>
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
  optionBlock: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#333'
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 16,
    paddingTop: 12,
    color: '#777',
    fontFamily: 'Poppins-Regular'
  }
});
