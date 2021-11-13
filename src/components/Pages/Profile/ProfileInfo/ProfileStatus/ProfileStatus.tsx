import React from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
    status: string | null
}

export class ProfileStatus extends React.Component<PropsType> {
    render () {
        return (
            <div className={s.about}>
            <span>
                About me:
            </span>
                <span>
                {this.props.status && this.props.status}
            </span>
            </div>
        )

    }


}