import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  partnershipContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  partnerLogo: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  partnerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  partnerDescription: {
    fontSize: 16,
    color: '#555',
  },
});

const Parcerias = () => {
  const partnerships = [
    {
      logo: require('../../assets/partner_logo.jpg'), // Substitua pelo caminho real da imagem
      name: 'Empresa Parceira 1',
      description: 'Descrição da parceria com a Empresa Parceira 1. Ofertas exclusivas para nossos colaboradores.',
    },
    {
      logo: require('../../assets/partner_logo.jpg'), // Substitua pelo caminho real da imagem
      name: 'Empresa Parceira 2',
      description: 'Descrição da parceria com a Empresa Parceira 2. Descontos especiais em produtos e serviços.',
    },
    {
      logo: require('../../assets/partner_logo.jpg'), // Substitua pelo caminho real da imagem
      name: 'Empresa Parceira 3',
      description: 'Descrição da parceria com a Empresa Parceira 2. Descontos especiais em produtos e serviços.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {partnerships.map((partnership, index) => (
        <View key={index} style={styles.partnershipContainer}>
          <Image source={partnership.logo} style={styles.partnerLogo} resizeMode="cover" />
          <Text style={styles.partnerName}>{partnership.name}</Text>
          <Text style={styles.partnerDescription}>{partnership.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Parcerias;
