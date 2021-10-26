import React from "react";
import s from "./Users.module.css"
import {User} from "./User/User";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../../redux/users-reducer";

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: any
}

class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = this.props.usersCount / this.props.pageSize;

        let pages

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
                    <span className={s.active}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
        );
    }
}


export default UsersC