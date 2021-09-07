import React from "react";
import s from "./Dialogs.module.css"
import {DialogTab} from "./DialogTab/DialogTab";
import {DialogsTabsDataType, MessagesDataType} from "../../../redux/state";

type PropsType = {
    dialogsTabsData: DialogsTabsDataType
    messagesData: MessagesDataType
}


export function Dialogs(props: PropsType) {
    let dialogsTabs: Array<JSX.Element> = props.dialogsTabsData.map(t => {
        return (
            <DialogTab name={t.name} lastMessage={t.lastMessage} time={t.time} id={t.id}/>
        )
    })

    let messages: Array<JSX.Element> = props.messagesData.map(mes => {
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