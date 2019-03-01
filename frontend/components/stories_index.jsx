import React from 'react';
import StoryIndexItem from './story_index_item';

class StoriesIndex extends React.Component {
    
    componentDidMount() {
        console.log(this.props.currentUser)
        this.props.fetchStories(this.props.currentUser.id)
    }
    
    render() {
        const stories = Object.values(this.props.stories).map(story => {
            return <StoryIndexItem story={story} />
        })

        return(
            <div className="stories-index-wrapper">
                <div className="stories-index-heading">
                </div>
                {stories}
            </div>
        )
    }
}

export default StoriesIndex