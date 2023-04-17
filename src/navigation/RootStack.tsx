import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';

// import screens
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeStack from './HomePage';
import AuthNavigation from './Auth';
import ChatRoomScreen from '../screens/ChatRoomScreen';

//?type
export type RootStackParamList = {
    WelcomeScreen: undefined;
    AuthNavigation: undefined;
    HomeStack: undefined;
    ChatRoomScreen: { id: string };
}

const Stack = createStackNavigator<RootStackParamList>();


const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="WelcomeScreen"
            >
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AuthNavigation" component={AuthNavigation} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="HomeStack" component={HomeStack} />
                <Stack.Screen
                    options={{ 
                        headerShown: false,
                     }}
                    name="ChatRoomScreen" component={ChatRoomScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;