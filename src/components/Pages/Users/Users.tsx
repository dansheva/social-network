import React from "react";
import s from "./Users.module.css";
import {User} from "./User/User";
import {UserType} from "../../../redux/users-reducer";
import {Loader} from "../../../common-components/Loader/Loader";


type PropsType = {
    usersCount: number
    pageSize: number
    pageChanging: (num: number) => void
    currentPage: number
    userData: UserType[]
    isFetching: boolean
    isFetchingButtons: string[]
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.usersCount / props.pageSize);

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const pagesReturn = (page: number) => {
        return (<span onClick={() => props.pageChanging(page)}
                      className={props.currentPage === page ? s.active : ""}>{page}</span>)
    }

    let pagesSpans = pages.map(p => {
        if (pages.length > 20){
            if (p <= 5 || p >= pages.length - 2) {
                return pagesReturn(p)
            } else if (p === 6) {
                return '......'
            }
        } else {
            return pagesReturn(p)
        }
    })

    let users = props.userData.map(u => {
        return (
            <User key={u.id}
                  id={u.id}
                  name={u.name}
                  status={u.status}
                  isFollowed={u.followed}
                  photo={u.photos.small? u.photos.small : undefined}
                  href={`profile/${u.id.toString()}`}
                  isFetchingButtons={props.isFetchingButtons}
                  followUser={props.followUser}
                  unFollowUser={props.unFollowUser}/>
        )
    })

    return (
        <div className={s.container}>
            {props.isFetching ? <Loader className={s.loader}/> : null}
            <div className={`${s.users} box_shadow`}>
                <div className={`${props.isFetching && s.loading}`}>
                    <div>
                        {users}
                    </div>
                    <div className={s.pages}>
                        {pagesSpans}
                    </div>
                </div>
            </div>
        </div>
    )
}