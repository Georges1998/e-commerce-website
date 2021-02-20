import React from 'react';
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase-service';

const SingIn = () => {
    return (
        <div>
            <h1>Sing in</h1>
            <CustomButton onClick={signInWithGoogle}>George</CustomButton>
        </div>
    )
}

export default SingIn;