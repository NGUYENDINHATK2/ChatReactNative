import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid ';
import { useNavigation, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './../navigation/RootStack';
import { AuthStackParamList } from './../navigation/Auth';
//?components
import ChatRoomHeader from '../components/HeaderChat/ChatRoomHeader';
import ListMessageSection from '../components/ListMessage/ListMessageSection';
import InputMessageSection from '../components/InputMessage/InputMessageSection';

const ChatRoomScreenContainer = styled.View`
    flex: 1;
    background-color: #fff;
`;
const SectionKeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;
//?type



interface Props { }
export type ChatRoomScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'ChatRoomScreen'>

const ChatRoomScreen: FunctionComponent<Props> = ({ }) => {
    return (
        <ChatRoomScreenContainer>
            <SectionKeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
                    <ChatRoomHeader />
                    {/*  ListMessage */}
                    <ListMessageSection />
                    { /*  InputMessage */}
                    <InputMessageSection />
                </SafeAreaView>
            </SectionKeyboardAvoidingView>
        </ChatRoomScreenContainer>
    );
}

export default ChatRoomScreen;