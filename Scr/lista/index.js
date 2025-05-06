import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
];

const compras = [
  {
    id: '1',
    nome: 'Frutas',
    imagem: categorias[0].imagem,
    data: '27/05/2024',
    valor: 50.0,
    itens: 5,
    cor: categorias[0].cor,
  },
  {
    id: '2',
    nome: 'Diversos',
    imagem: categorias[1].imagem,
    data: '20/05/2024',
    valor: 35.4,
    itens: 6,
    cor: categorias[1].cor,
  },
  {
    id: '3',
    nome: 'Açougue',
    imagem: categorias[2].imagem,
    data: '20/05/2024',
    valor: 56.44,
    itens: 3,
    cor: categorias[2].cor,
  },
];

export default function ListaComprasScreen() {
  const [selectedTab, setSelectedTab] = useState('Lista');
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
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Saudação */}
      <Text style={styles.sub}>Seja bem-vindo,</Text>
      <Text style={styles.title}>Vamos pedir itens fresquinhos para você?</Text>

      {/* Categorias */}
      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.categoriasContainer}>
        {categorias.map((cat) => (
          <TouchableOpacity key={cat.id} style={[styles.cardCategoria, { backgroundColor: cat.cor }]}>
            <Image source={{ uri: cat.imagem }} style={styles.cardImage} />
            <Text style={styles.cardText}>{cat.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Minhas Compras */}
      <Text style={styles.sectionTitle}>Minhas Compras</Text>
      <FlatList
        data={compras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.compraItem}>
            <View style={styles.compraEsquerda}>
              <Image source={{ uri: item.imagem }} style={[styles.compraImagem, { backgroundColor: item.cor }]} />
              <View>
                <Text style={styles.compraNome}>{item.nome}</Text>
                <Text style={styles.compraData}>{item.data}</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.compraValor}>${item.valor.toFixed(2)}</Text>
              <Text style={styles.compraItens}>{item.itens} itens</Text>
            </View>
          </View>
        )}
      />
    
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
    marginBottom: 24,
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
  sub: {
    color: '#aaa',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 12,
  },
  categoriasContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  cardCategoria: {
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    width: 90,
  },
  cardImage: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
  },
  compraItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  compraEsquerda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  compraImagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  compraNome: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  compraData: {
    color: '#666',
    fontSize: 12,
  },
  compraValor: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  compraItens: {
    fontSize: 12,
    color: '#888',
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
