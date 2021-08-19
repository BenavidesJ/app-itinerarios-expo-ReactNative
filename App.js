import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigation } from './nav/MainStackNavigation';
import {AppDataProvider} from './context/AppDataContext';

export default function App() {
  return (
    <AppDataProvider>
      <NavigationContainer>
        <MainStackNavigation/>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppDataProvider>
  );
}


