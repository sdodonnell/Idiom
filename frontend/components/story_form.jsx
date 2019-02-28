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

    render() {
        return(
            <div className="story-master">
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
            <form className={`story-modal ${this.state.modalClassName}`}>
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
            </form>
            </div>
        )
    }

}

export default StoryForm