import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CreateReminder from './screens/CreateReminder';
import Tutorial1 from './screens/tutorial1';
import Tutorial2 from './screens/tutorial2';
import Tutorial3 from './screens/tutorial3';
import Tutorial4 from './screens/tutorial4';
import Tutorial5 from './screens/tutorial5';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Tutorial1" component={Tutorial1} />
          <Stack.Screen name="Tutorial2" component={Tutorial2} />
          <Stack.Screen name="Tutorial3" component={Tutorial3} />
          <Stack.Screen name="Tutorial4" component={Tutorial4} />
          <Stack.Screen name="Tutorial5" component={Tutorial5} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateReminder" component={CreateReminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Ocean palette: 213861 345da7 3b8ac4 4bb4de efdbcb
const styles = StyleSheet.create({

});
export default App;