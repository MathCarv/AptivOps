import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
});

const SeguroDeVida = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Benefícios</Text>
            <Text style={styles.content}>
                Aqui você encontrará informações sobre os benefícios oferecidos pela empresa, incluindo saúde, bem-estar, férias e muito mais.
            </Text>
        </View>
    );
};

export default SeguroDeVida;
