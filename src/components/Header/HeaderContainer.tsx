import React from "react";
import Header from "./Header";
import {ActionTypes, setAuthUserAndAvatarThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ThunkDispatch} from "redux-thunk";




class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        this.props.setAuthUserAndAvatar()
    }
    render() {
        return(
            <Header userAvatar={this.props.userAvatar} isAuth={this.props.isAuth} />
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
    setAuthUserAndAvatar: () => void
}
const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, void, ActionTypes>): MapDispatchToPropsType => {
    return{
        setAuthUserAndAvatar: () => dispatch(setAuthUserAndAvatarThunkCreator())
    }
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
