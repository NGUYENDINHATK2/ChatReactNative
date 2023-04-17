import { ImageSourcePropType } from 'react-native';


export interface ChatProps {
    id: string;
    avatar: any;
    name: string;
    last_message: string;
    time: string;
    operating_status: boolean;
    who_send: boolean;
    unread_messages: number;
}
export interface ListChatSectionProps {
    data: Array<ChatProps>;
}