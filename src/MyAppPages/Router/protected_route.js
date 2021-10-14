import React from "react";
import {Redirect,Route} from 'react-router-dom';

function ProtectedRoute({isAuth: isAuth, component: Component, ...rest}){
    var isAuthnew = JSON.parse(localStorage.getItem('isAuth'));
    return <Route {...rest} render={(props)=>{
        if(isAuthnew){
            return <Component/>
        }else{
            return <Redirect to={{pathname:'/',state:{from:props.location}}}/>
        }
    }}/>
}

export default ProtectedRoute;