import React from "react";
import Header from "./Header";
import axios from "axios";
import {setUserAvatarAC, setUserDataAC, UserDataType} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileDataType} from "../../redux/profile-reducer";

type IsAuthResponse = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    resultCode: number | null
    messages: string[] | null
}


class HeaderContainer extends React.Component<PropsType>{

    componentDidMount() {
        axios.get<IsAuthResponse>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)

                    if (res.data.data.id) {
                        axios.get<ProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/${res.data.data.id}`)
                            .then(response => {
                                if (response.data.photos.small) {
                                    this.props.setUserAvatar(response.data.photos.small)
                                }
                            })
                    }
                }
            })
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
    setAuthUserData: (userData: UserDataType) => void
    setUserAvatar: (userAvatar: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return{
        setAuthUserData: userData => dispatch(setUserDataAC(userData)),
        setUserAvatar: userAvatar => dispatch(setUserAvatarAC(userAvatar))
    }
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
