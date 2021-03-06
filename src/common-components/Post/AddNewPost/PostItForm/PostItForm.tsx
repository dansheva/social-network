import React from "react";
import s from "./PostItFrom.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import BorderLessInput from "../../../BorderLessInput/BorderLessInput";
import {maxLengthCreator, notEmpty} from "../../../../utils/validators/validators";


export type PostItFormDataType = {
    newPostText: string
}

const maxLength100 = maxLengthCreator(10)

const PostItForm: React.FC<InjectedFormProps<PostItFormDataType>> = (props) => {


    return (
        <>
            <form onSubmit={props.handleSubmit} className={s.form}>
                <Field name={'newPostText'}
                       className={s.input}
                       placeholder={"What's new, Danik?"}
                       component={BorderLessInput}
                       autoComplete={'off'}
                       validate={[notEmpty, maxLength100]}
                       type="text"/>
                <button type={'submit'} className={s.post_it}>
                    <div className={s.icon_container}>
                        <svg className={s.icon} enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"/>
                            <path
                                d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"/>
                        </svg>
                    </div>
                    <div className={s.title}>
                        Post it!
                    </div>
                </button>
            </form>
        </>
    )
}

export default reduxForm<PostItFormDataType>({
    form: 'addNewPost'
})(PostItForm)