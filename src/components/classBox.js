import React from 'react'
import { Link } from "react-router-dom";
import './ClassBox.css'
const ClassBox = (props) => {
    return (
        <div className='classBox'
            onClick={() => {
                localStorage.setItem('StartClassID', 'props.data._id')
                
            }}
        >
            <div className="inner">
                <div className='title'>
                    <h1>{props.data.name}</h1>
                </div>
                <div >
                    <p>{props.data.TeacherName}</p>
                    <p> {props.data.ScheduledTime}</p>
                </div>
                <Link to='/startclass'>
                    <button className='btn bg-primary'>
                        Start class
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ClassBox