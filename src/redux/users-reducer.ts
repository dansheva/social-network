import {Dispatch} from "redux";
import {UsersApi} from "../api/api";

export type UserType = {
    name: string
    id: number
    uniqueUrlName?: string
    photos: {
        small?: string
        large?: string
    }
    status?: string
    followed: boolean
}
export type UsersStateType = {
    users: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetchingUsers: boolean
    isFetchingButtons: string[]
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const SET_IS_FETCHING_BUTTON = 'SET-IS-FETCHING-BUTTON'

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    isFetchingUsers: false,
    isFetchingButtons: [],
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : {...u})}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : {...u})}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, usersCount: action.usersCount}
        case SET_IS_FETCHING:
            return {...state, isFetchingUsers: action.isFetching}
        case SET_IS_FETCHING_BUTTON:
            return action.isFetching
                ? {...state, isFetchingButtons: [...state.isFetchingButtons, action.userId]}
                : {...state, isFetchingButtons: state.isFetchingButtons.filter(id => id !== action.userId)}
        default:
            return {...state}
    }
}

export type ActionsTypes =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | setIsFetchingUsersActionType
    | setIsFetchingButtonActionType

type FollowActionType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

type UnFollowActionType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

type SetUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        usersCount
    } as const
}

type setIsFetchingUsersActionType = ReturnType<typeof setIsFetchingUsersAC>
export const setIsFetchingUsersAC = (isFetching: boolean) => {
    return {
        type: SET_IS_FETCHING,
        isFetching
    } as const
}

type setIsFetchingButtonActionType = ReturnType<typeof setIsFetchingButtonAC>
export const setIsFetchingButtonAC = (isFetching: boolean, userId: string) => ({
        type: SET_IS_FETCHING_BUTTON,
        isFetching,
        userId
    } as const
)


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setIsFetchingUsersAC(true))

        UsersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetchingUsersAC(false))
                dispatch(setCurrentPageAC(currentPage))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
    }
}

