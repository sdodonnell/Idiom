import React from 'react'
import PopularStoriesContainer from '../../../containers/popular_stories_container';
import ReadingList from './reading_list';

const Sidebar = () => (
    <div className="home-page-section sidebars">
        <PopularStoriesContainer />
        <ReadingList />
    </div>
)

export default Sidebar