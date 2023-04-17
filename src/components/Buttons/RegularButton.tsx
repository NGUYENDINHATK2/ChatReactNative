import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native'

import { colors } from '../colors';
import RegularText from '../Texts/RegularText';

const ButtonView = styled.TouchableOpacity`
    background-color: ${colors.primary};
    align-items: center;
    width: 100%;
    padding: 15px;
    border-radius: 10px;
`;
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    )
}
export default RegularButton;
