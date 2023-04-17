import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { useNavigation, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
//?components
const ChatItemContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #f2f2f2;
`;
const AvatarContainer = styled.TouchableOpacity`
    border-radius: 60px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
`;
const Avatar = styled.Image`
    width:60px;
    height: 60px;
    border-radius: 60px;
    overflow: hidden;
`;
const InfoContainer = styled.TouchableOpacity`
    flex: 1;
    margin-left: 10px;
`;
const Name = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: bold;
    margin-bottom: 5px;
`;
const LastMessage = styled.Text`
    font-size: 14px;
    color: #000;
`;
const Time = styled.Text`
    font-size: 14px;
    color: #000;
`;
const OperatingStatus = styled.View`
    position: absolute;
    right: 0;  
    bottom: 0;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    background-color: #00ff00;
    border-width: 2px;
    border-color: #fff;
`;


//?types
import { ChatProps } from './types'
import { ChatScreenNavigationProps as ChatItemNavigationProps } from '../../screens/ChatScreen';
const ChatItem: FunctionComponent<ChatProps> = (props) => {
    const navigation = useNavigation<ChatItemNavigationProps>();
    return (
        <ChatItemContainer>
            <AvatarContainer>
                <Avatar source={{ uri: props.avatar }} />
                {props.operating_status && <OperatingStatus />}
            </AvatarContainer>
            <InfoContainer
                onPress={() => {
                    navigation.navigate('ChatRoomScreen',{
                        id: props.id,
                    })
                }}
            >
                <Name>{props.name}</Name>
                <LastMessage
                    style={
                        [
                            props.unread_messages > 0 ? { fontWeight: "bold" } : { fontWeight: "normal" },
                        ]
                    }
                    numberOfLines={1}>
                    {props.last_message}
                </LastMessage>
            </InfoContainer>
            <Time>{props.time}</Time>
        </ChatItemContainer>


    );
}

export default ChatItem;