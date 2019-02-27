import React from 'react';
import { Link } from 'react-router-dom'

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

    componentDidMount() {
        this.props.clearErrors()
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

    renderEmail() {
        if (this.props.formType === 'Log In') {
            return null
        } else {
            return (<label>Email
            <input type="email" onChange={this.handleChange("email")}/>
        </label>)
        }
    }

    renderDemoButton() {
        if (this.props.formType === 'Log In') {
            return null
        } else {
            return (<button onClick={this.handleDemoClick}>Demo Login</button>)
        }
    }

    render() {
        return(
            <>
                <Link to="/" className="session-modal">
                </Link>
                <div className="session-form-box">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <div></div>
                        <label>Username
                            <input type="text" onChange={this.handleChange("username")}/>
                        </label>

                        {this.renderEmail()}

                        <label>Password
                            <input type="password" onChange={this.handleChange("password")}/>
                        </label>
                        
                        <button>{this.props.formType}</button>
                        {this.renderDemoButton}
                    </form>
                        <ul>
                            {this.renderErrors()}
                        </ul>
                </div>
            </>
        )
    }
}

export default SessionForm