import React from "react";
import s from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return (
        <div className={s.profile_info}>
            {/*<div className={s.big_image_container}>*/}
            {/*    <img*/}
            {/*        className={`${s.big_image} box_shadow`}*/}
            {/*        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"*/}
            {/*        alt="img"/>*/}
            {/*</div>*/}
            <div className={s.avatar_description_container}>
                <div className={s.avatar_container}>
                    <img
                        className={s.avatar}
                        src="https://www.pngkey.com/png/full/204-2049354_ic-account-box-48px-profile-picture-icon-square.png"
                        alt="avatar"/>
                </div>
                <div className={s.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
        </div>
    )
}