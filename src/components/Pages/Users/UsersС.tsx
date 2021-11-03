import React from "react";
import s from "./Users.module.css"
import {User} from "./User/User";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../../redux/users-reducer";

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: any ////////
}

class UsersC extends React.Component<UsersPropsType> {

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

        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let pagesSpans = pages.map(page => <span onClick={() => this.pageChanging(page)}
                                                 className={this.props.currentPage === page ? s.active : ""}>{page}</span>)

        let users = this.props.userData.map(u => {
            return (
                <User key={u.id}
                      id={u.id}
                      name={u.name}
                      status={u.status}
                      isFollowed={u.followed}
                      followCallback={this.props.followCallback}
                      unFollowCallback={this.props.unFollowCallback}/>
            )
        })

        return (
            <div className={`${s.users} box_shadow`}>
                <div>
                    {users}
                </div>
                <div className={s.pages}>
                    {pagesSpans}
                </div>
            </div>
        );
    }
}


export default UsersC