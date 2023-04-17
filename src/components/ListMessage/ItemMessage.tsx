import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?components
const ItemMessageContainer = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;

`;

//?types
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import { ItemMessageProps } from './types';

const ItemMessage: FunctionComponent<ItemMessageProps> = (props) => {
    return (
        <ItemMessageContainer>
            {props.isMe ? <MessageRight {...props} /> : <MessageLeft {...props} />}
        </ItemMessageContainer>
    );
}

export default ItemMessage;