import React, { Component } from 'react'
import { JobContext } from '../Context/JobContext'
import styles from './Forms.module.css'

export default class Forms extends Component {
    render() {
        const {title,salary,company,location,remote,logo,sort,filter,remoteCheck,onChange,onSubmit} = this.context
        return (
            <div className={styles.main}>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <h4>ADD A NEW JOB</h4>
                    <div >
                        <label> Title : {" "}
                            <input name="title" value={title} onChange={(e)=>onChange(e)} type="text" placeholder="Enter Job Title" required />
                        </label>
                    </div>
                    <div>
                        <label> Salary: {" "}
                            <input name="salary" value={salary} onChange={(e)=>onChange(e)} type="text" placeholder="Enter Salary" required/>
                        </label>
                    </div>
                    <div>
                        <label> Company Name: {" "}
                            <input name="company" value={company} onChange={(e)=>onChange(e)}  type="text" placeholder="Enter Company Name" required/>
                        </label>
                    </div>
                    <div>
                        <label> location: {" "}
                            <select name="location" value={location} onChange={(e)=>onChange(e)} required>
                                <option value="" disabled>Select Location</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label> Remote: {" "}
                            <input type="checkbox" name="remote" value={remote} onChange={(e)=>onChange(e)}/>
                        </label>
                    </div>
                    <div>
                        <label> Company Logo: {" "}
                            <input type="url" placeholder="Enter image url" name="logo" value={logo} onChange={(e)=>onChange(e)} />
                        </label>
                    </div>
                    <input type="submit" value="Post"/>
                </form>

                {/* for sort & filter part */}
                <div className={styles.filter}>
                    <div>
                        <label>Sort: {" "}
                            <select name="sort" value={sort} onChange={(e)=>onChange(e)}>
                                <option value="none">none</option>
                                <option value="asc">ascending</option>
                                <option value="desc">descending</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label> Filter: {" "}
                            <select name="filter" value={filter} onChange={(e)=>onChange(e)}>
                                <option value="all">All</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Show Remote Only 
                            <input name="remoteCheck" value={remoteCheck} onChange={(e)=>onChange(e)} type="checkbox"/>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

Forms.contextType = JobContext