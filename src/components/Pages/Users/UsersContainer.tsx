import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { ThunkDispatch } from 'redux-thunk';
import {
    ActionsTypes, followThunkCreator, getUsersThunkCreator,
    unFollowThunkCreator,
    UserType
} from "../../../redux/users-reducer";
import {Users} from "./Users";
import {withAuthRedirect} from "../../../withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching, getIsFetchingButtons,
    getPageSize,
    getUsersCount,
    getUsersData
} from "../../../redux/selectors/users-selector";

type mapToStatePropsType = {
    usersData: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    isFetchingButtons: string[]
}

const mapToPropsState = (state: AppStateType): mapToStatePropsType => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFetchingButtons: getIsFetchingButtons(state),
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
                   userData={this.props.usersData}
                   pageSize={this.props.pageSize}
                   isFetching={this.props.isFetching}
                   isFetchingButtons={this.props.isFetchingButtons}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}/>
        );
    }
}

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapToPropsState, mapToPropsDispatch)
)(UsersAPIComponent)

