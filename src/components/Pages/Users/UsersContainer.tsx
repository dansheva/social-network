import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
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
}

const mapToPropsState = (state: AppStateType): mapToStatePropsType => {
    return {
        userData: state.users.users,
        pageSize: state.users.pageSize,
        usersCount: state.users.usersCount,
        currentPage: state.users.currentPage
    }
}

type mapToDispatchPropsType = {
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setPage: (pageNum: number) => void
    setUsersCount: (usersCount: number) => void
}

const mapToPropsDispatch = (dispatch: Dispatch): mapToDispatchPropsType => {
    return {
        followCallback: userId => {
            dispatch(followAC(userId))
        },
        unFollowCallback: userId => {
            dispatch(unFollowAC(userId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setPage: pageNum => {
            dispatch(setCurrentPageAC(pageNum))
        },
        setUsersCount: usersCount => {
            dispatch(setTotalUsersCountAC(usersCount))
        }
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
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount);
            })
    }
    pageChanging = (selectedPage: number) => {
        this.props.setPage(selectedPage)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${this.props.pageSize}`)
            .then(response => {
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
                   unFollowCallback={this.props.unFollowCallback}/>
        );
    }
}

export const UsersContainer = connect(mapToPropsState, mapToPropsDispatch)(UsersAPIComponent)