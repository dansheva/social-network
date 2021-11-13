import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { ThunkDispatch } from 'redux-thunk';
import {
    ActionsTypes, followThunkCreator, getUsersThunkCreator,
    unFollowThunkCreator,
    UserType
} from "../../../redux/users-reducer";
import {Users} from "./Users";

type mapToStatePropsType = {
    userData: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    IsFetchingButtons: string[]
}

const mapToPropsState = (state: AppStateType): mapToStatePropsType => {
    return {
        userData: state.users.users,
        pageSize: state.users.pageSize,
        usersCount: state.users.usersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetchingUsers,
        IsFetchingButtons: state.users.isFetchingButtons,
    }
}

type mapToDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}

const mapToPropsDispatch = (dispatch: ThunkDispatch<AppStateType, void, ActionsTypes>): mapToDispatchPropsType => {
    return {
        getUsers: (currentPage, pageSize) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
        followUser: userId => dispatch(followThunkCreator(userId)),
        unFollowUser: userId => dispatch(unFollowThunkCreator(userId)),
    }
}

export type UsersPropsType = mapToStatePropsType & mapToDispatchPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    pageChanging = (selectedPage: number) => {
        this.props.getUsers(selectedPage, this.props.pageSize)
    }

    render() {
        return (
            <Users usersCount={this.props.usersCount}
                   pageChanging={this.pageChanging}
                   currentPage={this.props.currentPage}
                   userData={this.props.userData}
                   pageSize={this.props.pageSize}
                   isFetching={this.props.isFetching}
                   isFetchingButtons={this.props.IsFetchingButtons}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}/>
        );
    }
}

export const UsersContainer = connect(mapToPropsState, mapToPropsDispatch)(UsersAPIComponent)