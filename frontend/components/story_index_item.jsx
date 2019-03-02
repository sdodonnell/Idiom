import React from 'react';
import { Link } from 'react-router-dom';

class StoryIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dropDownClass: "hidden"
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleDropDown = this.toggleDropDown.bind(this)
    }  

    toggleDropDown() {
        this.setState({
            dropDownClass: this.state.dropDownClass === "hidden" ? "visible" : "hidden"
        }) 
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteStory(this.props.story.id);
        this.props.history.push('/stories')
    }

    render() {
        let story = this.props.story;
        const storyDate = new Date(story.updatedAt);
        const storyDateString = storyDate.toDateString();

        return(
        <div className="story-index-item">
            <Link to={`/stories/${story.id}`}>
                <h2 className="story-index-title">{story.titlePreview}</h2>
            </Link>
            <h3 className="story-index-body">{story.bodyPreview}</h3>
            <p>
                Published on {storyDateString} 
                <a onClick={this.toggleDropDown}><i className="fas fa-chevron-down"></i></a>
            </p>
            <div className={`story-index-dropdown-${this.state.dropDownClass}`}>
                <Link to={`/stories/${story.id}/edit`}>Edit story</Link>
                <a onClick={this.handleDelete}>Delete story</a>
            </div>
        </div>
        )
    }

}

export default StoryIndexItem