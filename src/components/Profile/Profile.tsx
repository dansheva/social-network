import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

function Profile () {
    return(
        <div className={"main-content"}>
            <div className="big-image-container">
                <img
                    className="big-image full-width-image box-shadow"
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="img"/>
            </div>
            <div className={"avatar-description-container"}>
                <div className={"avatar-container"}>
                    <img
                        className="full-width-image"
                        src="https://www.pngkey.com/png/full/204-2049354_ic-account-box-48px-profile-picture-icon-square.png"
                        alt="avatar"/>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;