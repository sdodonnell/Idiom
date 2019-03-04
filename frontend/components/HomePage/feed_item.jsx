import React from 'react'

class FeedItem extends React.Component {
    componentDidMount() {
        // this.props.fetchUser(this.props.story.userId)
    }

    render() {
        if (!this.props.story) {
            return <div></div>
        } else {
            return (
                <div>It's working!</div>
            )
        }
    }
}

export default FeedItem