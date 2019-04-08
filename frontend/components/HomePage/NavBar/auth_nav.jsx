import React from 'react';
import { NavLink } from 'react-router-dom'
import UserPane from './user_pane';
import SearchContainer from '../Search/search_container';

class AuthNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.toggleUserPane = this.toggleUserPane.bind(this)
    }

    toggleUserPane() {
        this.userPane.toggle()
    }

    render() {
        if (!this.props.currentUser) {
            return(
                <div className="auth-nav">
                    <SearchContainer/>
                    <NavLink to='/login' className='nav-bar-link' id="signin-button">Sign In</NavLink>
                    <NavLink to='/signup' className='nav-bar-link'>Get Started</NavLink>
                </div>
            )
        } else {
            return(
                <div className="auth-nav">
                    <div className="auth-nav-buttons">
                        <SearchContainer />
                        <NavLink to={`/users/${this.props.currentUser.id}/bookmarks`}>
                            <button><i className="far fa-bookmark"></i></button>
                        </NavLink>
                        <button><i className="far fa-bell"></i></button>
                        <button 
                            id="user-icon"
                            onClick={this.toggleUserPane}
                            >{this.props.currentUser.username[0]}</button>
                    </div>
                    <UserPane
                        ref={node=>{this.userPane = node}}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}
                        toggleUserPane={this.toggleUserPane}
                        history={this.props.history}
                        />
                </div>
            )
        }
    }

    
}


export default AuthNav