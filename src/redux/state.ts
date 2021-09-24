type postObjectDataType = {
    id: number
    name: string
    time: string
    message: string
}
export type postsType = Array<postObjectDataType>;


type DialogsDataObjectType = {
    name: string
    lastMessage: string
    time: string
    id: number
}
export type DialogsTabsDataType = Array<DialogsDataObjectType>;


type MessagesDataObjectType = {
    id: number
    message: string
}
export type MessagesDataType = Array<MessagesDataObjectType>;


type profileType = {
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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
        if (action.type === ADD_POST) {
            const newPost: postObjectDataType = {
                id: 5,
                message: this._state.profile.newPostText,
                name: "Danik",
                time: new Date().getTime().toString()
            }
            this._state.profile.posts = [newPost, ...this._state.profile.posts];
            this._state.profile.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.value;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogs.newMessageText = action.value;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            const newMessage: MessagesDataObjectType = {
                id: 3,
                message: this._state.dialogs.newMessageText
            }
            this._state.dialogs.messagesData.push(newMessage);
            this._state.dialogs.newMessageText = '';
            this._callSubscriber();
        }
    }
}

export const newPostElementActionCreator: (value: string) => ActionsTypes = (value: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    value: value
})

export const addPostActionCreator: () => ActionsTypes = () => ({
    type: ADD_POST,
})

export const updateNewMessageTextCreator: (value: string) => ActionsTypes = (value: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    value: value
})

export const sendMessage: () => ActionsTypes = () => ({
    type: SEND_MESSAGE
})


export default store