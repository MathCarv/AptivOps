import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Telaprincipal from './Telaprincipal';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //AQUI VEM A LÓGICA DA API DO BACK PARA LOGAR, IMPLEMENTAREMOS MAIS PRA FRENTE
  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Telaprincipal');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ImageBackground source={require('../../assets/loginbackground.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.text, { color: 'red' }]}>• Aptiv</Text>
          <Text style={[styles.text, { color: 'black' }]}>Ops •</Text>
        </View>
        <TextInput
          style={[styles.input, { color: 'black', marginBottom: 10 }]}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.passwordInput, { color: 'black' }]}
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={togglePasswordVisibility}
          >
            <Image
              source={isPasswordVisible ? require('../../assets/visivel.png') : require('../../assets/escondido.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Telaprincipal" component={Telaprincipal} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 280,
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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    paddingLeft: 20,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    paddingLeft: 20,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
