type LocationType = {
    city: string
    country: string
}
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
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    usersCount: 0
}

export const usersReducer = (state = initialState, action: TsarType): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId? {...u, followed: true}: {...u})}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId? {...u, followed: false}: {...u})}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return {...state}
    }
}

type TsarType = FollowAction | UnFollowAction | setUsersAction

type FollowAction = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return{
        type: FOLLOW,
        userId
    } as const
}



type UnFollowAction = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return{
        type: UNFOLLOW,
        userId
    } as const
}

type setUsersAction = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return{
        type: SET_USERS,
        users
    } as const
}

