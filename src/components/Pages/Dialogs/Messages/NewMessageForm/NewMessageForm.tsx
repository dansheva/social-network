import React from "react";
import s from "./NewMessageForm.module.css";
import {SendIcon} from "./Icons/SendIcon";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator, notEmpty} from "../../../../../utils/validators/validators";
import BorderLessInput from "../../../../../common-components/BorderLessInput/BorderLessInput";

export type NewMessageFormPropsType = {
    newMessageText: string
}

const maxLength10 = maxLengthCreator(10)

const NewMessageForm: React.FC<InjectedFormProps<NewMessageFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}
              className={s.new_message_form}>
            <div className={s.input_container}>
                <Field className={s.input}
                       component={BorderLessInput}
                       name={'newMessageText'}
                       placeholder={'Write a message...'}
                       type="text"
                       autoComplete={'off'}
                       validate={[notEmpty, maxLength10]}/>
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