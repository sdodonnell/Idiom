import React from 'react'
import PopularStoriesItem from './popular_stories_item';

const PopularStories = ({stories}) => {
    if (stories.length === 0) {
        return <div></div>
    } else {
        return (
            <div className="sidebar-1">
                <h3>Popular on Idiom</h3>
                <PopularStoriesItem rank="1" story={stories[0]}/>
                <PopularStoriesItem rank="2" story={stories[1]}/>
                <PopularStoriesItem rank="3" story={stories[2]}/>
                <PopularStoriesItem rank="4" story={stories[3]}/>
            </div>
        )}
}

export default PopularStories