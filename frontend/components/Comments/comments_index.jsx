import React from 'react';
import CommentComponent from './comment_component'
import CreateCommentComponent from './create_comment_component';

class CommentsIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderComments() {
        const commentAuthor = comment => this.props.users.find( user => user.id === comment.userId)
        return Object.values(this.props.comments).reverse().map( comment => 
            <CommentComponent 
                key={comment.id} 
                comment={comment}
                author={commentAuthor(comment)}
                />
            )
    }


    render() {
        if (!this.props.users) {
            return <div></div>
        } else {
            return (
                <div className="comments-index-wrapper">
                    <CreateCommentComponent 
                        currentUser={this.props.currentUser}
                        createComment={this.props.createComment}
                        storyId={this.props.story.id}
                        />
                    {this.renderComments()}
                </div>
            )
        }
    }
}

export default CommentsIndex