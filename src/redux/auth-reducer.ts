import {HeaderApi, ProfileApi} from "../api/api";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

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


export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, isAuth: true, data: {...state.data, ...action.userData}}
        case 'SET-USER-AVATAR':
            return {...state, userAvatar: action.userAvatar}
        case 'LOG_OUT':
            return {...state, isAuth: false, data: {...state.data, id: null, email: null, login: null}}
        default:
            return {...state}
    }
}

export type ActionsTypes = setUserDataActionType | setUserAvatarActionType | LogOutActionType

type setUserDataActionType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userData: UserDataType) => ({
        type: 'SET-USER-DATA',
        userData
    } as const
)

type setUserAvatarActionType = ReturnType<typeof setUserAvatarAC>
export const setUserAvatarAC = (userAvatar: string) => ({
        type: 'SET-USER-AVATAR',
        userAvatar
    } as const
)

type LogOutActionType = ReturnType<typeof logOutAC>
export const logOutAC = () => ({
        type: 'LOG_OUT',
    } as const
)


export const setAuthUserAndAvatarThunkCreator = () => (dispatch: Dispatch) => {
    HeaderApi.isUserAuth()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataAC(data.data))
                if (data.data.id) {
                    ProfileApi.getProfileData(data.data.id.toString())
                        .then(data => {
                            if (data.photos.small) {
                                dispatch(setUserAvatarAC(data.photos.small))
                            }
                        })
                }
            }
        })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, void, ActionsTypes>) => {
    HeaderApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserAndAvatarThunkCreator())
            } else {
                const err = res.data.messages.length > 0? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', { _error: err}))
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export const logoutThunkCreator = () => (dispatch: Dispatch) => {
    HeaderApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(logOutAC())
            }
        })
        .catch(err => {
            console.log(err)
        })
}

