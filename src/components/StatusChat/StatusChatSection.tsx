import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//?components

const StatusChatSectionContainer = styled.View``;
const ButtonCreateStatus = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;
const ButtonUserOnLineContainer = styled.View`
    border-radius: 60px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;

`;
const ButtonUserOnLineItem = styled.Image`
    width:60px;
    height: 60px;
    border-radius: 60px;
    overflow: hidden;
`;
const NameUserOnLine = styled.Text`
    font-size: 13px;
    margin-top: 5px;
    color: #000;
    font-weight: bold;
`;
const ButtonStatusUser = styled.View`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    background-color: #00ff00;
    border-width: 2px;
`;
//?types
import { UserOnLineProps } from './types'
interface Props { }

const StatusChatSection: FunctionComponent<Props> = ({ }) => {

    const listUserOnLine: UserOnLineProps[] = [
        {
            id: "1",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            operating_status: true
        },
        {
            id: "2",
            avatar: 'https://game8.vn/media/202111/images/huong-dan-build-xiao%20(7).jpg',
            name: "Xiao",
            operating_status: false,
        },
    ];

    return (
        <StatusChatSectionContainer>
            <ScrollView
                horizontal
            >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5
                }}>
                    <ButtonCreateStatus>
                        <MaterialIcons name="insert-emoticon" size={25} color="black" />

                    </ButtonCreateStatus>
                    <NameUserOnLine>
                        Set Status
                    </NameUserOnLine>
                </View>
                {
                    listUserOnLine?.map((item, index) => {
                        return (
                            <View key={index} style={{
                                width: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 5
                            }}>
                                <ButtonUserOnLineContainer >
                                    <ButtonUserOnLineItem source={{ uri: item.avatar }} />
                                    {
                                        item.operating_status && (
                                            <ButtonStatusUser />
                                        )
                                    }
                                </ButtonUserOnLineContainer>
                                <NameUserOnLine
                                    numberOfLines={1}
                                >
                                    {item.name}
                                </NameUserOnLine>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </StatusChatSectionContainer>
    );
}

export default StatusChatSection;