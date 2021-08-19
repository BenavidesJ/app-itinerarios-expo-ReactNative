import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import ViewItin from '../views/ViewItin';
import CreateItin from '../views/CreateItin';
import Navbar from '../components/Navbar';

export const MAIN = 'MAIN';
export const CREATE = 'CREATE';
export const VIEW_ITIN = 'VIEW_ITIN';

const StackNav = createStackNavigator();

export const MainStackNavigation = () => {

    return(
        <StackNav.Navigator 
            initialRouteName = 'Home'
        >
            {/* Navegación a Página Principal */}
            <StackNav.Screen 
                name={MAIN}
                component= {Main}
                options = {
                    {
                        title: 'Home',
                        headerTitleAlign: 'center',
                        
                    }
                }
            />

            {/* Navegación a Ver Itinerario*/}
            <StackNav.Screen 
                name={VIEW_ITIN}
                component= {ViewItin}
                options = {
                    {
                        title: 'Details',
                        headerTitleAlign: 'center'
                    }
                }
            />

            {/* Navegación a crear Itinerario*/}
            <StackNav.Screen 
                name={CREATE}
                component= {CreateItin}
                options = {
                    {
                        title: 'New Itinerary',
                        headerTitleAlign: 'center'
                    }
                }
            />
        </StackNav.Navigator>
    )
} 