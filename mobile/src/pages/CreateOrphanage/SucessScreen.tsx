import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const SucessScreen = () => {

    const navigation = useNavigation();

    function goHome() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ebaaa!</Text>
            <Text style={styles.text}>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</Text>
            <RectButton style={styles.button} onPress={goHome}><Text style={styles.textButton}>Ok</Text></RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#39CC83'
    },
    title: {
        fontSize: 50,
        fontFamily: 'Nunito_700Bold',
        marginBottom: 50,
        color: '#FFF'
    },
    text: {
        marginBottom: 25,
        maxWidth: 300,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Nunito_600SemiBold',
        color: '#FFF'
    },
    button: {
        width: 100,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#19C06D',
        borderRadius: 20
    },
    textButton: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        color: '#FFF'
    }
});

export default SucessScreen;