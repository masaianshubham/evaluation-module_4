import React from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Login(){
        return (
            <AuthContext.Consumer>
                {({email,password,isAuth, handleChange,onSubmit,error})=>{

                        return (
                        !isAuth && <div>
                            <form onSubmit={(e)=>onSubmit(e)}>
                                <div>
                                    <label>Email:
                                        <input name="email" value={email} onChange={(e)=>handleChange(e)} type="text"/>
                                    </label>
                                </div>
                                <div>
                                    <label>Password:
                                        <input name="password" value={password} onChange={(e)=>handleChange(e)} type="password"/>
                                    </label>
                                </div>
                                <input type="submit" value="Submit"/>
                            </form>
                            <div style={{color: "red"}}>{error}</div>
                        </div>
                )}}
            </AuthContext.Consumer>
        )
}
