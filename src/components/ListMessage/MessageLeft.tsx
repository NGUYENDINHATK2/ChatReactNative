import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?components
const MessageLeftContainer = styled.View`
    flex: 1;
    align-items: flex-start;
    margin-top: 10px;
    flex-direction: row;
`;
const AvatarContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #f2f2f2;
`;
const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
`;
const Name = styled.Text`
    font-size: 14px;
    color: #000;
    font-weight: bold;
`;
const MessageLeftContent = styled.View`
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    max-width: 90%;
    background-color: #f2f2f2;
    margin-left: 10px;
`;
const MessageLeftText = styled.Text`
    font-size: 16px;
    color: #000;
`;
const MessageLeftTime = styled.Text`
    font-size: 12px;
    color: #000;
    margin-top: 5px;
`;

//?types
import  { ItemMessageProps } from './types';

const MessageLeft: FunctionComponent<ItemMessageProps> = (props) => {
    return (
        <MessageLeftContainer>
            <AvatarContainer>
                <Avatar source={{
                    uri: 'https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
                }}
                />
            </AvatarContainer>
            <MessageLeftContent>
                <Name>Nguyễn Văn A</Name>
                <MessageLeftText>
                    {props.message}
                </MessageLeftText>
                <MessageLeftTime>
                    {props.time}
                </MessageLeftTime>
            </MessageLeftContent>
        </MessageLeftContainer>
    );
}

export default MessageLeft;