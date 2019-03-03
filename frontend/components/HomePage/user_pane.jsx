import React from 'react'
import { NavLink } from 'react-router-dom'

class UserPane extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "hidden"
        }
    }

    toggle() {
        this.state.display === "hidden" ?
            this.setState({
                display: "visible"
            }) :
            this.setState({
                display: "hidden"
            })
    }

    
    render(){
        return (
            <div onClick={this.props.toggleUserPane} className={`user-pane-${this.state.display}`}>
                <p>{this.props.currentUser.username}</p>
                <NavLink to="/stories/new">New Story</NavLink>
                <NavLink to={`/users/${this.props.currentUser.id}/stories`}>Stories</NavLink>
                <a>Reading List</a>
                <NavLink to={`/users/${this.props.currentUser.id}`}>Profile</NavLink>
                <a onClick={this.props.logout}>Sign Out</a>
            </div>
        )
    }
}

export default UserPane