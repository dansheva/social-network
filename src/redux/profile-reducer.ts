import {ActionsTypes, postObjectDataType, profileType} from "./state";

type profileReducerType = (state: profileType, action: ActionsTypes) => profileType

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer: profileReducerType = (state, action) => {
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

export const newPostElementActionCreator: (value: string) => ActionsTypes = (value: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    value: value
})
export const addPostActionCreator: () => ActionsTypes = () => ({
    type: ADD_POST,
})