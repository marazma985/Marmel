import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { loginTC } from '../../Redux/auth-Reduser';
import { required } from '../../Validate/Validator';
import Input from '../redux-form/Input';
import s from './Login.module.css';

const Login = (props) => {
    const onSubmit = (dataForm) => {
        props.loginTC(dataForm.email, dataForm.password, dataForm.rememberMe,dataForm.captcha)
        

    }
    return (
        <div className={"flex " + s.main}>
            {props.login && <Redirect to={'/Profile/' + props.myId}></Redirect>}
            <div className={s.login} >
                <div className={s.center}>
                    <h1>LogIn</h1>
                    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
                </div>

            </div>
            <div className={s.register} >
                <iframe src="https://social-network.samuraijs.com/signUp#content" scrolling='no' frameborder="0"></iframe>
            </div>
        </div>
            
    )
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {props.error }
            </div>
            <div>
                <Field component={Input} type="text" validate={[required]} name='email' placeholder='login' />
            </div>
            <div>
                <Field component={Input} type="text" validate={[required]} name='password' placeholder='password' />
            </div>
            <div>
                <Field component='input' name='rememberMe' type='checkbox' />rememberMe
            </div>
            <div>
                {props.captchaUrl && <div>
                    <img src={props.captchaUrl} />
                    <div>
                        <Field component={Input} validate={[required]} name='captcha' placeholder='write simbols' />
                    </div>
                    
                </div>}

            </div>
            <div>
                <button>LogIn</button>
            </div>
        </form>


    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);


const mapStateToProps = (state)=>{
    return{
    captchaUrl:state.auth.captcha,
    login:state.auth.login,
    myId:state.auth.id
    }
}

export default connect(mapStateToProps,{loginTC})(Login)