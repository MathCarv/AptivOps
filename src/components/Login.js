import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { AzureInstance, AzureLoginView } from 'react-native-azure-ad-2';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '@env';
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import { Picker } from '@react-native-picker/picker';

const CREDENTIALS = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  scope: 'User.Read openid profile offline_access',
};

const azureInstance = new AzureInstance(CREDENTIALS);

const Login = ({ navigation }) => {
  const [loginStarted, setLoginStarted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [azureLoginObject, setAzureLoginObject] = useState({});
  const [selectedCity, setSelectedCity] = useState('Conceição dos Ouros');

  useFocusEffect(
    React.useCallback(() => {
      // Reseta o estado quando a tela recebe foco
      return () => {
        setLoginStarted(false);
        setLoginSuccess(false);
      };
    }, [])
  );

  const onLoginSuccess = async () => {
    try {
      const result = await azureInstance.getUserInfo();
      setLoginSuccess(true);
      setAzureLoginObject(result);
    } catch (error) {
      console.error('Erro de login:', error);
    }
  };

  // Redirecione para a tela principal quando o login for bem-sucedido
  useEffect(() => {
    if (loginSuccess) {
      RCTNetworking.clearCookies(() => {});
      navigation.navigate('TelaPrincipal');
    }
  }, [loginSuccess, navigation]);

  // Função para renderizar o componente AzureLoginView em tela cheia
  const renderAzureLoginView = () => {
    return (
      <View style={styles.fullScreenAzure}>
        <AzureLoginView
          azureInstance={azureInstance}
          onSuccess={onLoginSuccess}
          style={{flex: 1}} // Garante tela cheia
        />
      </View>
    );
  };

  return (
    <ImageBackground source={require('../../assets/loginbackground.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.text, { color: 'red' }]} testID="logo">• Aptiv</Text>
          <Text style={[styles.text, { color: 'black' }]}>Ops •</Text>
        </View>
        {!loginStarted ? (
          <>
            <TouchableOpacity style={styles.button} onPress={() => setLoginStarted(true)} testID="loginButton">
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCity}
                onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
                style={styles.picker}
                testID="passwordInput"
              >
                <Picker.Item label="Conceição dos Ouros" value="Conceição dos Ouros" />
                <Picker.Item label="ES. Santo do Pinhal" value="ES. Santo do Pinhal" />
                <Picker.Item label="Paraisópolis" value="Paraisópolis" />
              </Picker>
            </View>
          </>
        ) : loginSuccess ? (
          <View style={styles.loginSuccessContainer}>
          </View>
        ) : (
          renderAzureLoginView()
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fullScreenAzure: {
    ...StyleSheet.absoluteFillObject, // Isso faz com que a view preencha toda a tela
    backgroundColor: 'white', // Garantindo que o fundo seja opaco
  },
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
    borderRadius: 15,
    marginBottom: 2,
    padding: 10,
    marginTop: 495,
    left: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pickerContainer: {
    marginBottom: 260,
    backgroundColor: 'red',
    marginLeft: 13,
    width: '60%',
    borderRadius: 15,
    marginTop: 10, 
    borderColor: 'red',
  },
  picker: {
    height: 50,
    color: 'white',
    alignItems: 'center',
    width: '100%',
  },
  logoAptiv: {
    position: 'absolute',
    bottom: 0, 
    width: 200,
    height: 50,
    marginTop: 80,
  },
  loginSuccessContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    flex: 1,
    backgroundColor: 'white', // Defina a cor de fundo desejada
  },
});

export default Login;
