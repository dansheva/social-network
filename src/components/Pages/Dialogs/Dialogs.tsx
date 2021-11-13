import React from "react";
import s from "./Dialogs.module.css"
import {DialogsSidebar} from "./DialogsSidebar/DialogsSidebar";
import {Messages} from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";

export function Dialogs(props: DialogsPropsType) {
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