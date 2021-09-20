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
type dialogsType = {
    dialogsData: DialogsTabsDataType
    messagesData: MessagesDataType
}
export type stateType = {
    profile: profileType
    dialogs: dialogsType
}


type AddPostActionType = {
    type: 'ADD-POST'
    value: string
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    value: string
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export type StoreType = {
    _state: stateType
    getState: () => stateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
}

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
                    name: "Valera",
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
        if (action.type === 'ADD-POST') {
            const newPost: postObjectDataType = {
                id: 5,
                message: this._state.profile.newPostText,
                name: "Danik",
                time: new Date().getTime().toString()
            }
            this._state.profile.posts = [newPost, ...this._state.profile.posts];
            this._state.profile.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profile.newPostText = action.value;
            this._callSubscriber();
        }
    }
}

export default store