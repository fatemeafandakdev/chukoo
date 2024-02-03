import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import list from "../assets/img/list.png"
import close from  "../assets/img/close.png"
import { Icon } from 'react-icons-kit'
import {globe} from 'react-icons-kit/feather/globe'
import tag from "../assets/img/egg.png"
import {chevronDown} from 'react-icons-kit/feather/chevronDown'
import Navresponsive from './navresponsive'

function Navbar() {
const [show,setshow]=useState(false)



  return (
    <div>
    <div className='row justify-content-between   mt-0  py-3 fs-5 text-center      ' style={{backgroundColor:"#fffe53",  borderBottom:"1px solid #b3ada4"}}>
        <div className='col-3 col-md-2  '>
            <div className='row  justify-content-center '>
                <span className='col-3 px-2 mx-2' ><img src={tag}  width={40}/></span>
                <span className='col-3 fw-bolder  '>CHUCKOO</span>
            </div>
             </div>
             <div className='col-2  d-block d-lg-none '>
              <img src={show ?close:list} width={40} className=' ' onClick={()=>setshow(!show)}/>
             </div>
        <div className='col-7 row justify-content-center  align-content-center  fs-5 d-none d-lg-flex ' style={{fontFamily:"monospace"}} >
     
     <div  className='col-2  '>
<span className=' '><Link to={"/support"} className='fw-bolder pt-1 pb-2  ' style={{color:"black"}}>Support</Link> </span>
    

     </div>
     <div  className='col-2  '>
<span className=' '><Link to={"/band"} className='fw-bolder pt-1 pb-2  ' style={{color:"black"}}>Band</Link> </span>
    

     </div>
     <div  className='col-2'>
<span className=''><Link to={"/ourmission"} className=' fw-bolder pt-1 pb-2 ' style={{color:"black"}}>About</Link> </span> 
    

     </div>
     <div  className='col-2'>

<span className=''><Link to={"/login"} className=' fw-bolder pt-1 pb-2 ' style={{color:"black"}}>Login</Link>  </span> 
   

     </div>
     <div  className='col-2 justify-content-center '>
<span className=''><Link to={"/signup"} className=' fw-bolder pt-1 pb-2 px-1 rounded-3 'style={{color:"white",backgroundColor:"black"}} >Signup</Link>  </span>
  

     </div>
    
     
     </div>
     </div>
     {show && <Navresponsive/>}
     </div>
  )
}

export default Navbar

