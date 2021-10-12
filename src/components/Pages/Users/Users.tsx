import React from "react";
import s from "./Users.module.css"
import {User} from "./User/User";
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

    // if (props.userData.length === 0) {
    //     props.setUsers([
    //         {id: 1, followed: true, fullName: 'Danik', status: 'Bla bla bla', location: {city: 'Kosice', country: 'Slovakia'}},
    //         {id: 2, followed: false, fullName: 'Sasha', status: 'Bla bla bla', location: {city: 'Bratislava', country: 'Slovakia'}},
    //         {id: 3, followed: true, fullName: 'Sofia', status: 'Bla bla bla', location: {city: 'Kyiv', country: 'Ukraine'}},
    //         {id: 4, followed: false, fullName: 'Danik', status: 'Bla bla bla', location: {city: 'Kosice', country: 'Slovakia'}},
    //         {id: 5, followed: true, fullName: 'Sasha', status: 'Bla bla bla', location: {city: 'Bratislava', country: 'Slovakia'}},
    //         {id: 6, followed: true, fullName: 'Sofia', status: 'Bla bla bla', location: {city: 'Kyiv', country: 'Ukraine'}},
    //         {id: 7, followed: false, fullName: 'Danik', status: 'Bla bla bla', location: {city: 'Kosice', country: 'Slovakia'}},
    //         {id: 8, followed: true, fullName: 'Sasha', status: 'Bla bla bla', location: {city: 'Bratislava', country: 'Slovakia'}},
    //         {id: 9, followed: true, fullName: 'Sofia', status: 'Bla bla bla', location: {city: 'Kyiv', country: 'Ukraine'}},
    //     ])
    // }

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