import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?components
const ListMessageSectionContainer = styled.View`
    flex: 1;
`;
const ListMessageContainer = styled.View`
    flex: 1;
    background-color: white;
    padding-horizontal: 10px;

`;
const FlatListMessage = styled.FlatList`
    background-color: white;
`;


//?types
import ItemMessage from './ItemMessage';
interface Props { }

const ListMessageSection: FunctionComponent<Props> = ({ }) => {
    const flatListRef = React.useRef(null);
    const dataChat = [
        {
            id: 1,
            message: 'Hellodshsdkjhsdksdhjsdhkgsdhjkgsdyjdgsjhsdgyj',
            isMe: true,
            time: '12:00',
        },
        {
            id: 2,
            message: 'Hellosssssssssssssssssssssssssssssssss',
            isMe: false,
            time: '12:00',
        },
        {
            id: 3,
            message: 'Hellssssssssssssssssssssssssssssssssssso',
            isMe: true,
            time: '12:00',
        },
        {
            id: 4,
            message: 'Hellossssssssssssssssssssssssssssssssssssssssssssss',
            isMe: false,
            time: '12:00',
        },
        {
            id: 5,
            message: 'Hessssssssssssssssssssssssssssssssssssssssssssssssssllo',
            isMe: true,
            time: '12:00',
        },
        {
            id: 6,
            message: 'Helssssssssssssssssssssssssssssssssssssssssssssssssslo',
            isMe: false,
            time: '12:00',
        },
        {
            id: 7,
            message: 'Helssssssssssssssssssssssssssssssssssssssssssssssssslo',
            isMe: false,
            time: '12:00',
        },
        {
            id: 8,
            message: 'Helssssssssssssssssssssssssssssssssssssssssssssssssslo',
            isMe: true,
            time: '12:00',
        },

    ]
    

    return (
        <ListMessageSectionContainer>
            <ListMessageContainer>
                <FlatListMessage
                    data={dataChat}
                    ref={flatListRef}
                    renderItem={({ item }: any) => <ItemMessage {...item} />}
                    keyExtractor={({ id }: any) => id.toString()}
                    inverted
                    contentContainerStyle={{
                        flexDirection: 'column-reverse',
                        paddingVertical: 10
                    }}
                />
            </ListMessageContainer>
        </ListMessageSectionContainer>
    );
}

export default ListMessageSection;