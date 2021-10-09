import React from 'react';
import s from './Input.module.css'

const Input = ({ input, meta, className, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
            <div className={s.form} >
                <input className={hasError ? s.error +' '+ className : className } {...input} {...props} />
                {hasError && <div className='spanErorr'><span>{meta.error}</span></div>}
            </div>

    )
}

export default Input