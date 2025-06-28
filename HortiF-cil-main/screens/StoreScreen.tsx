import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useCart } from '../contexts/CartContext';

const { width } = Dimensions.get('window');
const CARD_PADDING = 12;
const CARD_RADIUS = 8;

export const produtos = [
  {
    id: 'p1',
    nome: 'Abacate',
    preco: 7.90,
    imagem: require('../assets/images/abacate.png')
  },
  {
    id: 'p2',
    nome: 'Alface',
    preco: 4.50,
    imagem: require('../assets/images/alface.png')
  },
  {
    id: 'p3',
    nome: 'Banana',
    preco: 5.90,
    imagem: require('../assets/images/banana.jpg')
  },
  {
    id: 'p4',
    nome: 'Laranja',
    preco: 6.80,
    imagem: require('../assets/images/laranja.png')
  },
  {
    id: 'p5',
    nome: 'Maçã',
    preco: 7.20,
    imagem: require('../assets/images/maca.png')
  },
  {
    id: 'p6',
    nome: 'Tomate',
    preco: 5.10,
    imagem: require('../assets/images/tomate.png')
  },
  {
    id: 'p7',
    nome: 'Batata',
    preco: 4.90,
    imagem: require('../assets/images/batata.png')
  },
  {
    id: 'p8',
    nome: 'Cenoura',
    preco: 3.99,
    imagem: require('../assets/images/cenoura.png')
  },
  {
    id: 'p9',
    nome: 'Morango',
    preco: 11.90,
    imagem: require('../assets/images/morango.png')
  },
  {
    id: 'p10',
    nome: 'Uva-verde',
    preco: 13.50,
    imagem: require('../assets/images/uva-verde.png')
  }
];

export default function StoreScreen({ route, navigation }) {
  const { loja } = route.params;
  const { cartItems, addToCart, storeDelivery } = useCart();

  const [isFav, setIsFav] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!searchActive || query.trim() === '') return produtos;
    return produtos.filter(p =>
      p.nome.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, searchActive]);

  const subtotal = cartItems.reduce((sum, i) => sum + i.preco * i.quantidade, 0);
  const taxaEntrega = loja.delivery === 'Grátis' ? 0 : 10;
  const total = subtotal + taxaEntrega;
  const itemCount = cartItems.reduce((sum, i) => sum + i.quantidade, 0);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setIsFav(f => !f)} style={{ marginRight: 16 }}>
            <FontAwesome name="heart" size={24} color={isFav ? '#D32F2F' : '#333'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setSearchActive(sa => !sa); setQuery(''); }}>
            <Feather name="search" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de pesquisa */}
      {searchActive && (
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar produto..."
            value={query}
            onChangeText={setQuery}
          />
        </View>
      )}

      {/* Cartão da loja */}
      <View style={styles.storeCard}>
        <Text style={styles.storeName}>{loja.nome}</Text>
        {loja.distancia != null && (
          <Text style={styles.storeSub}>{loja.distancia.toFixed(1)} km</Text>
        )}
        <View style={styles.ratingRow}>
          <FontAwesome name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{loja.rating.toFixed(1)}</Text>
        </View>
        {loja.deliveryTime && (
          <Text style={styles.deliveryInfo}>Entrega: {loja.deliveryTime}</Text>
        )}
      </View>

      {/* Lista de produtos */}
      <FlatList
  data={filtered}
  keyExtractor={item => item.id}
  numColumns={2}
  contentContainerStyle={{ padding: CARD_PADDING, paddingBottom: 120 }}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
  renderItem={({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.imagem} style={styles.productImage} />
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productPrice}>R$ {item.preco.toFixed(2)} / kg</Text>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => addToCart(item, loja.delivery)}
      >
        <Feather name="plus" size={18} color="white" />
      </TouchableOpacity>
      </View>
      )}
    />


      {/* Rodapé do carrinho */}
      {itemCount > 0 && (
        <View style={styles.footer}>
          <View style={styles.summary}>
            <Text style={styles.summaryText}>
              Total com {loja.delivery === 'Grátis' ? 'entrega grátis' : `taxa R$ ${taxaEntrega.toFixed(2)}`}
            </Text>
            <Text style={styles.summaryAmount}>
              R$ {total.toFixed(2)} / {itemCount} {itemCount === 1 ? 'item' : 'itens'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate('Main', { screen: 'Cart' })}
          >
            <Text style={styles.cartButtonText}>Ver carrinho</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: CARD_PADDING
  },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginHorizontal: CARD_PADDING,
    borderRadius: CARD_RADIUS,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: CARD_PADDING / 2
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    height: 36
  },

  storeCard: {
    marginHorizontal: CARD_PADDING,
    marginBottom: CARD_PADDING / 2,
    padding: CARD_PADDING,
    backgroundColor: '#F1F8F3',
    borderRadius: CARD_RADIUS
  },
  storeName: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4
  },
  storeSub: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#555'
  },
  deliveryInfo: {
    fontSize: 14,
    color: '#555'
  },

  /** NOVO layout em grade **/
  productCard: {
    width: (width - CARD_PADDING * 3) / 2,
    backgroundColor: '#E8F5E9',
    borderRadius: CARD_RADIUS,
    padding: 10,
    marginBottom: CARD_PADDING,
    alignItems: 'center'
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: CARD_RADIUS,
    marginBottom: 8
  },
  productName: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
    textAlign: 'center'
  },
  productPrice: {
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
    textAlign: 'center'
  },
  addBtn: {
    backgroundColor: '#2E7D32',
    padding: 8,
    borderRadius: 16
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  summary: { flex: 1 },
  summaryText: {
    fontSize: 14,
    color: '#555'
  },
  summaryAmount: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular'
  },
  cartButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20
  },
  cartButtonText: {
    color: 'white',
    fontFamily: 'Poppins-Regular'
  }
});

