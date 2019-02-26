import React from 'react'

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange(field) {
        return (
            e => this.setState({[field]: e.target.value})
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange("username")}/>
                    <input type="password" onChange={this.handleChange("password")}/>
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm