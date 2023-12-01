import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#f4511e',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    padding: 20,
  },
  placeContainer: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
  },
  placeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  placeDescription: {
    fontSize: 16,
    color: '#666',
  },
});

const Restaurante = () => {
  const nearbyPlaces = [
    {
      name: 'Café Aconchegante',
      description: 'Um café tranquilo com uma variedade de bebidas quentes e opções de lanches.',
      image: require('../../assets/cafe.jpg'),
    },
    {
      name: 'Pizzaria Saborosa',
      description: 'A melhor pizza da região, com diversas opções de sabores irresistíveis.',
      image: require('../../assets/pizzaria.jpg'),
    },
    {
      name: 'Lanchonete Rápida',
      description: 'Uma lanchonete perfeita para refeições rápidas, oferecendo sanduíches e saladas.',
      image: require('../../assets/lanchonete.jpg'),
    },
    // Adicione mais lugares fictícios conforme necessário
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {nearbyPlaces.map((place, index) => (
          <View key={index} style={styles.placeContainer}>
            <Image source={place.image} style={styles.placeImage} resizeMode="cover" />
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.placeDescription}>{place.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Restaurante;
