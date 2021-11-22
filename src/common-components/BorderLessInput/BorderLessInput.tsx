import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './BorderLessInput.module.css'
import { WrappedFieldProps} from "redux-form";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type BorderLessInputTextPropsType = DefaultInputPropsType & WrappedFieldProps & {
    onEnter?: () => void
    spanClassName?: string
}

const BorderLessInput: React.FC<BorderLessInputTextPropsType> = (
    {input, meta, placeholder, className, ...props}
) => {

    const emptyError = meta.error && meta.submitFailed;
    const othersError = input.value && meta.error;

    const finalSpanClassName = `${s.error} ${props.spanClassName ? props.spanClassName : ''}`
    const finalInputClassName = `${s.input} ${emptyError || othersError ? s.errorInput : s.input} ${className}` // need to fix with (?:) and s.superInput

    return (
        <>
            <div className={s.container}>
                <input
                    type={'text'}
                    {...input}
                    className={finalInputClassName}
                    placeholder={emptyError? meta.error: placeholder}
                    {...props}
                />
                {othersError? <div className={finalSpanClassName}>{meta.error}</div> : null}
            </div>
        </>
    )
}

export default BorderLessInput
