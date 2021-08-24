import React from 'react';

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
            <div className="posts-container">
                <div className="posts__title">
                    My posts
                </div>
                <div className="posts__add-new-post">
                    New post
                </div>
                <div className="posts__my-posts">
                    <div className="post">
                        Post 1
                    </div>
                    <div className="post">
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;