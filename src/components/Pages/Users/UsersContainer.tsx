import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { ThunkDispatch } from 'redux-thunk';
import {
    ActionsTypes,
    followAC, getUsersThunkCreator,
    setIsFetchingButtonAC, setIsFetchingUsersAC,
    unFollowAC,
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
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
    setIsFetchingUsers: (isFetching: boolean) => void
    setIsFetchingButtons: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapToPropsDispatch = (dispatch: ThunkDispatch<AppStateType, void, ActionsTypes>): mapToDispatchPropsType => {
    return {
        followCallback: userId => dispatch(followAC(userId)),
        unFollowCallback: userId => dispatch(unFollowAC(userId)),
        setIsFetchingUsers: isFetching => dispatch(setIsFetchingUsersAC(isFetching)),
        setIsFetchingButtons: (isFetching, userId) => dispatch(setIsFetchingButtonAC(isFetching, userId)),
        getUsers: (currentPage: number, pageSize: number) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
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
                   followCallback={this.props.followCallback}
                   unFollowCallback={this.props.unFollowCallback}
                   isFetching={this.props.isFetching}
                   isFetchingButtons={this.props.IsFetchingButtons}
                   setIsFetchingButtons={this.props.setIsFetchingButtons}/>
        );
    }
}

export const UsersContainer = connect(mapToPropsState, mapToPropsDispatch)(UsersAPIComponent)