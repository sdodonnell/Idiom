import React from 'react';
import { Link } from 'react-router-dom'

const AuthNav = ({currentUser, logout}) => {
    if (!currentUser) {
        return(
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
        )
    } else {
        return(
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        )
    }
}


export default AuthNav