import {ADD_POST, profileReducer, UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import {dialogsReducer, SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./dialogs-reducer";

export type postObjectDataType = {
    id: number
    name: string
    time: string
    message: string
}
export type postsType = Array<postObjectDataType>;


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


export type profileType = {
    posts: postsType
    newPostText: string
}
export type dialogsType = {
    dialogsData: DialogsTabsDataType
    messagesData: MessagesDataType
    newMessageText: string
}
export type stateType = {
    profile: profileType
    dialogs: dialogsType
}


export type StoreType = {
    _state: stateType
    getState: () => stateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: typeof ADD_POST
}
type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    value: string
}
type SendMessageActionType = {
    type: typeof SEND_MESSAGE
}
type UpdateNewMessageTextType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    value: string
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageTextType



const store: StoreType = {
    _state: {
        profile: {
            posts: [
                {
                    id: 1,
                    name: "Danik",
                    time: "3 minutes",
                    message: "frejnfjf fkjnaejirbf kfjrfb",
                },
                {
                    id: 2,
                    name: "Danik",
                    time: "3 hours",
                    message: "lorem ajfenr arejnjfnea kfjrfb",
                },
            ],
            newPostText: '',
        },
        dialogs: {
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
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);

        this._callSubscriber();
    }
}

export default store