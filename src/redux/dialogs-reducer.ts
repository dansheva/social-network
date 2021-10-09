import {ActionsTypes, dialogsType, MessagesDataObjectType} from "./store";

type dialogsReducerType = (state: dialogsType, action: tsarType) => dialogsType

const initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Val",
            time: "20:22",
            lastMessage: "Last message",
        },
        {
            id: 2,
            name: "Danik",
            time: "19:40",
            lastMessage: "Last message",
        },
        {
            id: 3,
            name: "Sasha",
            time: "8:04",
            lastMessage: "Last message",
        },
    ],
    messagesData: [
        {
            id: 1,
            message: "Hi",
        },
        {
            id: 2,
            message: "My",
        },
        {
            id: 3,
            message: "Hah",
        },
    ],
    newMessageText: '',
}

export const dialogsReducer: dialogsReducerType = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.value;
            return state
        case SEND_MESSAGE:
            const newMessage: MessagesDataObjectType = {
                id: 3,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state
        default:
            return state
    }
}

export const SEND_MESSAGE = 'SEND-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

type tsarType = updateNewMessageTextActionType | sendMessageActionCreatorType

type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>
export const updateNewMessageTextActionCreator: (value: string) => ActionsTypes = (value: string) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        value: value
    } as const
)

type sendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
export const sendMessageActionCreator: () => ActionsTypes = () => ({
        type: SEND_MESSAGE
    } as const
)