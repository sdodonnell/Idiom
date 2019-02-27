import React from 'react'
import Featured from "./featured";
import Feed from "./feed";
import Sidebar from "./sidebar";

const HomePage = () => (
    <div className="wrapper">
        <Featured />
        <Feed />
        <Sidebar />
    </div>
)

export default HomePage