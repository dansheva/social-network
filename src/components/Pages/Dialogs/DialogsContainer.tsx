import React from "react";
import {
    DialogsTabsDataType, MessagesDataType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../../withAuthRedirect";

type MapToPropsStateType = {
    dialogsData: DialogsTabsDataType
    messages: MessagesDataType
    newMessageText: string
    isLoggedIn: boolean
}

const mapToPropsState = (state: AppStateType): MapToPropsStateType => {
    return{
        dialogsData: state.dialogs.dialogsData,
        messages: state.dialogs.messagesData,
        newMessageText: state.dialogs.newMessageText,
        isLoggedIn: state.auth.isAuth
    }
}

type MapToDispatchType = {
    onInputChange: (text: string) => void
    sendMessage: () => void
}

const mapToDispatchType = (dispatch: Dispatch): MapToDispatchType => {
    return {
        onInputChange: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export type DialogsPropsType = MapToPropsStateType & MapToDispatchType

const DialogsContainer = withAuthRedirect(connect(mapToPropsState, mapToDispatchType)(Dialogs))

export default DialogsContainer