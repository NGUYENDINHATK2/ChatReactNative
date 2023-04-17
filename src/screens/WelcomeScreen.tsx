import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';
import { colors } from './../utils/colors'

export type WelcomeNavigationProps = StackScreenProps<RootStackParamList, "WelcomeScreen">;
//?components
const WelcomeScreenContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const TextTitle = styled.Text`
  font-size: 50px;
  color: ${colors.mainColor};
  font-weight: bold;
`;
//?types

interface Props { }

const WelcomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<WelcomeNavigationProps['navigation']>();
  React.useEffect(() => {
    setTimeout(() => navigation.navigate('AuthNavigation'), 2000);
  }, []);
  return (
    <WelcomeScreenContainer>
      <SafeAreaView>
        <TextTitle>MyChat</TextTitle>
      </SafeAreaView>
    </WelcomeScreenContainer>
  );
}

export default WelcomeScreen;