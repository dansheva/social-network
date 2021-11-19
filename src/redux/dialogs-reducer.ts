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
}

export const dialogsReducer = (state = initialState, action: ActionTypes): dialogsType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessagesDataObjectType = {
                id: 3,
                message: action.newMessage
            }
            return {...state, messagesData: [...state.messagesData, newMessage]}
        default:
            return state
    }
}

const SEND_MESSAGE = 'SEND-MESSAGE';

type ActionTypes = sendMessageActionCreatorType


type sendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
export const sendMessageActionCreator = (newMessage: string) => ({
        type: SEND_MESSAGE,
        newMessage
    } as const
)