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

    renderText() {
        if (this.props.formType === 'Log In') {
            return (
                <div className="session-text">
                <h1>Join Idiom</h1>
                <p>Create an account to receive great stories in your inbox, 
                   personalize your homepage, and follow authors and topics that you love.</p>
                </div>
            )
        } else {
            return (
                <div className="session-text">
                <h1>Welcome Back</h1>
                <p>Sign in to get personalized story recommendations, 
                    follow authors and topics you love, and interact with stories.</p>
                </div>
            )
        }       
    }

    render() {
        return(
            <>
                <Link to="/" className="session-modal">
                </Link>
                <div className="session-form-box">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.renderText()}
                        <input type="text" defaultValue="Username" onChange={this.handleChange("username")}/>

                        {this.renderEmail()}

                        <input type="password" defaultValue="Password" onChange={this.handleChange("password")}/>
                        
                        <button>{this.props.formType}</button>
                        {this.renderDemoButton()}
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