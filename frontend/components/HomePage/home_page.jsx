import React from 'react'
import FeaturedContainer from "../../containers/featured_container";
import FeedContainer from "../../containers/feed_container";
import Sidebar from "./Sidebar/sidebar";
import WelcomeBanner from './welcome_banner';
import { AuthRoute } from '../../util/auth_util';

class HomePage extends React.Component {

    componentDidMount() {
        this.props.fetchStories()
    }

    render() {
        if (this.props.stories === {}) {
            return <div></div>
        } else {
            return (
                <div className="wrapper">
                    <FeaturedContainer />
                    <AuthRoute path="/" component={WelcomeBanner} />
                    <FeedContainer />
                    <Sidebar />
                </div>
            )
        }
    }
}


export default HomePage