import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#3498db',
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
    alignItems: 'center',
  },
  scheduleContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    padding: 15,
    width: '80%', // Ajuste a largura conforme necessário
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  scheduleDetails: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center', // Adicionei essa propriedade para centralizar o texto
  },
});

const Frota = () => {
  const busSchedules = [
    {
      route: 'Linha 1 - Centro',
      timings: ['08:00 AM', '12:30 PM', '04:45 PM'],
    },
    {
      route: 'Linha 2 - Subúrbio',
      timings: ['09:15 AM', '02:00 PM', '06:30 PM'],
    },
    {
      route: 'Linha 3 - Zona Sul',
      timings: ['07:45 AM', '01:20 PM', '05:10 PM'],
    },
    {
      route: 'Linha 4 - Oeste',
      timings: ['10:00 AM', '03:45 PM', '08:15 PM'],
    },
    {
      route: 'Linha 5 - Leste',
      timings: ['11:30 AM', '05:15 PM', '09:45 PM'],
    },
    {
      route: 'Linha 6 - Norte',
      timings: ['07:00 AM', '12:45 PM', '06:00 PM'],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {busSchedules.map((schedule, index) => (
          <View key={index} style={styles.scheduleContainer}>
            <Text style={styles.scheduleTitle}>{schedule.route}</Text>
            <Text style={styles.scheduleDetails}>
              {schedule.timings.join('  ')}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Frota;
