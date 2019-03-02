import React from 'react'
import Featured from "./featured";
import Feed from "./feed";
import Sidebar from "./sidebar";
import WelcomeBanner from './welcome_banner';
import { AuthRoute } from '../../util/auth_util'

const HomePage = () => (
    <div className="wrapper">
        <Featured />
        <AuthRoute path="/" component={WelcomeBanner} />
        <Feed />
        <Sidebar />
    </div>
)

export default HomePage