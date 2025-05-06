import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation('Permissão negada para localização');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: '' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Entregamos mantimentos à sua porta</Text>
      <Text style={styles.description}>
        A mercearia oferece vegetais e frutas frescas. Encomende itens frescos na mercearia.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pesquisa')} // ou outra tela principal
      >
        <Text style={styles.buttonText}>INICIAR →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
