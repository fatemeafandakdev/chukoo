import React from 'react'
import { Link } from 'react-router-dom'
function Navresponsive() {
  return (
    <div className=' position-absolute  d-block d-lg-none  container-fluid  ' style={{left:"0",borderBottom:"1px solid #bfbdb4",backgroundColor:"white" }}>
      <div className='d-flex flex-column  align-content-start p-5  fs-3 text-start '>

     
<div className=''><Link to={"/signup"} className=' fw-bolder pt-1 pb-2 px-1 rounded-3 'style={{color:"white",backgroundColor:"black"}} >Signup</Link>  </div>
  
<div className=''><Link to={"/login"} className=' fw-bolder pt-1 pb-2 ' style={{color:"black"}}>Login</Link>  </div>

<div className=' '><Link to={"/support"} className='fw-bolder pt-1 pb-2  ' style={{color:"black"}}>Support</Link> </div>
    

    
    
<div className=' '><Link to={"/band"} className='fw-bolder pt-1 pb-2  ' style={{color:"black"}}>Band</Link> </div>
    

    
     
<div className=''><Link to={"/ourmission"} className=' fw-bolder pt-1 pb-2 ' style={{color:"black"}}>About</Link> </div> 
    

    
    

 
   

     </div>
    
    
     
     </div>

     
   
  )
}

export default Navresponsive
