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
import axios from "axios";
import {Users} from "./Users";

type mapToStatePropsType = {
    userData: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    IsFetchingButton: boolean
}

const mapToPropsState = (state: AppStateType): mapToStatePropsType => {
    return {
        userData: state.users.users,
        pageSize: state.users.pageSize,
        usersCount: state.users.usersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetchingUsers,
        IsFetchingButton: state.users.isFetchingButton,
    }
}

type mapToDispatchPropsType = {
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setPage: (pageNum: number) => void
    setUsersCount: (usersCount: number) => void
    setIsFetchingUsers: (isFetching: boolean) => void
    setIsFetchingButton: (isFetching: boolean) => void
}

const mapToPropsDispatch = (dispatch: Dispatch): mapToDispatchPropsType => {
    return {
        followCallback: userId => dispatch(followAC(userId)),
        unFollowCallback: userId => dispatch(unFollowAC(userId)),
        setUsers: users => dispatch(setUsersAC(users)),
        setPage: pageNum => dispatch(setCurrentPageAC(pageNum)),
        setUsersCount: usersCount => dispatch(setTotalUsersCountAC(usersCount)),
        setIsFetchingUsers: isFetching => dispatch(setIsFetchingUsersAC(isFetching)),
        setIsFetchingButton: isFetching => dispatch(setIsFetchingButtonAC(isFetching)),
    }
}

export type UsersPropsType = mapToStatePropsType & mapToDispatchPropsType

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: any ////////
}

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetchingUsers(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.setIsFetchingUsers(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount);
            })
    }

    pageChanging = (selectedPage: number) => {
        this.props.setIsFetchingUsers(true)
        this.props.setPage(selectedPage)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.setIsFetchingUsers(false)
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
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
                   isFetchingButton={this.props.IsFetchingButton}
                   setIsFetchingButton={this.props.setIsFetchingButton}/>
        );
    }
}

export const UsersContainer = connect(mapToPropsState, mapToPropsDispatch)(UsersAPIComponent)