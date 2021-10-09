import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapLoginToProps = (state) =>({
        login:state.auth.login
});

export const withLoginRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        
        render(){
            if(!this.props.login) return<Redirect to='/login'></Redirect>;
            
            return <Component />
        }
    }
    let withRedirect = connect(mapLoginToProps)(RedirectComponent);
    return withRedirect
}