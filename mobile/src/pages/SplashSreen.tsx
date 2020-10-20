import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import logo from '../images/map-marker.png';

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => { navigation.navigate('OrphanagesMap') }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>happy</Text>
            <Text style={styles.footer}>By Victor Gabriel</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10C1CB',
    },
    title: {
        marginTop: 10,
        fontSize: 50,
        fontFamily: 'Nunito_700Bold',
        color: '#FFF',
        textAlign: 'center',
    },
    footer: {
        fontSize: 14,
        fontFamily: 'Nunito_600SemiBold',
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 200

    }
})

export default SplashScreen;