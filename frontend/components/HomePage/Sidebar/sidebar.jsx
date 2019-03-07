import React from 'react'
import PopularStoriesContainer from '../../../containers/popular_stories_container';
import ReadingList from './reading_list';
import { HiddenRoute } from '../../../util/auth_util';

const Sidebar = () => (
    <div className="home-page-section sidebars">
        <PopularStoriesContainer />
        <HiddenRoute path="/" render={ () => <ReadingList />} />
    </div>
)

export default Sidebar