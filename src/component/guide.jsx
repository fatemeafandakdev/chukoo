import React from 'react'
import Data2 from './data2'
import Guideoption from './quideoption'
function Guide() {
  
  return (
    <div className='container my-5  '>
       <h1 className='my-5 title text-start' style={{fontSize:"80px",fontWeight:"bold"}}>Guiding you every step of the way</h1>
        <p style={{fontSize:"30px"}} className='my-3 description text-start' >We get it, the internet can be a confusing place. So we’ve put together a bunch of simple guides to help explain its more fiddly bits. You don’t even have to be in our flock to read them (we’re generous like that).</p>
        <div className='row justify-content-center align-items-center    '>
          {Data2.map((item)=>{
          return <Guideoption {...item}/>

          })}
          

          

          
    
        </div>
        </div>
  )

}

export default Guide
