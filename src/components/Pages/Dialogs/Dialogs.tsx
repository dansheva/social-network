import React from "react";
import s from "./Dialogs.module.css"
import {ActionsTypes} from "../../../redux/store";
import {DialogsSidebar} from "./DialogsSidebar/DialogsSidebar";
import {Messages} from "./Messages/Messages";
import {DialogsTabsDataType, dialogsType, MessagesDataType} from "../../../redux/dialogs-reducer";

type PropsType = {
    dialogsData: DialogsTabsDataType
    messages: MessagesDataType
    newMessageText: string
    onInputChange: (text: string) => void
    sendMessage: () => void
}


export function Dialogs(props: PropsType) {

    return (
        <div className={`${s.dialogs} box_shadow`}>
            <DialogsSidebar dialogsTabsData={props.dialogsData} />
            <Messages messages={props.messages}
                      sendMessage={props.sendMessage}
                      onInputChange={props.onInputChange}
                      newMessageText={props.newMessageText}/>
        </div>
    )
}