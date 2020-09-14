import React, { Component } from 'react'


export default class List extends Component {
    render() {
        const {title,salary,company,location,remote,logo} = this.props.item
        return (
            <div style={{display: "flex", justifyContent: "space-between", padding: 20, border:"2px solid gray", margin:20, borderRadius:10}}>
                <img src={logo} alt="logo"/>
                <h3>{company}</h3>
                <h3>{title}</h3>
                <h3>{salary}</h3>
                <h3>{location}</h3>
                <div style={{position:"relative"}}>
                    
                    <div style={{width: 25, height: 25, borderRadius: "50%", margin:15, background: remote? "green": "red"}}><h3 style={{position: "absolute", top:-5,left:-70}}>Remote</h3></div>
                </div>
            </div>
        )
    }
}

