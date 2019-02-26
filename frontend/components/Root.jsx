import React from 'react'
import App from './app'
import Provider from 'react-redux'

const Root = () => (
    <Provider>
        <App/>
    </Provider>
)

export default Root