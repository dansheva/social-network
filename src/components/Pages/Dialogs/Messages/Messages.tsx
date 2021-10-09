import React from "react";
import s from "./Messages.module.css";
import {ActionsTypes, dialogsType, MessagesDataType} from "../../../../redux/store";
import {NewMessageForm} from "./NewMessageForm/NewMessageForm";

type PropsType = {
    dialogs: dialogsType
    dispatch: (action: ActionsTypes) => void
}

export const Messages = (props: PropsType) => {

    const messages: Array<JSX.Element> = props.dialogs.messagesData.map(mes => {
        return (
            <div className={s.message}>{mes.message}</div>
        )
    })

    return(
        <div className={s.messages_wrapper}>
            <div className={s.messages_container}>
                {messages}
            </div>
            <div className={s.new_message_container}>
                <NewMessageForm newMessageText={props.dialogs.newMessageText} dispatch={props.dispatch} />
            </div>
        </div>
    )
}