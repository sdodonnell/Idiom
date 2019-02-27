import React from 'react'
import Featured from "./featured";
import Feed from "./feed";
import Sidebar from "./sidebar";
import WelcomeBanner from './welcome_banner';

const HomePage = () => (
    <div className="wrapper">
        <Featured />
        <WelcomeBanner />
        <Feed />
        <Sidebar />
    </div>
)

export default HomePage