import React from "react";
import s from "./Messages.module.css";
import NewMessageForm, {NewMessageFormPropsType} from "./NewMessageForm/NewMessageForm";
import {MessagesDataType} from "../../../../redux/dialogs-reducer";

type PropsType = {
    messages: MessagesDataType
    sendMessage: (newMessage: string) => void
}

export const Messages = (props: PropsType) => {

    const messages: Array<JSX.Element> = props.messages.map(mes => {
        return (
            <div className={s.message}>{mes.message}</div>
        )
    })

    const onSubmit = (formData: NewMessageFormPropsType) => {
        props.sendMessage(formData.newMessageText)
        formData.newMessageText = ''
    }

    return(
        <div className={s.messages_wrapper}>
            <div className={s.messages_container}>
                {messages}
            </div>
            <div className={s.new_message_container}>
                <NewMessageForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}