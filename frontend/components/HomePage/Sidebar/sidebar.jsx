import React from 'react'
import PopularStoriesContainer from '../../../containers/popular_stories_container';
import ReadingListContainer from '../../../containers/reading_list_container';
import { HiddenRoute } from '../../../util/auth_util';
import Footer from './footer';

const Sidebar = () => (
    <div className="home-page-section sidebars">
        <PopularStoriesContainer />
        <HiddenRoute path="/" render={ () => <ReadingListContainer />} />
        <Footer />
    </div>
)

export default Sidebar