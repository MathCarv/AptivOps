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
  benefitContainer: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
  },
  benefitImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  benefitDescription: {
    fontSize: 16,
    color: '#666',
  },
});

const Beneficios = () => {
  const benefits = [
    {
      title: 'Plano de Saúde',
      description: 'Oferecemos um plano de saúde abrangente para garantir o bem-estar de nossos colaboradores e suas famílias.',
      image: require('../../assets/health_insurance.jpg'),
    },
    {
      title: 'Programa de Bem-Estar',
      description: 'Incentivamos um estilo de vida saudável com programas de bem-estar, incluindo aulas de yoga e ginástica.',
      image: require('../../assets/wellness_program.png'),
    },
    {
      title: 'Férias Remuneradas',
      description: 'Proporcionamos períodos de férias remuneradas para que nossos colaboradores possam descansar e recarregar as energias.',
      image: require('../../assets/paid_time_off.png'),
    },
    // Adicione mais benefícios fictícios conforme necessário
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {benefits.map((benefit, index) => (
          <View key={index} style={styles.benefitContainer}>
            <Image source={benefit.image} style={styles.benefitImage} resizeMode="cover" />
            <Text style={styles.benefitTitle}>{benefit.title}</Text>
            <Text style={styles.benefitDescription}>{benefit.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Beneficios;
