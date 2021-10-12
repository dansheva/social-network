export type DialogsDataObjectType = {
    name: string
    lastMessage: string
    time: string
    id: number
}
export type DialogsTabsDataType = Array<DialogsDataObjectType>;
export type MessagesDataObjectType = {
    id: number
    message: string
}
export type MessagesDataType = Array<MessagesDataObjectType>;
export type dialogsType = {
    dialogsData: DialogsTabsDataType
    messagesData: MessagesDataType
    newMessageText: string
}

const initialState: dialogsType = {
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

export const dialogsReducer = (state = initialState, action: tsarType): dialogsType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.value}
        case SEND_MESSAGE:
            const newMessage: MessagesDataObjectType = {
                id: 3,
                message: state.newMessageText
            }
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ''}
        default:
            return state
    }
}

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

type tsarType = updateNewMessageTextActionType | sendMessageActionCreatorType

type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>
export const updateNewMessageTextActionCreator = (value: string) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        value: value
    } as const
)

type sendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
export const sendMessageActionCreator = () => ({
        type: SEND_MESSAGE
    } as const
)