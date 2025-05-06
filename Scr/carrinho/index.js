import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const categorias = [
  {
    id: '1',
    nome: 'Frutas',
    valor: 50.0,
    itens: 5,
    imagem: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
  },
  {
    id: '2',
    nome: 'Diversos',
    valor: 35.4,
    itens: 6,
    imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046794.png',
  },
  {
    id: '3',
    nome: 'Açougue',
    valor: 56.44,
    itens: 3,
    imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png',
  },
];

export default function CarrinhoScreen({ navigation }) {
  const total = categorias.reduce((acc, item) => acc + item.valor, 0).toFixed(2);

  return (
    <View style={styles.container}>
      {/* Botão voltar */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Meu carrinho</Text>

      {/* Lista de categorias */}
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemLeft}>
              <Image source={{ uri: item.imagem }} style={styles.image} />
              <View>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <Text style={styles.itemValor}>${item.valor.toFixed(2)} • {item.itens} itens</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.editar}>✎ Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Rodapé */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Total a pagar</Text>
          <Text style={styles.footerValor}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.pagarButton}>
          <Text style={styles.pagarButtonText}>Pagar agora →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 24,
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  itemNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemValor: {
    fontSize: 14,
    color: '#777',
  },
  editar: {
    color: '#6C63FF',
    fontSize: 14,
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: '#e0e7ff',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLabel: {
    fontSize: 14,
    color: '#444',
  },
  footerValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  pagarButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  pagarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});
