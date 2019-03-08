import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.story.title,
            body: this.props.story.body,
            modalClassName: "hidden"
        }
        this.handleChange = this.handleChange.bind(this);
        this.togglePublishModal = this.togglePublishModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.formType === 'edit') {
            this.props.fetchStory(this.props.storyId)
        }
    }

    handleChange(field) {
        return e =>
        this.setState({
            [field]: e.target.value,
            [field + "Preview"]: e.target.value.slice(0, 200)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const date = new Date()
        this.props.action({
            title: this.state.title,
            body: this.state.body,
            userId: this.props.user.id,
            titlePreview: this.state.titlePreview,
            bodyPreview: this.state.bodyPreview,
            id: this.props.story.id,
            publishDate: date.toISOString().slice(0, 10)
        })
        this.props.history.push('/')
    }

    togglePublishModal(e) {
        e.preventDefault();
        this.setState({
            modalClassName: this.state.modalClassName === "hidden" ? "" : "hidden"
        })
    }

    render() {
        if (!this.props.story) {
            return <div></div>
        } else {
        return(
            <>
            <a onClick={this.togglePublishModal} className={`close-button ${this.state.modalClassName}`}><i className="fas fa-times"></i></a>
            <form onSubmit={this.togglePublishModal} className="story-form">
                <input 
                    placeholder="Title"
                    value={this.state.title} 
                    onChange={this.handleChange("title")}
                    type="text"
                    className="story-title-input"/>
                <textarea
                    placeholder="Tell your story..."
                    value={this.state.body}
                    onChange={this.handleChange("body")}
                    type="text"
                    className="story-body-input"></textarea>
                <button className="publish-button">Ready to publish?</button>
            </form>
            <div onClick={this.togglePublishModal} className={`story-modal ${this.state.modalClassName}`}></div>
            <form onSubmit={this.handleSubmit} className={`story-modal-form ${this.state.modalClassName}`}>
                <p id="story-modal-text-1">Story Preview</p> 
                <input 
                    value={this.state.titlePreview}
                    onChange={this.handleChange("titlePreview")}
                    type="text"
                    id="story-modal-title"/>
                <textarea 
                    value={this.state.bodyPreview}
                    onChange={this.handleChange("bodyPreview")}
                    type="text"
                    id="story-modal-body">
                    {this.state.bodyPreview}
                </textarea>
                <p id="story-modal-text-2">Add or change tags...</p>
                <input 
                    value={this.state.tags}
                    onChange={this.handleChange("tags")}
                    type="text"
                    id="story-modal-tags"/>
                <button id="story-modal-button">Publish Now</button>
            </form>
            </>
        )}
    }

}

export default withRouter(StoryForm)