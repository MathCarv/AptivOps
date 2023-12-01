import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './src/components/TelaPrincipal'; // Ajuste o caminho conforme necessário
import Login from './src/components/Login';
import Beneficios from './src/components/Beneficios';
import CartaoFarmacia from './src/components/CartaoFarmacia';
import Frota from './src/components/Frota';
import Holerite from './src/components/Holerite';
import Parcerias from './src/components/Parcerias';
import Unimed from './src/components/Unimed';
import SeguroDeVida from './src/components/SeguroDeVida';
import Restaurante from './src/components/Restaurante';
import Indicadores from './src/components/Indicadores';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ headerShown: false }}/>
      <Stack.Screen name="Beneficios" component={Beneficios} options={{ headerShown: false }}/>
      <Stack.Screen name="CartaoFarmacia" component={CartaoFarmacia} options={{ headerShown: false }}/>
      <Stack.Screen name="Frota" component={Frota} options={{ headerShown: false }}/>
      <Stack.Screen name="Holerite" component={Holerite} options={{ headerShown: false }}/>
      <Stack.Screen name="Parcerias" component={Parcerias} options={{ headerShown: false }}/>
      <Stack.Screen name="Unimed" component={Unimed} options={{ headerShown: false }}/>
      <Stack.Screen name="SeguroDeVida" component={SeguroDeVida} options={{ headerShown: false }}/>
      <Stack.Screen name="Restaurante" component={Restaurante} options={{ headerShown: false }}/>
      <Stack.Screen name="Indicadores" component={Indicadores} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;
