import React, { Component } from 'react'
import Forms from './Forms'
import List from './List'
import { JobContext } from '../Context/JobContext'
import Jobs from './Jobs'


export default class Display extends Component {
    render() {
        const {data,sort,filter,remoteCheck,activePage,perPage,handlePage} = this.context
        // Pagination
        const totalPage = Math.ceil(data.length/perPage) 
        const offset = (activePage-1)*perPage
        return (
            <>
                <div style={{border:"1px solid gray", padding:20}}>
                <Forms />
                </div>
                   <Jobs >
                    <div style={{textAlign: "center"}}>
                        {new Array(totalPage).fill(0).map((a,i)=><button style={{padding:5, margin:5}} onClick={()=>handlePage(i+1)} key={i}>{i+1}</button>)}
                    </div>
                   {data && data?.filter((item,i)=>{                   //for handling  Pagination
                      return  i>=offset && i<offset+perPage
                    })?.filter(item=>{                                 // for handling filter based on location
                        if(filter==="all"){
                            return true;
                        }
                        return filter === item.location
                    })?.filter(item=>{                                 // for filtering based on remote checked
                        if(remoteCheck===false){
                            return true;
                        }
                        return remoteCheck === item.remote
                    })?.sort((a,b)=>{                                  // sorting based on salary
                        if(sort==="none"){
                            return a.date-b.date
                        }
                        else if(sort==="desc"){
                            return a.salary - b.salary;
                        }
                        else{
                            return b.salary - a.salary;
                        }
                    }).reverse().map((item,i) => <List key={i} item={item}/>)}
                   </Jobs>
            </>
        )
    }
}
Display.contextType = JobContext
