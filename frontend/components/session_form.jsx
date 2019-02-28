import React from 'react';
import { Link, NavLink } from 'react-router-dom'

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
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
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
            return (
                <>
                    <p>Email</p>
                    <input type="email" onChange={this.handleChange("email")}/>
                </>
            )
        }
    }

    renderButtons() {
        if (this.props.formType === 'Sign Up') {
            return (<button className="signup-button">{this.props.formType}</button>)
        } else {
            return (
                <div className="login-demo-buttons">
                    <button>{this.props.formType}</button>
                    <button onClick={this.handleDemoLogin}>Demo Login</button>
                </div>
            )
        }
    }

    renderText() {
        if (this.props.formType === 'Sign Up') {
            return (
                <div className="session-text">
                <h1>Join Idiom.</h1>
                <p>Create an account to receive great stories in your inbox, 
                   personalize your homepage, and follow authors and topics that you love.</p>
                </div>
            )
        } else {
            return (
                <div className="session-text">
                <h1>Welcome Back.</h1>
                <p>Sign in to get personalized story recommendations, 
                    follow authors and topics you love, and interact with stories.</p>
                </div>
            )
        }       
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = {
            username: "MichelDeMontaigne",
            password: "cannibalsrule"
        };
        this.props.action(demoUser)
    }

    render() {
        return(
            <>
                <Link to="/" className="session-modal">
                </Link>
                <div className="session-form-box">
                    <Link to="/" className="close-button"><i className="fas fa-times"></i></Link>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.renderText()}
                        
                        <p>Username</p>
                        <input type="text" onChange={this.handleChange("username")}/>

                        {this.renderEmail()}
                        <p>Password</p>
                        <input type="password" onChange={this.handleChange("password")}/>
                        
                        <div className="errors-and-buttons">
                            <ul style={{listStyle: "none"}}>
                                {this.renderErrors()}
                            </ul>
                            {this.renderButtons()}
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SessionForm