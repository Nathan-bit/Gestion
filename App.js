import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './connection/Login'; // Replace with correct import path
import RegistrationScreen from './connection/Registration'; // Replace with correct import path
import ForgetPasswordScreen from './connection/ForgetPassword'; // Replace with correct import path
import RegistrationSuccessMessages from './connection/RegistrationSuccessMessages';
import HomePage from './Home/HomePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connection">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegistrationSuccessMessages" component={RegistrationSuccessMessages} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
