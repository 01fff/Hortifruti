import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';

const lojas = [
  {
    id: '1', nome: 'Hortifruti do José', logo: require('../assets/images/store-logo.png'),
    rating: 4.7, delivery: 'Grátis'
  },
  {
    id: '2', nome: 'Hortifácil Central', logo: require('../assets/images/store-logo.png'),
    rating: 3.8, delivery: 'Grátis'
  },
  {
    id: '3', nome: 'Verde & Sabor', logo: require('../assets/images/store-logo.png'),
    rating: 3.2, delivery: 'Paga'
  },
  {
    id: '4', nome: 'Mercado Verde', logo: require('../assets/images/store-logo.png'),
    rating: 4.3, delivery: 'Grátis'
  },
  {
    id: '5', nome: 'Natural Hortifruti', logo: require('../assets/images/store-logo.png'),
    rating: 4.6, delivery: 'Grátis'
  },
  {
    id: '6', nome: 'HortiFresco Express', logo: require('../assets/images/store-logo.png'),
    rating: 4.2, delivery: 'Paga'
  },
  {
    id: '7', nome: 'Orgânicos do Vale', logo: require('../assets/images/store-logo.png'),
    rating: 4.9, delivery: 'Grátis'
  },
  {
    id: '8', nome: 'Mais Hortifruti', logo: require('../assets/images/store-logo.png'),
    rating: 3.7, delivery: 'Paga'
  },
  {
    id: '9', nome: 'Verde Vivo', logo: require('../assets/images/store-logo.png'),
    rating: 4.5, delivery: 'Grátis'
  },
  {
    id: '10', nome: 'Hortifruti da Família', logo: require('../assets/images/store-logo.png'),
    rating: 4.1, delivery: 'Grátis'
  }
];

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [ordenarModalVisible, setOrdenarModalVisible] = useState(false);

  const filtered = lojas.filter(l =>
    l.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="O que vai pedir hoje?"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <View style={styles.filterRow}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setOrdenarModalVisible(true)}
        >
          <Text style={styles.filterText}>Ordenar</Text>
          <AntDesign name="down" size={12} color="#333" style={{ marginLeft: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Entrega Grátis</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Lojas</Text>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Store', { loja: item })}
          >
            <Image source={item.logo} style={styles.logo} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nome}</Text>
              <View style={styles.ratingRow}>
                <FontAwesome name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
              </View>
              <Text style={styles.delivery}>
                Entrega: <Text style={item.delivery === 'Grátis' ? styles.free : styles.paid}>{item.delivery}</Text>
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#888" />
          </TouchableOpacity>
        )}
      />

      {/* Modal de Ordenação */}
      <Modal visible={ordenarModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Ordenar por</Text>
            {['Ordenação Padrão', 'Preço', 'Avaliação', 'Tempo de entrega', 'Taxa de entrega'].map(opcao => (
              <TouchableOpacity key={opcao} style={styles.modalOption}>
                <Text style={styles.modalOptionText}>{opcao}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setOrdenarModalVisible(false)}
            >
              <Text style={{ color: '#d32f2f', fontWeight: 'bold' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    height: 40
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 8
  },
  filterButton: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333'
  },
  sectionTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginBottom: 12
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginRight: 12
  },
  info: {
    flex: 1
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 4
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#555'
  },
  delivery: {
    fontSize: 14,
    color: '#555'
  },
  free: {
    color: '#2E7D32',
    fontWeight: 'bold'
  },
  paid: {
    color: '#D32F2F',
    fontWeight: 'bold'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12
  },
  modalOption: {
    paddingVertical: 12
  },
  modalOptionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  },
  modalClose: {
    alignItems: 'center',
    paddingVertical: 12
  }
});
