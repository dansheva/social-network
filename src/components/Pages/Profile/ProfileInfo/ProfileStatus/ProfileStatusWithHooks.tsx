import React, {ChangeEvent, useState} from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditeMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const turnOnEditMode = () => setEditeMode(true)
    const turnOffEditMode = () => {
        setEditeMode(false)
        props.updateStatus(status? status: '')
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div className={s.status_container}>
                <span className={s.status_title}>
                    {'Status:'}
                </span>
            <div>
                {editMode || !props.status
                    ? <input autoFocus={true}
                             onChange={onChange}
                             onBlur={turnOffEditMode}
                             type="text"
                             value={status? status : undefined}/>
                    : <span onDoubleClick={turnOnEditMode}>
                                {props.status}
                            </span>
                }
            </div>
        </div>
    )
}