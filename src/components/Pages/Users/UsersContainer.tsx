import React from "react";
import {connect} from "react-redux";
import UsersC from "./UsersС";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../../redux/users-reducer";

type mapToStatePropsType = {
    userData: UserType[]
    pageSize: number
    usersCount: number
}

const mapToPropsState = (state: AppStateType): mapToStatePropsType => {
    return {
        userData: state.users.users,
        pageSize: state.users.pageSize,
        usersCount: state.users.usersCount
    }
}

type mapToDispatchPropsType = {
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapToPropsDispatch = (dispatch: Dispatch): mapToDispatchPropsType => {
    return {
        followCallback: userId => {
            dispatch(followAC(userId))
        },
        unFollowCallback: userId => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export type UsersPropsType = mapToStatePropsType & mapToDispatchPropsType

export const UsersContainer = connect(mapToPropsState, mapToPropsDispatch)(UsersC)