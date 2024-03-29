import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import Header from './components/Header';
import SplashScreen from './pages/SplashSreen';
import SucessScreen from './pages/CreateOrphanage/SucessScreen';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
                <Screen
                    name="SplashScreen"
                    component={SplashScreen}
                />

                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                />

                <Screen
                    name="OrphanageDetails"
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato" />,
                    }}
                />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa" />
                    }}
                />

                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />

                <Screen
                    name="SucessScreen"
                    component={SucessScreen}
                />

            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;