import React from 'react'
import FollowersIndexItem from './followers_index_item';

class FollowersIndex extends React.Component {
    
    constructor(props) {
        super(props)

        this.renderStories = this.renderStories.bind(this)
    }

    componentDidMount() {
        this.props.fetchFollowedUserStories()
    }

    // Return stories in reverse chronological order
    renderStories() {
        const sortedStories = Object.values(this.props.stories).sort( (b, a) => 
            new Date(a.publishDate) - new Date(b.publishDate))
        return sortedStories.map( story => {
            return <FollowersIndexItem story={story}/>
        })
    }

    render() {
        if (!this.props.stories) {
            return <div></div>
        } else {
            return (
                <div className="stories-index-wrapper">
                    <div className="stories-index-heading">
                        <h1>Stories from people you follow</h1>
                    </div>
                    {this.renderStories()}
                </div>
            )
        }
    }

}


export default FollowersIndex