import React from 'react'

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    renderErrors() {
        return this.props.errors.map( err => 
            <li>{err}</li>
        )
    }

    render() {
        return(
            <div className="session-modal">
                <div className="session-form-box">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <ul>
                            {this.renderErrors()}
                        </ul>
                        <label>Username
                            <input type="text" onChange={this.handleChange("username")}/>
                        </label>

                        <label>Email
                            <input type="email" onChange={this.handleChange("email")}/>
                        </label>

                        <label>Password
                            <input type="password" onChange={this.handleChange("password")}/>
                        </label>
                        
                        <button>{this.props.formType}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm