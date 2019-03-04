import React from 'react'

class CommentsIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this)
    }

    componentDidMount() {
        this.props.fetchComments(this.props.story.id)
    }

    renderComments() {
        return this.props.comments.map( comment => <Comment comment={comment}/>)
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