import React,{useEffect, useState} from 'react';
import {authWithFacebook, authWithGoogle} from '../firebase/auth'
const AuthComponent = (props) => {
console.log(authWithFacebook, 'asdsfjasdj')
    return(
        <div>
            <button onClick={()=>{
                authWithFacebook()
            }}>
                autenticacion con facebook
            </button>
            <button onClick={()=>{
                authWithGoogle();
            }}>
                autenticacion con google
            </button>
        </div>
    )
}

export {AuthComponent}