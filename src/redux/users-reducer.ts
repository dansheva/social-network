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
    isFetching: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_IS_FETCHING = 'SET-IS-FETCHING'

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, isFetching: action.isFetching}
        default:
            return {...state}
    }
}

type ActionsTypes =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | setIsFetchingUsersActionType

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