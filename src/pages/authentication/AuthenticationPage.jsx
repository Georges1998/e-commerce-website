import React from 'react'
import SignIn from './../../components/sign-in/SignIn'
import SignUp from './../../components/sign-up/SignUp'

import './authentication-page.scss'
const AuthenticationPage = () => {
    return (
        <div className="authentication-page">
            <SignIn />
            <SignUp />
        </div>)
}
export default AuthenticationPage;