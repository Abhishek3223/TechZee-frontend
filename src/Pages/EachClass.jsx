import React from 'react'
import './searcharea.css'
import { Link } from 'react-router-dom'
function EachClass({data}) {
  return (
    <div className='eachClassContainer'>
      <h5>Topic:{data.name}</h5>
      <p>Code:{data.classCode}</p>
      <Link to='/startclass'> <button className='btn bg-primary text-light '>JOIN</button></Link>
     
    </div>
  )
}

export default EachClass
