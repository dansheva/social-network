import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Post} from "./common-components/Post/Post";

type postObjectDataType = {
    id: number
    name: string
    time: string
    message: string
}

export type postsType = Array<postObjectDataType>;


let posts: postsType = [
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



type DialogsDataObjectType = {
    name: string
    lastMessage: string
    time: string
    id: number
}

export type DialogsTabsDataType = Array<DialogsDataObjectType>;

type MessagesDataObjectType = {
    id: number
    message: string
}

 export type MessagesDataType = Array<MessagesDataObjectType>;


let dialogsData: DialogsTabsDataType = [
    {
        id: 1,
        name: "Valera",
        time: "20:22",
        lastMessage: "Last message",
    },
    {
        id: 2,
        name: "Danik",
        time: "19:40",
        lastMessage: "Last message",
    },
    {
        id: 3,
        name: "Sasha",
        time: "8:04",
        lastMessage: "Last message",
    },
]
let messagesData: MessagesDataType = [
    {
        id: 1,
        message: "Hi",
    },
    {
        id: 2,
        message: "My",
    },
    {
        id: 3,
        message: "Hah",
    },
]

ReactDOM.render(<App posts={posts} messagesData={messagesData} dialogsData={dialogsData}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
