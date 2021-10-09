import React from "react";
import { dialogsType, sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/dialogs-reducer";
import {EmptyObject, Store} from "redux";
import {profileType} from "../../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: Store<EmptyObject & {profile: profileType, dialogs: dialogsType}>
}

export function DialogsContainer(props: PropsType) {
    const state = props.store.getState()
    const dispatch = props.store.dispatch
    const dialogsData = state.dialogs.dialogsData
    const newMessageText = state.dialogs.newMessageText
    const messages = state.dialogs.messagesData
    const sendMessage = () => {
        dispatch(sendMessageActionCreator())
    }
    const onInputChange = (text: string) => {
        dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <Dialogs dialogsData={dialogsData}
                 newMessageText={newMessageText}
                 messages={messages} sendMessage={sendMessage} onInputChange={onInputChange}/>
    )
}