import React from 'react'
import MainFeaturedStoryItem from './main_featured_story_item';
import FeaturedStoryItem from './featured_story_item';

class Featured extends React.Component {

    componentDidMount() {
        // this.props.fetchStories()
    }

    render() {
        if (!this.props.stories) {
            return <div></div>
        } else {
            return(
                <div className="home-page-section featured-wrapper">
                    <MainFeaturedStoryItem story={this.props.stories[0]}/>
                    <FeaturedStoryItem story={this.props.stories[1]}/>
                    <FeaturedStoryItem story={this.props.stories[2]}/>
                    <FeaturedStoryItem story={this.props.stories[3]}/>
                </div>
            )      
        }
    }
}

export default Featured