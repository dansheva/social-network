import {Dispatch} from "redux";
import {ProfileApi} from "../api/api";

export type postObjectDataType = {
    id: number
    name: string
    time: string
    message: string
}
export type postsType = Array<postObjectDataType>;

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileDataType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: PhotosType
}
export type profileType = {
    posts: postsType
    profile: ProfileDataType | null
    status: string | null
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
    profile: null,
    status: null
}

export const profileReducer = (state = initialState, action: ActionTypes): profileType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postObjectDataType = {
                id: 5,
                message: action.newPostText,
                name: "Danik",
                time: new Date().getTime().toString()
            }
            return {...state, posts: [newPost, ...state.posts]}

        case SET_USER_PROFILE:
            return {...state, profile: action.profileData}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case UPDATE_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export type ActionTypes = addPostActionType
    | setUserProfileActionType
    | setUserStatusActionType
    | UpdateUserStatusActionType

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS'


type addPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => ({
        type: ADD_POST,
        newPostText
    } as const
)

type setUserProfileActionType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profileData: ProfileDataType) => ({
        type: SET_USER_PROFILE,
        profileData,
    } as const
)

type setUserStatusActionType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => ({
        type: SET_USER_STATUS,
        status,
    } as const
)

type UpdateUserStatusActionType = ReturnType<typeof updateUserStatusAC>
export const updateUserStatusAC = (status: string) => ({
        type: UPDATE_USER_STATUS,
        status,
    } as const
)


export const setUserProfileThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    ProfileApi.getProfileData(userId)
        .then(data => {
            dispatch(setUserProfileAC(data))
        })
}

export const setUserStatusThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    ProfileApi.getProfileStatus(userId)
        .then(data => {
            data && dispatch(setUserStatusAC(data));
        })
}

export const updateUserStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {
    ProfileApi.updateUserStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(updateUserStatusAC(status))
            }
        })
}