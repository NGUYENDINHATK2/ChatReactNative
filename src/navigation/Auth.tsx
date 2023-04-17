import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


//?import screens
import LoginScreen from '../screens/Auth/LoginScreen';
interface Props{}
export type AuthStackParamList = {
    LoginScreen: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();


const AuthNavigation:FunctionComponent<Props> = ({}) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;