import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Button, ImageBackground, StyleSheet, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TelaPadraoWidgetPreview from './TelaPadraoWidgetPreview'; //Pra pt 2 do front

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
    }
});

const Icon = ({ label, backgroundColor, action }) => {
    return (
        <TouchableOpacity style={[styles.icon, { backgroundColor }]} onPress={action}>
            <Image source={{ uri: '/icons/${label}.png' }} />
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
            backgroundColor: "#14b8b8", // Cor de fundo do ícone Beneficios
        },
        {
            label: "Holerite",
            backgroundColor: "green", // Cor de fundo do ícone Holerite
        },
        {
            label: "Frota",
            backgroundColor: "#92a8d1", // Cor de fundo do ícone Holerite
        },
        {
            label: "Parcerias",
            backgroundColor: "#eead2d", // Cor de fundo do ícone Holerite
        },
        {
            label: "Chevrolet",
            backgroundColor: "#000000", // Cor de fundo do ícone Beneficios
        },
        {
            label: "Restaurante",
            backgroundColor: "#6e71ff", // Cor de fundo do ícone Holerite
        },
        {
            label: "Unimed",
            backgroundColor: "#7e9594", // Cor de fundo do ícone Holerite
        },
        {
            label: "Seguro de Vida",
            backgroundColor: "#6b8e23", // Cor de fundo do ícone Holerite
        },
        {
            label: "Cartão Farmácia",
            backgroundColor: "#ff0035", // Cor de fundo do ícone Holerite
        },
        {
            label: "Whatsapp RH",
            backgroundColor: "#19e619", // Cor de fundo do ícone Holerite
        },     
    ];

    useEffect(() => {
        // Lógica para filtrar os ícones com base na palavra-chave de busca
        const filtered = userSpecificIcons.filter((icon) =>
            icon.label.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredIcons(filtered);
    }, [searchText]);

    const handleAction = (label) => {
        console.log("Ação para", label);
        // Navegar para a tela de widget preview - PT2
        navigation.navigate("TelaPadraoWidgetPreview", { widgetLabel: label });
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
                    />
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("PrincipalScreen")}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../assets/principal-icon.png")} style={{ width: 30, height: 30, marginLeft: 35 }} />
                        </View>
                        <Text style={styles.buttonText}>Principal</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("IndicadoresScreen")}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../assets/indicadores-icon.png")} style={{ width: 30, height: 30, marginLeft: 35 }} />
                        </View>
                        <Text style={styles.buttonText}>Indicadores</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("ConfiguracoesScreen")}>
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
