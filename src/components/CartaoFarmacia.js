import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  cardContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  pharmacyImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

const CartaoFarmacia = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Cartão Farmácia</Text>
        <Image
          source={require('../../assets/pharmacy_card.jpeg')} // Substitua pelo caminho real da imagem
          style={styles.pharmacyImage}
          resizeMode="cover"
        />
        <Text style={styles.content}>
          Apresente este cartão em nossa farmácia parceira para obter descontos exclusivos em medicamentos e produtos de saúde.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Aqui vai para mais Detalhes')}>
          <Text style={styles.buttonText}>Mais Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartaoFarmacia;
