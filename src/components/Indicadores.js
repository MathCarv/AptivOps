import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    content: {
        fontSize: 18,
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

const Indicadores = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Benefícios</Text>
                <Text style={styles.content}>
                    Aqui você encontrará informações sobre os benefícios oferecidos pela empresa, incluindo saúde, bem-estar, férias e muito mais.
                </Text>
            </View>
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
                            <Image source={require("../../assets/indicadores-icon.png")} style={{ width: 30, height: 30, marginLeft: 35, borderColor: 'blue', borderWidth: 2, borderRadius: 15}} />
                        </View>
                        <Text style={styles.buttonTextBlue}>Indicadores</Text>
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
        </View>
    );
};

export default Indicadores;
