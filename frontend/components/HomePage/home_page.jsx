import React from 'react'
import FeaturedContainer from "../../containers/featured_container";
import FeedContainer from "../../containers/feed_container";
import Sidebar from "./Sidebar/sidebar";
import WelcomeBanner from './welcome_banner';
import { AuthRoute } from '../../util/auth_util'

const HomePage = () => (
    <div className="wrapper">
        <FeaturedContainer />
        <AuthRoute path="/" component={WelcomeBanner} />
        <FeedContainer />
        <Sidebar />
    </div>
)

export default HomePage