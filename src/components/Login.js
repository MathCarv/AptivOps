import React, { useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import authService from '../../server/authService';

const Login = ({ navigation }) => {
  const handleLogin = async () => {
    try {
      // Simule o processo de autenticação, pois não há campos de entrada
      const response = await authService.login('usuariodeexemplo', 'senhadeexemplo');

      if (response.success) {
        // Autenticação bem-sucedida, você pode continuar com o código de navegação ou outra lógica
        navigation.navigate('TelaPrincipal');
      } else {
        // Tratar erro de autenticação
        console.error('Erro de login:', response.error);
      }
    } catch (error) {
      // Trate erros de rede ou outros erros inesperados
      console.error('Erro de login:', error);
    }
  };

  return (
    <ImageBackground source={require('../../assets/loginbackground.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.text, { color: 'red' }]}>• Aptiv</Text>
          <Text style={[styles.text, { color: 'black' }]}>Ops •</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/Aptiv.png')} style={styles.logoAptiv} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 26,
    alignSelf: 'center',
  },
  text: {
    fontSize: 43,
    fontWeight: 'bold',
  },
  button: {
    width: '60%',
    backgroundColor: 'red',
    borderRadius: 4,
    marginBottom: 130,
    padding: 10,
    marginTop: 495,
    left: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logoAptiv: {
    width: 200, // Largura desejada
    height: 50, // Altura desejada
    marginTop: 80, // Controle a posição vertical conforme necessário
  },
});

export default Login;
