import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Treinos from '../screens/Treinos';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import colors from '../../colors'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function AppRotas(){


    return <NavigationContainer theme={DarkTheme} >
            <Tab.Navigator 
                tabBarIcon={true}
                sceneContainerStyle={styles.tabNav} 
                screenOptions={{
                    headerShown: false,
                    headerStyle: styles.header,               
                }} >


                    <Tab.Screen  name="HomeTab" component={Home} 
                    options={{
                        tabBarLabel: 'Inicio',
                        tabBarActiveTintColor : colors.green,
                        tabBarIcon: ({ color, size }) => (
                          <>
                            <Feather name="home" size={size} color={color} />
                          </>
                        ),
                      }}
                    />
                    <Tab.Screen name="Treinos" component={Treinos}
                    options={{
                        tabBarLabel: 'Treinos',
                        tabBarActiveTintColor : colors.green,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
                        ),
                      }}
                    />
                    <Tab.Screen name="Perfil" component={Perfil}
                    options={{
                        tabBarLabel: 'Perfil',
                        tabBarActiveTintColor : colors.green,
                        tabBarIcon: ({ color, size }) => (
                          <Feather name="user" color={color} size={size} />
                        ),
                      }}
                    />

                </Tab.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    tabNav: {
        backgroundColor: colors.background,

    },
    header: {
        backgroundColor: colors.white, 
        
    },
})