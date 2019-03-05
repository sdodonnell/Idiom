import React from 'react';
import { NavLink } from 'react-router-dom';

class CreateCommentComponent extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = {
        //     expanded: "expanded"
        // }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    // toggleCreateComment() {
    //     this.setState({
    //         expanded: this.state.expanded === "" ? "expanded" : ""
    //     })
    // }

    handleSubmit() {

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
                    ></textarea>
                </form>
            </div>
        )
    }
}

export default CreateCommentComponent