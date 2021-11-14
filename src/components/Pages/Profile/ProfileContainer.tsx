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


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId: string = this.props.match.params.userId
        if (!userId) {
            userId = '20210'
        }
        this.props.setUserProfile(userId)

        this.props.setUserStatus(userId)
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
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileData: state.profile.profile,
        status: state.profile.status
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

