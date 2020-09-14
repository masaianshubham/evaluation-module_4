import React, { Component } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Login from './Login'
import Dashboard from './Dashboard'

export default class Homepage extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {({isAuth})=>{
                    return (
                    <>
                        <Login />
                        {isAuth && <Dashboard />}
                    </>
                    )

                }}
                
            </AuthContext.Consumer>
        )
    }
}
