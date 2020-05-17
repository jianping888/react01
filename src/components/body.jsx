import React from 'react'

import '../static/less/body.less'

class Body extends React.Component {
    render() {
        const name="陈建平"
        const phone="110"
        return (
            <div>
                <p>{name}</p>
                <p>{phone}</p>
            </div>
        )
    }
}

export default Body