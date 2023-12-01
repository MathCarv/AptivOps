import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 100,
    width: '95%',
  },
  searchIcon: {
    fontSize: 24,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    left: 20,
    alignItems: 'flex-start',
    marginTop: 20,
  },
  icon: {
    width: 170, // Tamanho significativo
    height: 100, // Tamanho significativo
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3, // Espaçamento entre os ícones
  },
  iconLabel: {
    fontSize: 18,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 13,
    right: 20,
    textAlign: "left",
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
    alignItems: 'center',
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

const Icon = ({ label, backgroundColor, action, imageName }) => {
  return (
    <TouchableOpacity style={[styles.icon, { backgroundColor }]} onPress={action}>
      <Image source={imageName} style={{ width: 59, height: 57, position: 'absolute', top: 9, left: 16 }} />
      <Text style={styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const TelaPrincipal = ({ route }) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [filteredIcons, setFilteredIcons] = useState([]);

  const selectedCity = route.params?.selectedCity || "Paraisópolis"; // Padrão é Paraisópolis se não houver cidade selecionada

  const userSpecificIcons = [
    {
      label: "Beneficios",
      name: "Beneficios",
      backgroundColor: "#14b8b8",
      imageName: require('../../assets/Beneficios.png'),
    },
    {
      label: "Holerite",
      name: "Holerite",
      backgroundColor: "green",
      imageName: require('../../assets/Holerite.png'),
    },
    {
      label: "Frota",
      name: "Frota",
      backgroundColor: "#92a8d1",
      imageName: require('../../assets/Frota.png'),
    },
    {
      label: "Parcerias",
      name: "Parcerias",
      backgroundColor: "#eead2d",
      imageName: require('../../assets/Parceria.png'),
    },
    {
      label: "Chevrolet",
      name: "Chevrolet",
      backgroundColor: "#FF0000",
      imageName: require('../../assets/Chevrolet.png'),
    },
    {
      label: "Restaurante",
      name: "Restaurante",
      backgroundColor: "#CA7004",
      imageName: require('../../assets/Restaurante.png'),
    },
    {
      label: "Unimed",
      name: "Unimed",
      backgroundColor: "#0DC694",
      imageName: require('../../assets/Unimed.png'),
    },
    {
      label: "SeguroDeVida",
      name: "SeguroDeVida",
      backgroundColor: "#0B5864",
      imageName: require('../../assets/SeguroDeVida.png'),
    },
    {
      label: "CartaoFarmacia",
      name: "CartaoFarmacia",
      backgroundColor: "#AF2147",
      imageName: require('../../assets/CartaoFarmacia.png'),
    },
    {
      label: "Whatsapp",
      name: "Whatsapp",
      backgroundColor: "#56D304",
      imageName: require('../../assets/Whatsapp.png'),
    },
  ];

  useEffect(() => {
    const citySpecificIcons = {
      'Conceição dos Ouros': ['Beneficios', 'Holerite', 'Frota', 'Whatsapp'],
      'ES. Santo do Pinhal': ['SeguroDeVida', 'CartaoFarmacia', 'Unimed', 'Restaurante'],
      'Paraisópolis': ['Beneficios', 'Holerite', 'Parcerias','Chevrolet', 'Frota', 'Whatsapp', 'SeguroDeVida', 'CartaoFarmacia', 'Unimed', 'Restaurante'],
    };

    const allowedIcons = citySpecificIcons[selectedCity] || [];

    const filtered = userSpecificIcons.filter((icon) =>
      allowedIcons.includes(icon.name)
    );
    setFilteredIcons(filtered);
  }, [searchText, selectedCity]);

  const navigationMap = {
    "Beneficios": "Beneficios",
    "CartaoFarmacia": "CartaoFarmacia",
    "Chevrolet": "Chevrolet",
    "Frota": "Frota",
    "Holerite": "Holerite",
    "Parcerias": "Parcerias",
    "Restaurante": "Restaurante",
    "SeguroDeVida": "SeguroDeVida",
    "Unimed": "Unimed",
    "Whatsapp": "WhatsappRH",
  };

  const handleAction = (name) => {
    console.log("Ação para", name);
    const whatsappLink = 'https://api.whatsapp.com/send?phone=5535988574970';

    if (name === "Whatsapp") {
      Linking.openURL(whatsappLink);
    } else if (name === "Chevrolet") {
      const chevroletAppLink = 'https://apps.apple.com/br/app/mychevrolet/id398596699';
      Linking.openURL(chevroletAppLink);
    } else if (name === "Unimed") {
      const UnimedAppLink = 'https://apps.apple.com/br/app/unimed-cliente/id1458902471';
      Linking.openURL(UnimedAppLink);
    } else {
      const destination = navigationMap[name];
      if (destination) {
        navigation.navigate(destination);
      }
    }
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={require("../../assets/principalbackground.jpg")} style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, { color: 'red' }]}>• Aptiv</Text>
        <Text style={[styles.text, { color: 'black' }]}>Ops •</Text>
      </View>
      <View style={styles.searchBar} testID="searchBar">
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <ScrollView contentContainerStyle={styles.iconContainer}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
          {filteredIcons.map((icon, index) => (
            <Icon
              key={index}
              label={icon.label}
              backgroundColor={icon.backgroundColor}
              action={() => handleAction(icon.name)}
              imageName={icon.imageName}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("TelaPrincipal")} testID="principalIcon">
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require("../../assets/principal-icon.png")} style={{ width: 30, height: 30, marginLeft: 35, borderColor: 'blue', borderWidth: 1, borderRadius: 15 }} />
            </View>
            <Text style={styles.buttonTextBlue}>Principal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Indicadores")} testID="indicadoresIcon">
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require("../../assets/indicadores-icon.png")} style={{ width: 30, height: 30, marginLeft: 35 }} />
            </View>
            <Text style={styles.buttonText}>Indicadores</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TelaPrincipal;
