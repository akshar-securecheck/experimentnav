import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
