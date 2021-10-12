import React from "react";
import s from "./Users.module.css"
import {User} from "./User/User";
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

    const users = props.userData.map(u => {
        return(
            <User key={u.id}
                  id={u.id}
                  name={u.fullName}
                  status={u.status}
                  city={u.location.city}
                  country={u.location.country}
                  isFollowed={u.followed}
                  followCallback={props.followCallback}
                  unFollowCallback={props.unFollowCallback} />
        )
    })

    return (
        <div className={`${s.users} box_shadow`}>
            {users}
        </div>
    )
}