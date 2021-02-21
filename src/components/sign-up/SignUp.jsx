import React from 'react';

import './sign-up.scss';

const SignUp = () => {
    const [signUp, setSignUp] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    return (
        <div className="sign-up">
            <h2>Sign up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={login.email} onChange={handleChange} autoComplete="on" />
                <label>Password</label>
                <input type="password" name="password" value={login.password} onChange={handleChange} autoComplete="on" />
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
            </form>
        </div>
    )
}