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

const Holerite = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Holerites</Text>
            <Text style={styles.content}>
                Aqui você encontrará informações sobre os Holerites
            </Text>
        </View>
    );
};

export default Holerite;
