import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Fundo branco
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Cor do texto
  },
  seguroDeVidaImage: {
    width: 850, // Ajuste a largura conforme necessário
    height: 650, // Ajuste a altura conforme necessário
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    color: '#333', // Cor do texto
    textAlign: 'center',
    marginBottom: 20,
  },
  visitPdfButton: {
    backgroundColor: '#2ecc71', // Cor do botão
    padding: 15,
    borderRadius: 10,
  },
  visitPdfButtonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const SeguroDeVida = () => {
  const seguroDeVidaImage = require('../../assets/SeguroPreview.png');
  const pdfLink = 'https://drive.google.com/file/d/13EaAEsUuyN4kU8UJvY2xPkyydNtVf66x/view?usp=sharing';

  const openPDF = () => {
    Linking.openURL(pdfLink);
  };

  return (
    <View style={styles.container}>
      <Image source={seguroDeVidaImage} style={styles.seguroDeVidaImage} resizeMode="contain" />
      <TouchableOpacity onPress={openPDF} style={styles.visitPdfButton}>
        <Text style={styles.visitPdfButtonText}>Visitar PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SeguroDeVida;
