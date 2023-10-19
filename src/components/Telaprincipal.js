import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Button, ImageBackground, StyleSheet, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
        width: '95%'
    },
    searchIcon: {
        fontSize: 24,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1
    },
    iconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        width: '90%', 
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
    }
});

const Icon = ({ label, backgroundColor, action, imageName }) => {
    return (
        <TouchableOpacity style={[styles.icon, { backgroundColor }]} onPress={action}>
            <Image 
                source={imageName} 
                style={{ width: 59, height: 57, position: 'absolute', top: 9, left: 16 }} 
            />
            <Text style={styles.iconLabel}>{label}</Text>
        </TouchableOpacity>
    );
};


const TelaPrincipal = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");
    const [filteredIcons, setFilteredIcons] = useState([]); // Estado para armazenar os ícones filtrados com base na busca


    const userSpecificIcons = [
        {
            label: "Beneficios",
            name: "Beneficios",
            backgroundColor: "#14b8b8", // Cor de fundo do ícone Beneficios
            imageName: require('../../assets/Beneficios.png'),
        },
        {
            label: "Holerite",
            name: "Holerite",
            backgroundColor: "green", // Cor de fundo do ícone Holerite
            imageName: require('../../assets/Holerite.png'),
        },
        {
            label: "Frota",
            name: "Frota",
            backgroundColor: "#92a8d1", // Cor de fundo do ícone Frota
            imageName: require('../../assets/Frota.png'),
        },
        {
            label: "Parcerias",
            name: "Parcerias",
            backgroundColor: "#eead2d", // Cor de fundo do ícone Parcerias
            imageName: require('../../assets/Parceria.png'),
        },
        {
            label: "Chevrolet",
            name: "Chevrolet",
            backgroundColor: "#FF0000", // Cor de fundo do ícone Chevrolet
            imageName: require('../../assets/Chevrolet.png'),
        },
        {
            label: "Restaurante",
            name: "Restaurante",
            backgroundColor: "#CA7004", // Cor de fundo do ícone Restaurante
            imageName: require('../../assets/Restaurante.png'),
        },
        {
            label: "Unimed",
            name: "Unimed",
            backgroundColor: "#0DC694", // Cor de fundo do ícone Unimed
            imageName: require('../../assets/Unimed.png'),
        },
        {
            label: "Seguro de Vida",
            name: "SeguroDeVida",
            backgroundColor: "#0B5864", // Cor de fundo do ícone Seguro de Vida
            imageName: require('../../assets/SeguroDeVida.png'),
        },
        {
            label: "Cartão Farmácia",
            name: "CartaoFarmacia",
            backgroundColor: "#AF2147", // Cor de fundo do ícone Holerite
            imageName: require('../../assets/CartaoFarmacia.png'),
        },
        {
            label: "Whatsapp RH",
            name: "Whatsapp",
            backgroundColor: "#56D304", // Cor de fundo do ícone Holerite
            imageName: require('../../assets/Whatsapp.png'),
        },     
    ];

    useEffect(() => {
        // Lógica para filtrar os ícones com base na palavra-chave de busca
        const filtered = userSpecificIcons.filter((icon) =>
            icon.label.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredIcons(filtered);
    }, [searchText]);

    const navigationMap = {
        "Beneficios": "Beneficios",
        "Cartão Farmácia" : "CartaoFarmacia",
        "Chevrolet" : "Chevrolet",
        "Frota" : "Frota",
        "Holerite" : "Holerite",
        "Parcerias" : "Parcerias",
        "Restaurante" : "Restaurante",
        "Seguro de Vida" : "SeguroDeVida",
        "Unimed" : "Unimed",
        "Whatsapp RH" : "Whatsapp",
    };
    
    const handleAction = (name) => {
        console.log("Ação para", name);
        const destination = navigationMap[name];
        if (destination) {
            navigation.navigate(destination);
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
            <View style={styles.searchBar}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar"
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                />
            </View>
            <ScrollView contentContainerStyle={styles.iconContainer}>
                {filteredIcons.map((icon, index) => (
                    <Icon
                        key={index}
                        label={icon.label}
                        backgroundColor={icon.backgroundColor}
                        action={() => handleAction(icon.label)}
                        imageName={icon.imageName}  // Adicione esta linha
                    />
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("TelaPrincipal")}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../assets/principal-icon.png")} style={{ width: 30, height: 30, marginLeft: 35, borderColor: 'blue', borderWidth: 1, borderRadius: 15}} />
                        </View>
                        <Text style={styles.buttonTextBlue}>Principal</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("Indicadores")}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../assets/indicadores-icon.png")} style={{ width: 30, height: 30, marginLeft: 35 }} />
                        </View>
                        <Text style={styles.buttonText}>Indicadores</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("Configurações")}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../assets/configuracoes-icon.png")} style={{ width: 30, height: 30, marginLeft: 35 }} />
                        </View>
                        <Text style={styles.buttonText}>Configurações</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default TelaPrincipal;
