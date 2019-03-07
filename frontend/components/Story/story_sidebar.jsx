import React from 'react'

class StorySidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.addLike = this.addLike.bind(this)
        this.addBookmark = this.addBookmark.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if(window.pageYOffset > 500 && this.state.scrolled === false) {
            this.setState({
                scrolled: true,
            });
        } else if (window.pageYOffset < 450) {
            this.setState({
                scrolled: false,
            });
        }
    }

    renderLikes() {
        if (this.props.newProps.likes.length > 0) {
            return this.props.newProps.likes.length
        } else {
            return null
        }
    }

    addLike() {
        return this.props.newProps.addLike({userId: this.props.userId, storyId: this.storyId})
    }

    addBookmark() {
        return this.props.newProps.addBookmark({userId: this.props.userId, storyId: this.storyId})
    }

    render() {
        if (this.state.scrolled === true) {
            return(
                <div className="story-sidebar animated fadeInUp">
                    <div className="sidebar-claps" onClick={this.addLike}>
                        <p>{this.renderLikes()}</p>
                    </div>
                    <div className="sidebar-bookmark" onClick={this.addBookmark}><i className="far fa-bookmark"></i></div>
                    <div className="sidebar-twitter"><i className="fab fa-twitter"></i></div>
                    <div className="sidebar-twitter"><i className="fab fa-facebook"></i></div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default StorySidebar