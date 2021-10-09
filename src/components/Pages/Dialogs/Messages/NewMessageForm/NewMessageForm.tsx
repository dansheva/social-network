import React, {ChangeEvent} from "react";
import s from "./NewMessageForm.module.css";
import {SendIcon} from "./Icons/SendIcon";
import {ActionsTypes} from "../../../../../redux/store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../../redux/dialogs-reducer";

type PropsType = {
    newMessageText: string
    onInputChange: (text: string) => void
    sendMessage: () => void
}

export const NewMessageForm = (props: PropsType) => {


    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        props.onInputChange(text)
        // const text = e.target.value;
        // const action = updateNewMessageTextActionCreator(text);
        // props.dispatch(action);
    }

    const sendMessageHandler = () => {
        props.sendMessage()
        // const action = sendMessageActionCreator();
        // props.dispatch(action);
    }

    return (
        <div className={s.new_message_form}>
            <div className={s.input_container}>
                <input onChange={onInputChange}
                       className={s.input}
                       placeholder={'Write a message...'}
                       value={props.newMessageText}
                       type="text"/>
            </div>
            <div className={s.send_button} onClick={sendMessageHandler}>
                <SendIcon />
            </div>
        </div>
    )
}