import React from 'react';
import { Link } from 'react-router-dom'
import UserPane from './user_pane';

class AuthNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser
        this.logout = this.props.logout
        this.toggleUserPane = this.toggleUserPane.bind(this)
    }

    toggleUserPane() {
        this.userPane.toggle()
    }

    render() {
        if (!this.currentUser) {
            return(
                <div className="auth-nav">
                    <Link to='/login' className='nav-bar-link'>Sign In</Link>
                    <Link to='/signup' className='nav-bar-link'>Get Started</Link>
                </div>
            )
        } else {
            return(
                <div className="auth-nav">
                    <div className="auth-nav-buttons">
                        <button><i className="fas fa-search"></i></button>
                        <button><i className="far fa-bookmark"></i></button>
                        <button><i className="far fa-bell"></i></button>
                        <button 
                            id="user-icon"
                            onClick={this.toggleUserPane}
                            >{this.currentUser.username[0]}</button>
                    </div>
                    <UserPane
                        ref={node=>{this.userPane = node}}
                        currentUser={this.currentUser}
                        logout={this.logout}
                        />
                </div>
            )
        }
    }

    
}


export default AuthNav