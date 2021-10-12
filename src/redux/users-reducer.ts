type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type UsersStateType = {
    users: UserType[]
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const initialState: UsersStateType = {
    users: [
        {id: 1, followed: true, fullName: 'Danik', status: 'Bla bla bla', location: {city: 'Kosice', country: 'Slovakia'}},
        {id: 2, followed: false, fullName: 'Sasha', status: 'Bla bla bla', location: {city: 'Bratislava', country: 'Slovakia'}},
        {id: 3, followed: true, fullName: 'Sofia', status: 'Bla bla bla', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 4, followed: false, fullName: 'Danik', status: 'Bla bla bla', location: {city: 'Kosice', country: 'Slovakia'}},
        {id: 5, followed: true, fullName: 'Sasha', status: 'Bla bla bla', location: {city: 'Bratislava', country: 'Slovakia'}},
        {id: 6, followed: true, fullName: 'Sofia', status: 'Bla bla bla', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 7, followed: false, fullName: 'Danik', status: 'Bla bla bla', location: {city: 'Kosice', country: 'Slovakia'}},
        {id: 8, followed: true, fullName: 'Sasha', status: 'Bla bla bla', location: {city: 'Bratislava', country: 'Slovakia'}},
        {id: 9, followed: true, fullName: 'Sofia', status: 'Bla bla bla', location: {city: 'Kyiv', country: 'Ukraine'}},
    ]
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
            return state
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

