import React from "react";
import Header from "./Header";
import {setUserAvatarAC, setUserDataAC, UserDataType} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {HeaderApi, ProfileApi} from "../../api/api";




class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        HeaderApi.isUserAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                    if (data.data.id) {
                        ProfileApi.getProfileData(data.data.id.toString())
                            .then(data => {
                                if (data.photos.small) {
                                    this.props.setUserAvatar(data.photos.small)
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
