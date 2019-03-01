import Publish from "../components/publish";

const mdtp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mdtp)(Publish)