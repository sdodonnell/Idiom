import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SignupContainer from '../containers/signup_container';
import LoginContainer from '../containers/login_container';
import { AuthRoute, ProtectedRoute } from '../util/auth_util';
import AuthNavContainer from '../containers/auth_nav_container';
import HomePage from './home_page'
import CreateStoryContainer from '../containers/create_story_form_container';
import EditStoryContainer from '../containers/edit_story_form_container';
import StoriesIndexContainer from '../containers/stories_index_container'

const App = () => (
    <>
        <div className="nav-bar">
            <NavLink to="/">
                <h1 id="site-title">Idiom</h1>
            </NavLink>
            <AuthNavContainer />
        </div>
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            <Route exact path="/" component={HomePage}/>
            <ProtectedRoute path="/users/:id/stories" component={StoriesIndexContainer}/>
            <ProtectedRoute path="/stories/new" component={CreateStoryContainer}/>
            <ProtectedRoute path="/stories/edit" component={EditStoryContainer}/>
            {/* <Route path="/stories/:id" component={StoryComponent}/> */}
            <Redirect to="/"/>
        </Switch>
    </>
)

export default App