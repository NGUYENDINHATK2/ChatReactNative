import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import * as ImagePicker from 'expo-image-picker';
//?components
const InputMessageSectionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-top-width: 0.5px;
    border-top-color: #f2f2f2;
`;
const BtnmenuContainer = styled.View`
    flex-direction: row;
`
const Btnmenu = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;
const InputMessageContainer = styled.View`
    flex: 1;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 10px;
`;
const InputMessage = styled.TextInput`
    flex: 1;
    font-size: 16px;
    align-items: center;
    color: #000;
    margin-left: 10px;
`;
const BtnSendContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;


//?types
interface Props { }
interface IconProps {
    id: number;
    name: any;
    size: number;
    color: string;
}
const menuIcon: IconProps[] = [
    {
        id: 1,
        name: 'camera',
        color: '#000',
        size: 24
    },
    {
        id: 2,
        name: 'image',
        color: '#000',
        size: 24
    },
    {
        id: 3,
        name: 'mic',
        color: '#000',
        size: 24
    },
]
interface ImageInfoProps {
    uri: string;
    width: number;
    height: number;
    type?: 'image' | 'video';
    exif?: {
        [key: string]: any;
    };
    base64?: string;
}

const InputMessageSection: FunctionComponent<Props> = ({ }) => {
    const [isChange, setIsChange] = React.useState(false);
    const [textMessage, setTextMessage] = React.useState('');
    const [image, setImage] = React.useState<ImageInfoProps>();
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                setImage({
                    uri: result.assets[0].uri,
                    width: result.assets[0].width,
                    height: result.assets[0].height,
                    type: result.assets[0].type,
                });
            }
            else {
                console.log("cancel");
            }
        } catch (E) {
            console.log(E);
        }
    };
    return (
        <InputMessageSectionContainer>
            {
                !isChange ? (<BtnmenuContainer>
                    {
                        menuIcon.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Btnmenu
                                        onPress={() => {
                                            item.id === 2 ? pickImage() : Speech.speak(textMessage);
                                        }}
                                    >
                                        <Entypo name={item.name} size={item.size} color={item.color} />
                                    </Btnmenu>
                                </View>
                            )
                        })

                    }
                </BtnmenuContainer>) : null
            }
            {
                isChange ? (
                    <Btnmenu onPress={() => setIsChange(!isChange)}>
                        <Entypo name="chevron-left" size={24} color="black" />
                    </Btnmenu>) : null
            }
            <InputMessageContainer>
                {/* btn back */}
                <InputMessage
                    placeholder="Type a message"
                    onFocus={() => setIsChange(true)}
                    onBlur={() => setIsChange(false)}
                    onChangeText={(text) => setTextMessage(text)}
                  
                />
            </InputMessageContainer>
            <BtnSendContainer>
                <Entypo name="paper-plane" size={24} color={
                    textMessage.length > 0 ? "blue" : "#000"
                } />
            </BtnSendContainer>
        </InputMessageSectionContainer>
    );
}

export default InputMessageSection;