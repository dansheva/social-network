import React from "react";
import s from "./Messages.module.css";
import {ActionsTypes} from "../../../../redux/store";
import {NewMessageForm} from "./NewMessageForm/NewMessageForm";
import {dialogsType, MessagesDataType} from "../../../../redux/dialogs-reducer";

type PropsType = {
    messages: MessagesDataType
    newMessageText: string
    onInputChange: (text: string) => void
    sendMessage: () => void
}

export const Messages = (props: PropsType) => {

    const messages: Array<JSX.Element> = props.messages.map(mes => {
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
                <NewMessageForm newMessageText={props.newMessageText}
                                onInputChange={props.onInputChange}
                                sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}