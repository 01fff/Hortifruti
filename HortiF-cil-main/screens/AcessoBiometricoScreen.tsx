import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Switch,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AcessoBiometricoScreen() {
  const navigation = useNavigation();
  const [biometria, setBiometria] = React.useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ACESSO BIOMÉTRICO</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Ativar biometria para login</Text>
        <Switch
          value={biometria}
          onValueChange={setBiometria}
          trackColor={{ false: '#ccc', true: '#2E7D32' }}
          thumbColor={biometria ? '#2E7D32' : '#f4f3f4'}
        />
      </View>
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
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#444'
  }
});
