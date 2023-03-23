/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
  StyleSheet
} from 'react-native';
import LoginScreen from './Screens/LoginScrren';
import ScrollScreen from './Screens/ScrollScreen';
import ForgotScreen from './Screens/ForgotScreen';
import OTPScreen from './Screens/OTPScreen';
import ChangeNumScreen from './Screens/ChangeNumScreen';






const App = () => {
  const Stack = createNativeStackNavigator();


  return (
    
       <NavigationContainer>
        <Stack.Navigator initialRouteName="LogoScreen">
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp' component={ScrollScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Fpass' component={ForgotScreen} options={{headerShown:false}}/>
          <Stack.Screen name='OTP' component={OTPScreen} options={{headerShown:false}}/>
          <Stack.Screen name='ChangeNum' component={ChangeNumScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>       
    
   
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
  },
});

export default App;
