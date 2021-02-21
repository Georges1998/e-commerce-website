import React, { useState } from 'react';
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase-service';
import CustomInput from '../custom-input/CustomInput'

import './sign-in.scss'

const SingIn = () => {
    const [login, setLogin] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setLogin({ ...login, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin({ email: '', password: '' })
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <form onSubmit={handleSubmit}>
                <CustomInput name="email" type="email" onChange={handleChange} value={login.email} label="Email" required />
                <CustomInput name="password" type="password" onChange={handleChange} value={login.password} label="Password" required />
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
            </form>
        </div>
    )
}

export default SingIn;