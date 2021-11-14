import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status ? this.props.status : '',
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
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
        this.props.updateStatus(this.state.status ? this.state.status : '')
    }

    render() {
        console.log(this.props.status)
        return (
            <div className={s.status_container}>
                <span className={s.status_title}>
                    {'Status:'}
                </span>
                <div>
                    {this.state.editMode || !this.props.status
                        ? <input autoFocus={true}
                                 onChange={this.onStatusChange}
                                 onBlur={this.turnOffEditMode}
                                 type="text"
                                 value={this.state.status}/>
                        : <span onDoubleClick={this.turnOnEditMode}>
                                {this.props.status}
                            </span>
                    }
                </div>
            </div>
        )

    }


}