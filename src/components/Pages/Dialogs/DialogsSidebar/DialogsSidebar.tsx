import React from "react";
import s from "./DialogsSidebar.module.css";
import {DialogTab} from "./DialogTab/DialogTab";
import {DialogsTabsDataType} from "../../../../redux/state";

type PropsType ={
    dialogsTabsData: DialogsTabsDataType
}

export const DialogsSidebar = (props: PropsType) => {

    const dialogsTabs: Array<JSX.Element> = props.dialogsTabsData.map(t => {
        return (
            <DialogTab name={t.name} lastMessage={t.lastMessage} time={t.time} id={t.id}/>
        )
    })

    return(
        <div className={s.dialogs_tabs}>
            {dialogsTabs}
        </div>
    )
}