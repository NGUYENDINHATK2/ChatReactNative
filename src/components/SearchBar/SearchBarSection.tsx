import React, { FunctionComponent } from 'react'
import {View,Text } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons';

//? components
const SearchBarSectionContainer = styled.TouchableOpacity`
    background-color: #f2f2f2;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 10px;
    height: 40px;
    border-radius: 40px;
    border-width: 0.5px;
    border-color: #000;
    margin-vertical: 10px;
`;
const TextSearchBar = styled.Text`
    color: #858585;
    padding-left: 10px;
    font-size: 16px;
`

//?type


const SearchBarSection: FunctionComponent = () => {
    return (
        <SearchBarSectionContainer>
            <AntDesign name="search1" size={20} color="#858585" />
            <TextSearchBar>Search ...</TextSearchBar>
        </SearchBarSectionContainer>
    )
}

export default SearchBarSection