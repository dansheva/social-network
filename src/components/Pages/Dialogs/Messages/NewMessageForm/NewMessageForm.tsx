import React from "react";
import s from "./NewMessageForm.module.css";
import {SendIcon} from "./Icons/SendIcon";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

export type NewMessageFormPropsType = {
    newMessageText: string
}

const NewMessageForm: React.FC<InjectedFormProps<NewMessageFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}
              className={s.new_message_form}>
            <div className={s.input_container}>
                <Field className={s.input}
                       component={'input'}
                       name={'newMessageText'}
                       placeholder={'Write a message...'}
                       type="text"/>
            </div>
            <button type={'submit'} className={s.send_button}>
                <SendIcon />
            </button>
        </form>
    )
}

export default reduxForm<NewMessageFormPropsType>({
    form: 'contact'
})(NewMessageForm)