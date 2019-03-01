import React from 'react';
import StoryIndexItem from './story_index_item';
import { Link } from 'react-router-dom'

class StoriesIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchStories(this.props.currentUser.id)
    }
    
    render() {
        const stories = Object.values(this.props.stories).map(story => {
            return <StoryIndexItem story={story} key={story.id}/>
        })

        return(
            <div className="stories-index-wrapper">
                <div className="stories-index-heading">
                    <h1>Your Stories</h1>
                    <div className="stories-index-buttons">
                        <button className="button">Import a Story</button>
                        <Link to="/stories/new"><button className="button">Write a Story</button></Link>
                    </div>
                </div>
                {stories}
            </div>
        )
    }
}

export default StoriesIndex