import React, { Component } from 'react'
export const JobContext = React.createContext()

class JobContextProvider extends Component {
    
    constructor(props){
        super(props)
        this.state= {
            title: "",
            salary: "",
            company: "",
            location: "",
            remote: false,
            logo:"",
            sort:"none",
            filter: "all",
            remoteCheck: false,
            data:[],
            activePage: 1,
            perPage:4
        }
    }
    
    //handling input change
    onChange = (e)=>{
        const {name,value,type,checked} = e.target
        let val = type==="checkbox"? checked: value
        this.setState({
            [name] : val
        })
    }

    // handling form submit
    onSubmit= (e) => {
        e.preventDefault()
        const {data,perPage, ...FormState} = this.state
        let newData = {
            ...FormState,
            date: Date.now()
        }
        this.setState({
            data: [newData,...data],
        })

    }
    //Pagination
    handlePage=(page)=>{
        
        this.setState({
            activePage: page
        })
    }
    render() {
        console.log(this.state)
        const {title,salary,company,location,remote,logo,data,date,activePage,sort,filter,remoteCheck,perPage} = this.state
        const {onChange,onSubmit,handlePage} = this
        return (
            <JobContext.Provider value={{title,salary,company,location,remote,activePage,logo,data,date,perPage,sort,filter,remoteCheck,onChange,onSubmit,handlePage}}>
                {this.props.children}
            </JobContext.Provider>
        )
    }
}

export default JobContextProvider