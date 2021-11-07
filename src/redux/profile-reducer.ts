export type postObjectDataType = {
    id: number
    name: string
    time: string
    message: string
}
export type postsType = Array<postObjectDataType>;

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type PhotosType = {
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
    newPostText: string
    profile: ProfileDataType | null
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
    profile: null,
}

export const profileReducer = (state = initialState, action: ActionTypes): profileType => {
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profileData}
        default:
            return state
    }
}

type ActionTypes = newPostElementActionType | addPostActionType | setUserProfileActionType

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

type newPostElementActionType = ReturnType<typeof newPostElementActionCreator>
export const newPostElementActionCreator = (value: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        value: value,
    } as const
)

type addPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => ({
        type: ADD_POST,
    } as const
)

type setUserProfileActionType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profileData: ProfileDataType) => ({
        type: SET_USER_PROFILE,
        profileData,
    } as const
)