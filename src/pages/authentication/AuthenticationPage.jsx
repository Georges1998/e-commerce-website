import React from 'react'
import SignIn from './../../components/sign-in/SignIn'

import './authentication-page.scss'
const AuthenticationPage = () => {
    return (
        <div className="authentication-page">
            <SignIn />
            <SignIn />
        </div>)
}
export default AuthenticationPage;