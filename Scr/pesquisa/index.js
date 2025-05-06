import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const categorias = [
  {
    id: '1',
    nome: 'Frutas',
    imagem: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
    cor: '#dcedc8',
  },
  {
    id: '2',
    nome: 'Diversos',
    imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046794.png',
    cor: '#bbdefb',
  },
  {
    id: '3',
    nome: 'Açougue',
    imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png',
    cor: '#ffcdd2',
  },
  {
    id: '4',
    nome: 'Bebidas',
    imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046792.png',
    cor: '#b2fef7',
  },
];

export default function PesquisaScreen() {
  const [selectedTab, setSelectedTab] = useState('Pesquisa');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={18} color="#000" />
          <Text style={styles.locationText}>Taboão da Serra, SP</Text>
        </View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' }}
          style={styles.avatar}
        />
      </View>

      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="Buscar item..."
          style={styles.input}
        />
      </View>

      {/* Categorias */}
      <View style={styles.grid}>
        {categorias.map((cat) => (
          <TouchableOpacity key={cat.id} style={[styles.card, { backgroundColor: cat.cor }]}>
            <Image source={{ uri: cat.imagem }} style={styles.image} />
            <Text style={styles.label}>{cat.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => { setSelectedTab('Home'); navigation.navigate('Home'); }}>
          <Ionicons
            name="home-outline"
            size={24}
            color={selectedTab === 'Home' ? '#6C63FF' : '#888'} // Cor roxa quando selecionado
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelectedTab('Pesquisa'); navigation.navigate('Pesquisa'); }}>
          <Ionicons
            name="search-outline"
            size={24}
            color={selectedTab === 'Pesquisa' ? '#6C63FF' : '#888'} // Cor roxa quando selecionado
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelectedTab('Lista'); navigation.navigate('Lista'); }}>
          <Ionicons
            name="document-text-outline"
            size={24}
            color={selectedTab === 'Lista' ? '#6C63FF' : '#888'} // Cor roxa quando selecionado
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelectedTab('Carrinho'); navigation.navigate('Carrinho'); }}>
          <Ionicons
            name="cart-outline"
            size={24}
            color={selectedTab === 'Carrinho' ? '#6C63FF' : '#888'} // Cor roxa quando selecionado
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 6,
    fontSize: 14,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 24,
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    width: '47%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
