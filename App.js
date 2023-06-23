// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import DataRecordingScreen from './screens/DataRecordingScreen';
import InformationDisplayScreen from './screens/InformationDisplayScreen';
import setupDatabase from './database';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setupDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="DataRecording" component={DataRecordingScreen} />
        <Stack.Screen
          name="InformationDisplay"
          component={InformationDisplayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
