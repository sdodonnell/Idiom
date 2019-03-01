import React from 'react'

class StoryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body,
            modalClassName: "hidden"
        }
        this.handleChange = this.handleChange.bind(this);
        this.togglePublishModal = this.togglePublishModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e =>
        this.setState({
            [field]: e.target.value,
            [field + "Preview"]: e.target.value.slice(0, 100)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action({
            title: this.state.title,
            body: this.state.body,
            user_id: this.props.user.id
        })
        this.props.history.push('/')
    }

    togglePublishModal() {
        this.setState({
            modalClassName: this.state.modalClassName === "hidden" ? "" : "hidden"
        })
    }

    render() {
        return(
            <>
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
        )
    }

}

export default StoryForm