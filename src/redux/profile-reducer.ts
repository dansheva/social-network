import {postObjectDataType, profileType} from "./store";

type profileReducerType = (state: profileType, action: tsarType) => profileType

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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

export const profileReducer: profileReducerType = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postObjectDataType = {
                id: 5,
                message: state.newPostText,
                name: "Danik",
                time: new Date().getTime().toString()
            }
            state.posts = [newPost, ...state.posts];
            state.newPostText = '';
            return state
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.value;
            return state
        default:
            return state
    }
}

type tsarType = newPostElementActionType | addPostActionType

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