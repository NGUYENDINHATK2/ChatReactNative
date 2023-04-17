import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils/colors'
import { useNavigation, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
//?components
const ChatRoomHeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 0.5px;
    border-bottom-color: #f2f2f2;
    padding-bottom: 10px;
`;
const BtnBack = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
const MessageNotRead = styled.View`
    background-color: #f2f2f2;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;
const InfoContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`;
const AvatarContainer = styled.TouchableOpacity`
    border-radius: 40px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
`;
const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
`;
const Name = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: bold;
    margin-left: 10px;
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
const MenuHeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
const BtnMenu = styled.TouchableOpacity`
    margin-horizontal: 10px;
`;


//?types

interface Props { }
import { ChatScreenNavigationProps as ChatRoomHeaderNavigationProps } from '../../screens/ChatScreen';

const ChatRoomHeader: FunctionComponent<Props> = ({ }) => {
    const navigation = useNavigation<ChatRoomHeaderNavigationProps>();
    return (
        <ChatRoomHeaderContainer>
            <BtnBack
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-chevron-back-sharp" size={30} color="black" />
                <MessageNotRead>
                    <Text style={{ color: colors.mainColor,fontWeight:'bold' }}>33</Text>
                </MessageNotRead>
            </BtnBack>
            <InfoContainer>
                <AvatarContainer>
                    <Avatar
                        source={{
                            uri: 'http://placeimg.com/640/480/any'
                        }}
                    />
                    <OperatingStatus />
                </AvatarContainer>
                <Name>Nguyen Van A</Name>
            </InfoContainer>
            <MenuHeaderContainer>
                <BtnMenu>
                    <Ionicons name="ios-call" size={27} color="black" />
                </BtnMenu>
                <BtnMenu>
                    <Ionicons name="ios-videocam" size={27} color="black" />
                </BtnMenu>
            </MenuHeaderContainer>
        </ChatRoomHeaderContainer>
    );
}

export default ChatRoomHeader;