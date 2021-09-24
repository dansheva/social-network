import {ActionsTypes, dialogsType, MessagesDataObjectType} from "./state";

type dialogsReducerType = (state: dialogsType, action: ActionsTypes) => dialogsType

export const SEND_MESSAGE = 'SEND-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const dialogsReducer: dialogsReducerType = (state, action) => {
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
export const updateNewMessageTextCreator: (value: string) => ActionsTypes = (value: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    value: value
})
export const sendMessage: () => ActionsTypes = () => ({
    type: SEND_MESSAGE
})