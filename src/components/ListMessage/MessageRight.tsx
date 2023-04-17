import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?components
const MessageRightContainer = styled.View`
    flex: 1;
    align-items: flex-end;
    margin-top: 10px;
`;
const MessageRightContent = styled.View`
    background-color: #DCF8C6;
    padding: 10px;
    border-radius: 10px;
    max-width: 90%;
`;
const MessageRightText = styled.Text`
    font-size: 16px;
    color: #000;
`;
const MessageRightTime = styled.Text`
    font-size: 12px;
    color: #000;
    margin-top: 5px;
`;

//?types
import  { ItemMessageProps } from './types';

const MessageRight: FunctionComponent<ItemMessageProps> = (props) => {
    return (
        <MessageRightContainer>
            <MessageRightContent>
                <MessageRightText>
                    {
                        props.message
                    }
                </MessageRightText>
                <MessageRightTime>
                    {props.time}
                </MessageRightTime>
            </MessageRightContent>
        </MessageRightContainer>

    );
}

export default MessageRight;