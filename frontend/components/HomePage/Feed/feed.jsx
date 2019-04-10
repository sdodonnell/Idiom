import React from 'react';
import FeedItem from './feed_item'

class Feed extends React.Component {
    
    constructor(props) {
        super(props);
        this.renderStoriesList = this.renderStoriesList.bind(this)
    }

    renderStoriesList() {

        const shuffle = array => {
            let currentIndex = array.length;
            let temporaryValue;
            let randomIndex;
    
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
    
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
    
        return array;
        };

        const storiesList = 
            Object.values(this.props.stories)
                  .map(story => 
                    <FeedItem 
                        key={story.id}
                        story={story}
                        authorId={story.authorId}
                        authorName={story.authorName}/>)
        return shuffle(storiesList)

    }

    render() {
        if (!this.props.stories) {
            return <div></div>
        } else {
            return (
                <div className="feed-wrapper">
                    {this.renderStoriesList()}
                </div>
            ) 
        }
    }
}
    

export default Feed