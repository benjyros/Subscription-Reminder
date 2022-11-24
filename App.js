import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CreateReminder from './screens/CreateReminder';
import EditReminder from './screens/EditReminder';
import DeleteReminder from './screens/DeleteReminder';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateReminder" component={CreateReminder} />
        <Stack.Screen name="editReminder" component={EditReminder} />
        <Stack.Screen name="deleteReminder" component={DeleteReminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Ocean palette: 213861 345da7 3b8ac4 4bb4de efdbcb
const styles = StyleSheet.create({

});
export default App;