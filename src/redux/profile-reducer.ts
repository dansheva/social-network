export type postObjectDataType = {
    id: number
    name: string
    time: string
    message: string
}
export type postsType = Array<postObjectDataType>;
export type profileType = {
    posts: postsType
    newPostText: string
}

const initialState: profileType = {
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
}

export const profileReducer = (state = initialState, action: tsarType): profileType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postObjectDataType = {
                id: 5,
                message: state.newPostText,
                name: "Danik",
                time: new Date().getTime().toString()
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case  UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.value}
        default:
            return state
    }
}

type tsarType = newPostElementActionType | addPostActionType

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
type newPostElementActionType = ReturnType<typeof newPostElementActionCreator>
export const newPostElementActionCreator = (value: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        value: value
    } as const
)

type addPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => ({
        type: ADD_POST,
    } as const
)