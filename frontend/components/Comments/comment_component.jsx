import React from 'react';
import { NavLink } from 'react-router-dom'

const CommentComponent = ({comment, author}) => {
    const commentDate = new Date(comment.updatedAt);
    const commentDateString = commentDate.toDateString();
    
    return (
        <div className="comments-index-item">
            <div className="comment-author-bio">
                <img/>
                <NavLink 
                    to={`users/${author.id}`}
                    className="author-name">
                    <p>{author.fullname}</p>
                </NavLink>
                <p>{commentDateString.slice(3)}</p>
            </div>
            <div className="comment-body">
                {comment.body}
            </div>
            <div className="comment-footer">
                <div className="claps"></div>
                <div className="bookmark"><i className="far fa-bookmark"></i></div>
            </div>
        </div>
    )
}


export default CommentComponent