import React from "react";
import s from "./Dialogs.module.css"
import {DialogTab} from "./DialogTab/DialogTab";

type DialogsDataObjectType = {
    name: string
    lastMessage: string
    time: string
    id: number
}

type DialogsDataType = Array<DialogsDataObjectType>;

type MessagesDataObjectType = {
    id: number
    message: string
}

type MessagesDataType = Array<MessagesDataObjectType>;


export function Dialogs() {

    let dialogsData: DialogsDataType = [
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


    let dialogsTabs: Array<JSX.Element> = dialogsData.map(t => {
        return (
            <DialogTab name={t.name} lastMessage={t.lastMessage} time={t.time} id={t.id}/>
        )
    })

    let messages: Array<JSX.Element> = messagesData.map(mes => {
        return (
            <div className={s.message}>{mes.message}</div>
        )
    })
    return (
        <div className={`${s.dialogs} box_shadow`}>
            <div className={s.dialogs_tabs}>
                {dialogsTabs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}