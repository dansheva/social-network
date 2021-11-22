import React, { DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Input.module.css'
import {WrappedFieldProps} from "redux-form";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = DefaultInputPropsType & WrappedFieldProps & {
    spanClassName?: string
}

const Input: React.FC<InputPropsType> = (
    {input, meta, placeholder, className, spanClassName, ...props}
) => {



    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${s.input} ${meta.error && meta.touched ? s.errorInput : s.superInput} ${className}`

    return (
        <>
            <div className={s.container}>
                <input
                    type={'text'}
                    {...input}
                    className={finalInputClassName}
                    placeholder={meta.error && meta.touched? meta.error: placeholder}
                    {...props}
                />
            </div>
        </>
    )
}

export default Input
