import React from 'react'
import Featured from "./featured";
import FeedContainer from "../../containers/feed_container";
import Sidebar from "./sidebar";
import WelcomeBanner from './welcome_banner';
import { AuthRoute } from '../../util/auth_util'

const HomePage = () => (
    <div className="wrapper">
        <Featured />
        <AuthRoute path="/" component={WelcomeBanner} />
        <FeedContainer />
        <Sidebar />
    </div>
)

export default HomePage