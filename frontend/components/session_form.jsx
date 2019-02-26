import React from 'react'

class SessionForm extends React.Component {

    constructor(props) {
        
    }

    render() {
        return(
            <div>
                <form>
                    <input />
                    <input />
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm