import { StyleSheet, View, FlatList} from 'react-native';
import React, { useState } from 'react';
import Element from './components/Element';
import ListNews from './components/ListNews';
import { AppProvider, useAppContext } from './AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={ListNews} />
          <Stack.Screen name="News" component={Element} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}