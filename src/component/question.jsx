import React from 'react'
import Data from './data'
import Option from './option'
function Question() {
  return (
    <div className='container-fluid py-5 my-5 ' style={{backgroundColor:"#f2bdf1"}}>
       <h1 className='my-5 title text-start' style={{fontSize:"80px",fontWeight:"bold"}}>Guiding you every step of the way</h1>
       <p style={{fontSize:"30px"}} className='my-3 description text-start'>We get it, the internet can be a confusing place. So we’ve put together a bunch of simple guides to help explain its more fiddly bits. You don’t even have to be in our flock to read them (we’re generous like that).</p>

       {Data.map((items)=>{
       return <Option {...items}/>
       })}
    </div>
  )
}

export default Question
