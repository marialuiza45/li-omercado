import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Scr/home/index';
import CarrinhoScreen from './Scr/carrinho/index';
import ListaScreen from './Scr/lista/index';
import PesquisaScreen from './Scr/pesquisa/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        <Stack.Screen name="Lista" component={ListaScreen} />
        <Stack.Screen name="Pesquisa" component={PesquisaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
