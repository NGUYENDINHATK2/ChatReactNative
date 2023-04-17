import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import ChatItem from './ChatItem';
import { useNavigation, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
//?components
const ListChatSectionContainer = styled.View`
    flex: 1;
    margin-top: 10px;
`;

const ChatList = styled.FlatList``;
//?types
import { ListChatSectionProps } from './types'
import { ChatScreenNavigationProps as ListChatSectionNavigationProps } from '../../screens/ChatScreen';

const ListChatSection: FunctionComponent<ListChatSectionProps> = (props) => {
  const navigation = useNavigation<ListChatSectionNavigationProps>();
  return (
    <ListChatSectionContainer>
      <ChatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => <ChatItem {...item} navigation={navigation} />}
        keyExtractor={({ id }: any) => id.toString()}
      />
    </ListChatSectionContainer>
  );
}

export default ListChatSection;