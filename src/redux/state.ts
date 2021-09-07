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
}
type dialogsType = {
    dialogsData: DialogsTabsDataType
    messagesData: MessagesDataType
}
export type stateType = {
    profile: profileType
    dialogs: dialogsType
}
let state: stateType = {
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
        ]
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
}

export default state