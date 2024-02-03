import React from 'react'
import { Link } from 'react-router-dom'
function Member() {
  return (
    <div className='container-fluid py-5  ' style={{backgroundColor:"#f299ec"}} >
        <div className='container'>
        <h1 className='title' style={{fontSize:"80px",fontWeight:"bold"}}>1 meeeeeeellion members (by 2025)</h1>
        <p style={{fontSize:"30px"}} className='my-3 description text-start'>Yes, we’re unashamedly ambitious. And no, we don’t want to be compared to Dr. Evil. But it’s our mission to bring big change to broadband, and we can only do this by aiming for big numbers. Just thought you should know.</p>
   <Link to={"/ourmission"}><button className='fs-3'>Read our Mission</button></Link> 
    
        </div>
      
    </div>
  )
}

export default Member
