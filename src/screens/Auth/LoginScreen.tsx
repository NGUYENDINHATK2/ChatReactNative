import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/Auth';
// components
const LoginScreenContainer = styled.View`
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
const FormLoginContainer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-horizontal: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10%;
`;
const TextLogin = styled.Text`
  font-size: 20px;
  color: ${colors.mainColor};
  font-weight: bold;
`;
const FormLogin = styled.View`
  width: 100%;
`;
const FormLoginInputContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.mainColor};
  flex-direction: row;
  align-items: center;

`;
const FormLoginInput = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 16px;
  padding-horizontal: 10px;
  color: ${colors.mainColor};
`;
const FormLoginButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${colors.mainColor};
  margin-top: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const FormLoginButtonText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

interface Props { }
import { WelcomeNavigationProps } from '../WelcomeScreen';
export type LoginScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, "LoginScreen">,
  WelcomeNavigationProps['navigation']
>;

const LoginScreen: FunctionComponent<Props> = ({ }) => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const [isChangeEmail, setIsChangeEmail] = React.useState(false);
  const [isChangePassword, setIsChangePassword] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <LoginScreenContainer>
          {!isChangeEmail && !isChangePassword ? <TextTitle>MyChat</TextTitle> : null}
          <FormLoginContainer>
            <TextLogin
              style={
                isChangeEmail || isChangePassword ? {
                  fontSize: 50,
                } : { opacity: 1 }
              }
            >
              Login {isChangeEmail || isChangePassword ? "💖" : null}
            </TextLogin>
            <FormLogin>
              <FormLoginInputContainer>
                <FormLoginInput
                  // when open keyboard
                  onFocus={() =>
                    setIsChangeEmail(true)
                  }
                  // when close keyboard
                  onBlur={() =>
                    setIsChangeEmail(false)
                  }
                  placeholder="Email" />
              </FormLoginInputContainer>
              <FormLoginInputContainer>
                <FormLoginInput
                  // when open keyboard
                  onFocus={() =>
                    setIsChangePassword(true)
                  }
                  onBlur={() =>
                    setIsChangePassword(false)
                  }
                  placeholder="Password" />
                <TouchableOpacity onPress={() => { }}>
                  <AntDesign name="eye" size={24} color={colors.mainColor} />
                </TouchableOpacity>
              </FormLoginInputContainer>
              <FormLoginButtonContainer onPress={() => {
                navigation.navigate('HomeStack');
              }}>
                <FormLoginButtonText>Login</FormLoginButtonText>
              </FormLoginButtonContainer>
            </FormLogin>
          </FormLoginContainer>
        </LoginScreenContainer>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;