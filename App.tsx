import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import RootStack from './src/navigation/RootStack';

// screens

export default function App() {
  return <RootStack />;
}

