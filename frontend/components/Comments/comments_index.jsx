import React from 'react';
import CommentComponent from './comment_component'

class CommentsIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this)
    }

    renderComments() {
        return Object.values(this.props.comments).map( comment => <CommentComponent comment={comment}/>)
    }

    render() {
        if (!this.props.comments) {
            return <div></div>
        } else {
            return (
                this.renderComments()
            )
        }
    }
}

export default CommentsIndex