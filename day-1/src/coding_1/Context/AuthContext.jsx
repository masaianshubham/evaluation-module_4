import React, { Component } from 'react'
import axios from 'axios'
export const AuthContext = React.createContext()

class AuthContextProvider extends Component {
    constructor(props){
        super(props)
        this.state= {
            isAuth: false,
            email: "",
            password: "", 
            token:"",
            data:[],
            error: ""
        }
    }

    handleChange= (e)=>{
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit= async(e)=>{
        e.preventDefault()
        const {email,password} = this.state
        await axios({
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
              email:email,
              password: password
            }
          }).then(res=> this.setState({
              token : res.data.token,
              isAuth: true
          }))
          .catch( (error)=> {
            this.setState({
                error: "Give Correct Credentials"
            })
          });
    }
    logout= ()=>{
        this.setState({
            isAuth: false,
            email: "",
            password: ""
        })
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>this.setState({
            data:res.data
        })).catch( (error)=> {
            console.log(error);
          });
    }
    render() {
        console.log(this.state)
        const {isAuth,email,password,token,data,error} = this.state
        const {handleChange,onSubmit,logout} = this
        return (
            <AuthContext.Provider value={{email,password,isAuth,token,data,error,logout, handleChange,onSubmit}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider