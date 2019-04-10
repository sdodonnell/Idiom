import React from 'react';
import { NavLink } from 'react-router-dom';

class CreateCommentComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            body: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        return e => 
            this.setState({
                body: e.target.value
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newProps.createComment({
            body: this.state.body,
            userId: this.props.newProps.currentUser.id,
            storyId: this.props.newProps.storyId
        });
        this.setState({
            body: ""
        })
    }

    render() {
        return (
            <div className="create-comment">
                <div className="comment-author-bio">
                    <img src={this.props.newProps.currentUser.profPicUrl}/>
                    <NavLink 
                        to={`users/${this.props.newProps.currentUser.id}`}
                        className="author-name">
                        <p>{this.props.newProps.currentUser.fullname}</p>
                    </NavLink>
                    <p>{new Date().toDateString().slice(3)}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        placeholder="Write a repsonse..."
                        onChange={this.handleChange()}
                        value={this.state.body}
                        type="text"
                        ></textarea>
                    <button className="button">Publish</button>
                </form>
            </div>
        )
    }
}

export default CreateCommentComponent