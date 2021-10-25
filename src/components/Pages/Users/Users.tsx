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

export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.userData.length === 0) {
            axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    debugger
                    props.setUsers(response.data.items)
                })
        }
    }

    const users = props.userData.map(u => {
        return (
            <User key={u.id}
                  id={u.id}
                  name={u.name}
                  status={u.status}
                  isFollowed={u.followed}
                  followCallback={props.followCallback}
                  unFollowCallback={props.unFollowCallback}/>
        )
    })

    return (
        <div className={`${s.users} box_shadow`}>
            <button onClick={getUsers}>Get users</button>
            {users}
        </div>
    )
}