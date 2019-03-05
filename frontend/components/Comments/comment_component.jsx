import React from 'react';
import { NavLink } from 'react-router-dom'

const CommentComponent = ({comment, author}) => (
    <div className="comments-index-item">
        <div className="comment-author-bio">
            <img/>
            <NavLink 
                to={`users/${author.id}`}
                className="author-name">
                <p>{author.fullname}</p>
            </NavLink>
            <p>Date goes here</p>
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

export default CommentComponent