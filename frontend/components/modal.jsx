import { connect } from 'redux';
import React from 'react'


const Modal = ({modal, closeModal}) => {

    let component;
    switch(modal) {
        case 'publish':
            component = <PublishContainer />;
            break;
        default:
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e=>e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mstp = state => ({
    modal: state.ui.modal
})

const mdtp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mstp, mdtp)(Modal)