import React from 'react';
import s from './Input.module.css'

const InputErorr = ({ input, meta, className, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
            <div className={s.form} >
                <input className={hasError ? s.error +' '+ className : className } {...input} {...props} />
            </div>

    )
}

export default InputErorr