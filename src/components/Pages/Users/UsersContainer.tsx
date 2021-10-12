import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, unFollowAC, UserType} from "../../../redux/users-reducer";

type mapToStatePropsType = {
    userData: UserType[]
}

const mapToPropsState = (state: AppStateType): mapToStatePropsType => {
    return {
        userData: state.users.users
    }
}

type mapToDispatchPropsType = {
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
}

const mapToPropsDispatch = (dispatch: Dispatch): mapToDispatchPropsType => {
    return {
        followCallback: userId => {
            dispatch(followAC(userId))
        },
        unFollowCallback: userId => {
            dispatch(unFollowAC(userId))
        }
    }
}

export type UsersPropsType = mapToStatePropsType & mapToDispatchPropsType

export const UsersContainer = connect(mapToPropsState, mapToPropsDispatch)(Users)