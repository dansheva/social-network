export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

type StateType = {
    data: UserDataType
    isAuth: boolean
    userAvatar: string | null
}

const initialState: StateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    userAvatar: null
}


export const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, isAuth: true, data: {...state.data, ...action.userData}}
        case SET_USER_AVATAR:
            return {...state, userAvatar: action.userAvatar}
        default:
            return {...state}
    }
}

const SET_USER_DATA = 'SET-USER-DATA'
const SET_USER_AVATAR = 'SET-USER-AVATAR'

type ActionTypes = setUserDataActionType | setUserAvatarActionType

type setUserDataActionType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userData: UserDataType) => ({
        type: SET_USER_DATA,
        userData
    } as const
)

type setUserAvatarActionType = ReturnType<typeof setUserAvatarAC>
export const setUserAvatarAC = (userAvatar: string) => ({
        type: SET_USER_AVATAR,
        userAvatar
    } as const
)

