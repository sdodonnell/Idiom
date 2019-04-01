import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SignupContainer from '../containers/signup_container';
import LoginContainer from '../containers/login_container';
import { AuthRoute, ProtectedRoute } from '../util/auth_util';
import AuthNavContainer from '../containers/auth_nav_container';
import SectionNavBar from '../components/HomePage/section_nav_bar';
import CreateStoryContainer from '../containers/create_story_form_container';
import EditStoryContainer from '../containers/edit_story_form_container';
import StoriesIndexContainer from '../containers/stories_index_container'
import StoryComponentContainer from '../containers/story_component_container';
import UserProfileContainer from '../containers/user_profile_container'
import HomePageContainer from '../containers/homepage_container';
import FollowersIndexContainer from '../containers/followers_index_container';
import BookmarksIndexContainer from '../containers/bookmarks_index_container'
import About from './HomePage/Sidebar/About/about';

const App = () => (
    <>
        <div className="nav-bar">
            <NavLink to="/">
                <h1 id="site-title">Idiom</h1>
            </NavLink>
            <AuthNavContainer />
            <Route exact path="/" component={SectionNavBar} />
        </div>
        <Switch>
            <Route exact path="/" component={HomePageContainer}/>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            <ProtectedRoute path="/users/:id/stories" component={StoriesIndexContainer}/>
            <ProtectedRoute path="/users/:id/following" component={FollowersIndexContainer}/>
            <ProtectedRoute path="/users/:id/bookmarks" component={BookmarksIndexContainer}/>
            <ProtectedRoute path="/stories/new" component={CreateStoryContainer}/>
            <ProtectedRoute path="/stories/:id/edit" component={EditStoryContainer}/>
            <Route path="/users/:id" component={UserProfileContainer}/>
            <Route path="/stories/:id" component={StoryComponentContainer}/>
            <Route path="/about" component={About} />
            <Redirect to="/"/>
        </Switch>
    </>
)

export default App;
