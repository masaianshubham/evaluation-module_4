import React, { Component } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default class Dashboard extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {({token,email,data,logout})=>{
                    return (
                        <div>
                            <div>
                                <h3>email: {email}</h3>
                                <h3>token: {token}</h3>
                                <button onClick={()=>logout()}>Logout</button>
                            </div>
                            {data.map(item=> {
                                return(
                                    <div key={item.id} style={{border: "1px solid gray"}}>
                                        <h2>{item.title}</h2>
                                        <p>{item.body}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }}
            </AuthContext.Consumer>
        )
    }
}
