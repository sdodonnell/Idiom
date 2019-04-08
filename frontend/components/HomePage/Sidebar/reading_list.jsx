import React from 'react';
import ReadingListItem from './reading_list_item';

class ReadingList extends React.Component {
    
    componentDidMount() {
        this.props.fetchBookmarks(this.props.userId)
    }

    render() {
        if (this.props.stories.length === 0) {
            return <div></div>
        } else {
            const stories = this.props.stories
            return (
                <div className="sidebar-2">
                    <ReadingListItem story={stories[0]}/>
                    <ReadingListItem story={stories[1]}/>
                    <ReadingListItem story={stories[2]}/>
                    <ReadingListItem story={stories[3]}/>
                </div>
            )
        }
    }
    
} 

export default ReadingList