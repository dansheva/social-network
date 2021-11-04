import React from "react";
import s from "./Users.module.css";
import {User} from "./User/User";
import {UserType} from "../../../redux/users-reducer";


type PropsType = {
    usersCount: number
    pageSize: number
    pageChanging: (num: number) => void
    currentPage: number
    userData: UserType[]
    followCallback: (userId: number) => void
    unFollowCallback: (userId: number) => void
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.usersCount / props.pageSize);

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pagesSpans = pages.map(page => <span onClick={() => props.pageChanging(page)}
                                             className={props.currentPage === page ? s.active : ""}>{page}</span>)

    let users = props.userData.map(u => {
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
            <div>
                {users}
            </div>
            <div className={s.pages}>
                {pagesSpans}
            </div>
        </div>
    )
}