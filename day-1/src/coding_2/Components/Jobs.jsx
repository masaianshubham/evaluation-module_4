import React, { Component } from 'react'

export default class Jobs extends Component {
    render() {
        return (
            <div style={{border:"1px solid gray", margin:20}}>
                {this.props.children}
            </div>
        )
    }
}
