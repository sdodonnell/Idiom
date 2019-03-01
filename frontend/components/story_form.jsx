import React from 'react'

class StoryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body,
            modalClassName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.togglePublishModal = this.togglePublishModal.bind(this)
    }

    handleChange(field) {
        return e =>
        this.setState({
            [field]: e.target.value,
            [field + "Preview"]: e.target.value.slice(0, 100)
        })
    }

    handleSubmit() {
        this.props.action({
            title: this.state.title,
            body: this.state.body
        })
    }

    togglePublishModal() {
        this.setState({
            modalClassName: this.state.modalClassName === "hidden" ? "" : "hidden"
        })
    }

    render() {
        return(
            <>
            <form onSubmit={this.props.handleSubmit} className="story-form">
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
            </form>
            <div 
                className={`story-modal ${this.state.modalClassName}`}
                onClick={this.togglePublishModal}
                >
            </div>
            <form className={`story-modal-form ${this.state.modalClassName}`}>
                <p>Story Preview</p> 
                <input 
                    value={this.state.titlePreview}
                    onChange={this.handleChange("titlePreview")}
                    type="text"
                    className="story-modal-title"/>
                <textarea 
                    value={this.state.bodyPreview}
                    onChange={this.handleChange("bodyPreview")}
                    type="text"
                    className="story-modal-body">{this.state.bodyPreview}</textarea>
                <p>Add or change tags...</p>
                <input type="text"/>
                <button>Publish Now</button>
            </form>
            </>
        )
    }

}

export default StoryForm