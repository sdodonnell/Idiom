import React from 'react';
import { NavLink } from 'react-router-dom';

class CreateCommentComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // expanded: "expanded",
            body: "",
            userId: this.props.currentUser.id,
            storyId: this.props.storyId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    // toggleCreateComment() {
    //     this.setState({
    //         expanded: this.state.expanded === "" ? "expanded" : ""
    //     })
    // }

    handleChange() {
        return e => 
            this.setState({
                body: e.target.value
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
    }

    render() {
        return (
            <div className="create-comment">
                <div className="comment-author-bio">
                    <img/>
                    <NavLink 
                        to={`users/${this.props.currentUser.id}`}
                        className="author-name">
                        <p>{this.props.currentUser.fullname}</p>
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