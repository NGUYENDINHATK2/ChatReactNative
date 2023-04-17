import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SafeViewAndroid from '../components/SafeViewAndroid ';
import { useNavigation, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './../navigation/RootStack';
import { AuthStackParamList } from './../navigation/Auth';

//?components
import HeaderChatSection from '../components/HeaderChat/HeaderChatSection';
import SearchBarSection from '../components/SearchBar/SearchBarSection';
import StatusChatSection from '../components/StatusChat/StatusChatSection';
import ListChatSection from '../components/ListChat/ListChatSection';


const ChatScreenContainer = styled.View`
    flex: 1;
    background-color: white;
    padding-horizontal: 10px;
`;

//?type
import { WelcomeNavigationProps } from './WelcomeScreen';
interface Props { }

export type ChatScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<RootStackParamList, 'HomeStack'>,
    NativeStackNavigationProp<AuthStackParamList, 'LoginScreen'>
>;

const ChatScreen: FunctionComponent<Props> = ({ }) => {
    const navigation = useNavigation<ChatScreenNavigationProps>();
    const listChat = [
        {
            id: "1",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "Xin chào",
            time: "10:00",
            operating_status: true,
            who_send: false,
            unread_messages: 1
        },
        {
            id: "2",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "You : May ơ dau",
            time: "10:00",
            operating_status: true,
            who_send: true,
            unread_messages: 0
        },
        {
            id: "3",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "You : May ơ dau",
            time: "10:00",
            operating_status: true,
            who_send: true,
            unread_messages: 0
        },
        {
            id: "4",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "You : May ơ dau",
            time: "10:00",
            operating_status: false,
            who_send: true,
            unread_messages: 0
        },
        {
            id: "5",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "You : May ơ dau",
            time: "10:00",
            operating_status: true,
            who_send: true,
            unread_messages: 0
        },
        {
            id: "6",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "You : May ơ dau",
            time: "10:00",
            operating_status: true,
            who_send: true,
            unread_messages: 0
        },
        {
            id: "7",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "You : May ơ dau",
            time: "10:00",
            operating_status: true,
            who_send: true,
            unread_messages: 0
        },
        {
            id: "8",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            last_message: "You : May ơ dau",
            time: "10:00",
            operating_status: true,
            who_send: true,
            unread_messages: 0
        },
    ]
    return (
        <ChatScreenContainer>
            <StatusBar style="auto" />
            <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
                <HeaderChatSection />
                <SearchBarSection />
                <StatusChatSection />
                <ListChatSection data={listChat}  />
            </SafeAreaView>
        </ChatScreenContainer>
    );
}

export default ChatScreen;