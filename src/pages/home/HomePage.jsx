import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import './home-page.scss'

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>HomePage</h1>
            <SignIn />
        </div>
    )
}

export default HomePage;