import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Indicadores = () => {
  const [vendasData, setVendasData] = useState([]);
  const [gastosData, setGastosData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vendasResponse = await axios.get('http://192.168.10.4:3000/Indicadores', {
          params: {
            nome: 'Vendas Mensais',
          },
        });
        const gastosResponse = await axios.get('http://192.168.10.4:3000/indicadores-gastos');

        const vendasData = vendasResponse.data;
        const gastosData = gastosResponse.data;

        setVendasData(vendasData);
        setGastosData(gastosData);
      } catch (error) {
        console.error('Erro ao buscar dados do servidor:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Gráfico de Vendas Mensais */}
      <Text style={styles.title}>Ano Relativo: 2023</Text>
      <Text style={styles.title}>Gráfico de Vendas Mensais</Text>
      {vendasData.length > 0 ? (
        <LineChart
          data={{
            labels: vendasData.map(item => item.mes),
            datasets: [
              {
                data: vendasData.map(item => item.valor),
              },
            ],
          }}
          width={350}
          height={220}
          yAxisLabel="R$"
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            propsForBackgroundLines: {
              strokeDasharray: '', // remove lines
            },
          }}
          style={styles.chart}
          bezier
        />
      ) : (
        <Text style={styles.noDataText}>Nenhum dado disponível</Text>
      )}

      {/* Gráfico de Indicadores de Gastos */}
      <Text style={styles.title}>Gráfico de Gastos Mensais</Text>
      {gastosData.length > 0 ? (
        <LineChart
          data={{
            labels: gastosData.map(item => item.mes),
            datasets: [
              {
                data: gastosData.map(item => item.valor),
              },
            ],
          }}
          width={350}
          height={220}
          yAxisLabel="R$"
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Cor vermelha para diferenciar
            propsForBackgroundLines: {
              strokeDasharray: '', // remove lines
            },
          }}
          style={styles.chart}
          bezier
        />
      ) : (
        <Text style={styles.noDataText}>Nenhum dado disponível</Text>
      )}

      <View style={styles.footer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("TelaPrincipal")}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require("../../assets/principal-icon.png")} style={{ width: 30, height: 30, marginLeft: 35 }} />
            </View>
            <Text style={styles.buttonText}>Principal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Indicadores")}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require("../../assets/indicadores-icon.png")} style={{ width: 30, height: 30, marginLeft: 35, borderColor: 'blue', borderWidth: 1, borderRadius: 15}} />
            </View>
            <Text style={styles.buttonTextBlue}>Indicadores</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 16,
    borderRadius: 16,
  },
  noDataText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 4,
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    marginLeft: 35,
  },
  buttonTextBlue: {
    textAlign: 'center',
    marginLeft: 35,
    color: 'blue',
  },
});

export default Indicadores;
