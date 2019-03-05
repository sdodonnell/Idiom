import React from 'react';
import CommentComponent from './comment_component'
import CreateCommentComponent from './create_comment_component';
import { HiddenRoute } from '../../util/auth_util';


class CommentsIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }

        this.renderComments = this.renderComments.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers(this.props.story.id).then( () => this.setState({
            loading: false
        }))
    }

    renderComments() {
        const commentAuthor = comment => this.props.users[comment.userId]
        return Object.values(this.props.comments).reverse().map( comment => 
            <CommentComponent 
                key={comment.id} 
                comment={comment}
                author={commentAuthor(comment)}
                />
            )
    }

    render() {
        if (this.state.loading) {
            return <div></div>
        } else {
            return (
                <div className="comments-index-wrapper">
                    <HiddenRoute
                        render={ (props) => 
                            <CreateCommentComponent 
                                {...props}
                                currentUser={this.props.currentUser}
                                createComment={this.props.createComment}
                                storyId={this.props.story.id}/>
                        }
                    />
                    {this.renderComments()}
                </div>
            )
        }
    }
}

export default CommentsIndex 
