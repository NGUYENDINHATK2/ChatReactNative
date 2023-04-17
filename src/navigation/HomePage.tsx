import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// import screens
import ChatScreen from '../screens/ChatScreen';
import CallScreen from '../screens/CallScreen';
import PhonebookScreen from '../screens/PhonebookScreen';

//?type
export type HomeStackParamList = {
    ChatScreen: undefined;
    CallScreen: undefined;
    PhonebookScreen: undefined;
}
const Tab = createBottomTabNavigator<HomeStackParamList>();

const HomeStack: FunctionComponent = () => {
    return (
        <Tab.Navigator
            initialRouteName="ChatScreen"
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble-sharp" size={size} color={color} />
                    ),
                }}
                name="ChatScreen" component={ChatScreen} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Call',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="video-camera" size={24} color={color} />
                    ),
                }}
                name="CallScreen" component={CallScreen} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Phonebook',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book-sharp" size={size} color={color} />
                    ),
                }}
                name="PhonebookScreen" component={PhonebookScreen} />
        </Tab.Navigator>
    );
}

export default HomeStack;