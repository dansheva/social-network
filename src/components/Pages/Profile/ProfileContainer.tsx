import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileDataType, setUserProfileThunkCreator} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {ActionTypes} from "../../../redux/profile-reducer";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId: string = this.props.match.params.userId
        if (!userId) {
            userId = '20210'
        }
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile profileData={this.props.profileData}/>
        );
    }
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

type MapStateToPropsType = {
    profileData: ProfileDataType | null
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileData: state.profile.profile ? state.profile.profile : null
    }
}

type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
}
const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, void, ActionTypes>): MapDispatchToPropsType => {
    return {
        setUserProfile: userId => dispatch(setUserProfileThunkCreator(userId))
    }
}

type PathParamsType = {
    userId: string
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))
