import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingButtonAC, setIsFetchingUsersAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../../redux/users-reducer";
import {Users} from "./Users";
import {UsersApi} from "../../../api/api";

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
    setUsers: (users: UserType[]) => void
    setPage: (pageNum: number) => void
    setUsersCount: (usersCount: number) => void
    setIsFetchingUsers: (isFetching: boolean) => void
    setIsFetchingButtons: (isFetching: boolean, userId: string) => void
}

const mapToPropsDispatch = (dispatch: Dispatch): mapToDispatchPropsType => {
    return {
        followCallback: userId => dispatch(followAC(userId)),
        unFollowCallback: userId => dispatch(unFollowAC(userId)),
        setUsers: users => dispatch(setUsersAC(users)),
        setPage: pageNum => dispatch(setCurrentPageAC(pageNum)),
        setUsersCount: usersCount => dispatch(setTotalUsersCountAC(usersCount)),
        setIsFetchingUsers: isFetching => dispatch(setIsFetchingUsersAC(isFetching)),
        setIsFetchingButtons: (isFetching, userId) => dispatch(setIsFetchingButtonAC(isFetching, userId)),
    }
}

export type UsersPropsType = mapToStatePropsType & mapToDispatchPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetchingUsers(true)
        UsersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetchingUsers(false)
                this.props.setUsers(data.items)
                this.props.setUsersCount(data.totalCount);
            })
    }

    pageChanging = (selectedPage: number) => {
        this.props.setIsFetchingUsers(true)
        this.props.setPage(selectedPage)
        UsersApi.getUsers(selectedPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetchingUsers(false)
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
            })
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