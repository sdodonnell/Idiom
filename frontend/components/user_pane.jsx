import React from 'react'

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
            <div className={`user-pane-${this.state.display}`}>
                <p>{this.props.currentUser.username}</p>
                <a>New Story</a>
                <a>Stories</a>
                <a>Reading List</a>
                <a>Profile</a>
                <a onClick={this.props.logout}>Sign Out</a>
            </div>
        )
    }
}

export default UserPane