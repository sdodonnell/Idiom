import React from 'react'
import BookmarksIndexItem from './bookmarks_index_item';

class BookmarksIndex extends React.Component {
    
    constructor(props) {
        super(props)
        this.renderStories = this.renderStories.bind(this)
    }

    componentDidMount() {
        this.props.fetchBookmarkedStories()
    }

    // Return stories in reverse chronological order
    renderStories() {
        const sortedStories = Object.values(this.props.stories).sort( (b, a) => 
            new Date(a.publishDate) - new Date(b.publishDate))
        return sortedStories.map( story => {
            return <BookmarksIndexItem key={story.id} story={story}/>
        })
    }

    render() {
        if (!this.props.stories) {
            return <div></div>
        } else {
            return (
                <div className="stories-index-wrapper">
                    <div className="stories-index-heading">
                        <h1>Your Reading List</h1>
                    </div>
                    {this.renderStories()}
                </div>
            )
        }
    }

};

export default BookmarksIndex