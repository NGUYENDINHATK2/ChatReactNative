import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
//?components

const HeaderChatSectionContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
`;
const AvatarContainer = styled.TouchableOpacity``;
const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 40px;
`;
const TitleHeaderChat = styled.Text`
    font-size: 25px;
    font-weight: bold;
    flex: 1;
    padding-left: 10px;
`;
const MenuHeaderChatContainer = styled.View`
    flex-direction: row;
`;
const MenuHeaderChatItemContainer = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
    margin-horizontal: 5px;
`;

interface Props {
}
import { ChatScreenNavigationProps as HeaderChatNavigationProps } from '../../screens/ChatScreen';


const HeaderChatSection: FunctionComponent<Props> = (props) => {
    const navigation = useNavigation<HeaderChatNavigationProps>();
    return (
        <HeaderChatSectionContainer>
            <AvatarContainer
                onPress={() => {
                    navigation.navigate('WelcomeScreen')
                }}
            >
                <Avatar source={{
                    uri: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg'
                }} />
            </AvatarContainer>
            <TitleHeaderChat>
                Chat
            </TitleHeaderChat>
            <MenuHeaderChatContainer>
                <MenuHeaderChatItemContainer>
                    <Entypo name="camera" size={24} color="black" />
                </MenuHeaderChatItemContainer>
                <MenuHeaderChatItemContainer>
                    <FontAwesome name="pencil" size={24} color="black" />
                </MenuHeaderChatItemContainer>
            </MenuHeaderChatContainer>
        </HeaderChatSectionContainer>
    );
}

export default HeaderChatSection;