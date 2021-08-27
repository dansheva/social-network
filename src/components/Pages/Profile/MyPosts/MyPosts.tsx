import React from "react";
import {Post} from "../../../../common-components/Post/Post";
import s from "./MyPosts.module.css"
import {AddNewPost} from "../../../../common-components/Post/AddNewPost/AddNewPost";

type postObjectDataType = {
    id: number
    name: string
    time: string
    message: string
}

type postsDataType = Array<postObjectDataType>;


export function MyPosts() {

    let postsData: postsDataType = [
        {
            id: 1,
            name: "Danik",
            time: "3 minutes",
            message: "frejnfjf fkjnaejirbf kfjrfb",
        },
        {
            id: 2,
            name: "Danik",
            time: "3 hours",
            message: "lorem ajfenr arejnjfnea kfjrfb",
        },
    ];

    let posts: Array<JSX.Element> = postsData.map(p => {
        return (
            <Post name={p.name} time={p.time} message={p.message}/>
        );
    })


    return (
        <div className={s.posts}>
            <div className={s.title}>
                My posts
            </div>
            <AddNewPost/>
            <div className="my_posts">
                {posts}
            </div>
        </div>
    )
}