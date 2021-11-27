import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    ProfileDataType,
    setUserProfileThunkCreator,
    setUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {ActionTypes} from "../../../redux/profile-reducer";
import {compose} from "redux";
import {AuthStateType} from "../../../redux/auth-reducer";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId: string = this.props.match.params.userId
        if (!userId) {
            debugger
            userId = this.props.authData.data.id
                ? this.props.authData.data.id.toString()
                : ''
        }
        if (userId !== '') {
            this.props.setUserProfile(userId)
            this.props.setUserStatus(userId)
        } else {
            this.props.history.replace('/login')
        }
    }


    render() {
        return (
            <Profile profileData={this.props.profileData}
                     status={this.props.status}
                     updateStatus={this.props.updateUserStatus}/>
        );
    }
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

type MapStateToPropsType = {
    profileData: ProfileDataType | null
    status: string | null
    authData: AuthStateType
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileData: state.profile.profile,
        status: state.profile.status,
        authData: state.auth
    }
}

type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
    setUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}
const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, void, ActionTypes>): MapDispatchToPropsType => {
    return {
        setUserProfile: userId => dispatch(setUserProfileThunkCreator(userId)),
        setUserStatus: userId => dispatch(setUserStatusThunkCreator(userId)),
        updateUserStatus: status => dispatch(updateUserStatusThunkCreator(status))
    }
}

type PathParamsType = {
    userId: string
}


export default compose<ComponentType>(
    //withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)