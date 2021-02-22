import React, { useState } from 'react';
import CustomButton from '../custom-button/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase-service';
import CustomInput from '../custom-input/CustomInput'

import './sign-in.scss'

const SingIn = () => {
    const [login, setLogin] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setLogin({ ...login, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(login.email, login.password)
            setLogin({ email: '', password: '' })
        } catch (error) {
            alert(error)
        }
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