import React, {ChangeEvent} from "react";
import s from "./NewMessageForm.module.css";
import {SendIcon} from "./Icons/SendIcon";
import {ActionsTypes} from "../../../../../redux/state";
import {sendMessage, updateNewMessageTextCreator} from "../../../../../redux/dialogs-reducer";

type PropsType = {
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export const NewMessageForm = (props: PropsType) => {


    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        const action = updateNewMessageTextCreator(text);
        props.dispatch(action);
    }

    const sendMessageHandler = () => {
        const action = sendMessage();
        props.dispatch(action);
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