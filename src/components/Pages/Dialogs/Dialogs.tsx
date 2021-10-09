import React from "react";
import s from "./Dialogs.module.css"
import {ActionsTypes, dialogsType} from "../../../redux/store";
import {DialogsSidebar} from "./DialogsSidebar/DialogsSidebar";
import {Messages} from "./Messages/Messages";

type PropsType = {
    dialogs: dialogsType
    dispatch: (action: ActionsTypes) => void
}


export function Dialogs(props: PropsType) {

    return (
        <div className={`${s.dialogs} box_shadow`}>
            <DialogsSidebar dialogsTabsData={props.dialogs.dialogsData} />
            <Messages dispatch={props.dispatch}
                      dialogs={props.dialogs} />
        </div>
    )
}