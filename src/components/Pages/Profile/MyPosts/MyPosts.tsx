import React from "react";
import {Post} from "../../../../common-components/Post/Post";
import s from "./MyPosts.module.css"
import {AddNewPost} from "../../../../common-components/Post/AddNewPost/AddNewPost";

export function MyPosts() {
    return(
        <div className={s.posts}>
            <div className={s.title}>
                My posts
            </div>
            <AddNewPost />
            <div className="my_posts">
                <Post name={"Alex"} time={"3 minutes"} message={"frejnfjf fkjnaejirbf kfjrfb"}/>
                <Post name={"Peter"} time={"3 hours"} message={"lorem ajfenr arejnjfnea"}/>
            </div>
        </div>
    )
}