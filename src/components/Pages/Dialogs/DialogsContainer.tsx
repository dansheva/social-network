import React, {ComponentType} from "react";
import {
    DialogsTabsDataType, MessagesDataType,
    sendMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../withAuthRedirect";

type MapToPropsStateType = {
    dialogsData: DialogsTabsDataType
    messages: MessagesDataType
    isLoggedIn: boolean
}

const mapToPropsState = (state: AppStateType): MapToPropsStateType => {
    return{
        dialogsData: state.dialogs.dialogsData,
        messages: state.dialogs.messagesData,
        isLoggedIn: state.auth.isAuth
    }
}

type MapToDispatchType = {
    sendMessage: (newMessage: string) => void
}

const mapToDispatchType = (dispatch: Dispatch): MapToDispatchType => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage))
        }
    }
}

export type DialogsPropsType = MapToPropsStateType & MapToDispatchType

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapToPropsState, mapToDispatchType)
)(Dialogs)