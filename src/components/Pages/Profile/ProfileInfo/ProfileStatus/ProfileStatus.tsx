import React from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
    status: string | null
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    turnOnEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    turnOffEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.about}>
                <span>
                    Status:
                </span>
                {this.props.status ?
                    <div>
                        {!this.state.editMode &&
                        <span onDoubleClick={this.turnOnEditMode.bind(this)}>
                            this.props.status
                        </span>}
                        {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.turnOffEditMode.bind(this)} type="text" value={this.props.status}/>}
                    </div>
                    : null}
            </div>
        )

    }


}