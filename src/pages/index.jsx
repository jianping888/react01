import React from 'react'

import Header from '../components/header'
import Body from '../components/body'
import Bottom from '../components/bottom'

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Bottom />
            </div>
        )
    }
}

export default Index