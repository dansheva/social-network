import React from "react";
import Header from "./Header";
import {ActionsTypes, logoutThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ThunkDispatch} from "redux-thunk";




class HeaderContainer extends React.Component<PropsType>{

    logout = () => {
        this.props.logOut()
    }

    render() {
        return(
            <Header userAvatar={this.props.userAvatar} isAuth={this.props.isAuth} logOut={this.props.logOut} />
        )
    }
}

type MapStateToPropsType = {
    userId: number | null
    userAvatar: string | null
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return{
        userId: state.auth.data.id,
        userAvatar: state.auth.userAvatar,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchToPropsType = {
    logOut: () => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, void, ActionsTypes>): MapDispatchToPropsType => {
    return{
        logOut: () => dispatch(logoutThunkCreator()),
    }
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
