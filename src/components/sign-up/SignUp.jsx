import React, { useState } from 'react';
import CustomInput from '../custom-input/CustomInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfileDoc } from '../../firebase/firebase-service';

import './sign-up.scss';

const SignUp = () => {
    const [signUp, setSignUp] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const handleChange = (e) => {
        const { value, name } = e.target
        setSignUp({ ...signUp, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (signUp.password !== signUp.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                signUp.email,
                signUp.password
            );

            await createUserProfileDoc(user, signUp.displayName);
            setSignUp({ displayName: '', email: '', password: '', confirmPassword: '' });
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="sign-up">
            <h2>Sign up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                <CustomInput onChange={handleChange} type="text" name="displayName" value={signUp.displayName} label="Display Name" required />
                <CustomInput onChange={handleChange} name="email" value={signUp.email} label="Email" required />
                <CustomInput onChange={handleChange} name="password" type="password" value={signUp.password} label="Password" required />
                <CustomInput onChange={handleChange} name="confirmPassword" type="password" value={signUp.confirmPassword} label="Confirm Password" required />
                <CustomButton type="submit">Sign up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;