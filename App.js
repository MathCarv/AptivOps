// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'; // Import your AppNavigator

function App() {
  return (
    <NavigationContainer>
      <AppNavigator /> 
    </NavigationContainer>
  );
}

export default App;
