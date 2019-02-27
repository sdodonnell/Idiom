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
                <h2></h2>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default UserPane