import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  holeriteImage: {
    width: '80%', // Usei uma porcentagem da largura da tela para manter a proporção
    height: undefined, // Deixe undefined para manter a proporção original
    aspectRatio: 4 / 6, // Proporção da sua imagem (width/height)
    marginBottom: 20,
  },
  visitPdfButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20, // Adicionei um pequeno espaçamento acima do botão
  },
  visitPdfButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Alinhei o texto ao centro
  },
});

const Holerite = () => {
  const holeritePreviewImage = require('../../assets/HoleritePreview.png');
  const pdfLink = 'https://drive.google.com/file/d/1cH7Rov12IYA3YhxsViIatoa-ewpp0ib5/view?usp=sharing';

  const openPDF = () => {
    Linking.openURL(pdfLink);
  };

  return (
    <View style={styles.container}>
      <Image source={holeritePreviewImage} style={styles.holeriteImage} resizeMode="contain" />
      <TouchableOpacity onPress={openPDF} style={styles.visitPdfButton}>
        <Text style={styles.visitPdfButtonText}>Visitar PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Holerite;
