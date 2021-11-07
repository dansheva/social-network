import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileDataType, setUserProfileAC} from "../../../redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId: string = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get<ProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    setUserProfile: (userProfileData: ProfileDataType) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: userProfileData => dispatch(setUserProfileAC(userProfileData))
    }
}

type PathParamsType = {
    userId: string
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))
