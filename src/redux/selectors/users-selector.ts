import {AppStateType} from "../redux-store";

export const getUsersData = (state: AppStateType) => {
    return state.users.users
}

export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize
}

export const getUsersCount = (state: AppStateType) => {
    return state.users.usersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.users.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetchingUsers
}

export const getIsFetchingButtons = (state: AppStateType) => {
    return state.users.isFetchingButtons
}