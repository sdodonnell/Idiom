import React from 'react'

class StorySidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        }

        this.handleScroll = this.handleScroll.bind(this)
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

    render() {
        if (this.state.scrolled === true) {
            return(
                <div className="story-sidebar animated fadeInUp">
                    <div className="sidebar-claps"></div>
                    <div className="sidebar-bookmark"><i className="far fa-bookmark"></i></div>
                    <div className="sidebar-twitter"><i class="fab fa-twitter"></i></div>
                    <div className="sidebar-twitter"><i class="fab fa-facebook"></i></div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default StorySidebar