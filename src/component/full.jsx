import React ,{useState,useRef} from 'react'
import correct from "../assets/img/correct.png"
import arrow from "../assets/img/arrow.png"
import { Link } from 'react-router-dom'
import"./a.css"
import white from "../assets/img/white.jpg"
import pink from "../assets/img/pink.jpg"
function Full() {
  const ref=useRef(null)
  const [show,Setshow]=useState(false)
  const [shows,Setshows]=useState(false)
  
    const change=()=>{
      Setshow(true)
    }
 const rechange=()=>{
Setshow(false)
 }
 const changes=()=>{
  Setshows(true)
}
const rechanges=()=>{
Setshows(false)
}


  return (
    <div className='container-fluid my-5' >
      <div className='row justify-content-lg-around py-5  border-bottom  border-bottom-black  justify-content-center '  >
      <div className='col-12 col-lg-6 row justify-content-center full  py-5'  onMouseEnter={change} onMouseLeave={rechange} style={ show ? { background: `url(${pink})`,transition:"all 1s",transform:"scale(1.01)"} : {background: `url(${white})`}}  >
        <div className="py-4 row my-2 my-lg-0 bg-white " style={{width:"450px",border:"1px solid #d3dbe8",borderRadius:"20px"}}>
            <span className='  col-12 fs-5 w-auto ' style={{backgroundColor:"#f07aa9",borderRadius:"30px"}}>Full fibre connection</span>
            <h1 className='col-12 text-start'>Eggceptional</h1>
            <div className='col-12 justify-content-between  row my-4 '>
              <div className='col-12 row'>
              <div className='col-6  text-start '>
                    <h2>900 MB</h2>
                    <span>Avg download speed</span>
                </div>
                <div className='col-6 text-start'>
                <h2>115Mb</h2>
                    <span>Avg upload speed</span>
                </div>
              </div>
              <div className='col-12 row mt-5'>
              <div className='text-start col-12'><img src={correct} width={20} className='mr-2 '/><span>Incredibly reliable and secure</span></div>
               <div className='text-start col-12'><img src={correct} width={20} className='mr-2'/><span>Incredibly reliable and secure</span></div>
            </div>
              </div>
      
               <div className='d-flex  justify-content-between  align-items-center  mt-3 p-1 ' style={{borderRadius:"10px",backgroundColor:"#fffe53"}}>
                <span><span className="fs-4 fw-bold ">£54.99</span>/month</span>
                <Link to={"/pay"}><img src={arrow} width={40}/></Link> 

               </div>
        </div>
        </div>
       
        <div className='col-12 col-lg-6 row justify-content-center full  py-5 ' onMouseEnter={changes} onMouseLeave={rechanges} style={ shows ? { background: `url(${pink})`,transition:"all 1s",transform:"scale(1.01)"} : {background: `url(${white})`}}  >
        <div className="py-4 row my-2 my-lg-0 bg-white " style={{width:"450px",border:"1px solid #d3dbe8",borderRadius:"20px"}}>
            <span className='  col-12 fs-5 w-auto ' style={{backgroundColor:"#f07aa9",borderRadius:"30px"}}>Full fibre connection</span>
            <h1 className='col-12 text-start'>Eggceptional</h1>
            <div className='col-12 justify-content-between  row my-4 '>
              <div className='col-12 row'>
              <div className='col-6  text-start '>
                    <h2>900 MB</h2>
                    <span>Avg download speed</span>
                </div>
                <div className='col-6 text-start'>
                <h2>115Mb</h2>
                    <span>Avg upload speed</span>
                </div>
              </div>
              <div className='col-12 row mt-5'>
              <div className='text-start col-12'><img src={correct} width={20} className='mr-2 '/><span>Incredibly reliable and secure</span></div>
               <div className='text-start col-12'><img src={correct} width={20} className='mr-2'/><span>Incredibly reliable and secure</span></div>
            </div>
              </div>
      
               <div className='d-flex  justify-content-between  align-items-center  mt-3 p-1 ' style={{borderRadius:"10px",backgroundColor:"#fffe53"}}>
               <span><span className="fs-4 fw-bold ">£54.99</span>/month</span>
                <Link to={"/pay"}><img src={arrow} width={40}/></Link> 

               </div>
        </div>
        </div>
      </div>
      <div className='my-5 d-flex flex-column  align-content-start ' >
        <h1 className='my-5 title text-start' style={{fontSize:"80px",fontWeight:"bold"}}>Serving up full fibre (and full fibre)</h1>
        <p style={{fontSize:"30px"}} className='my-3 mb-2 description text-start'>We don’t use older, copper wire connections that come from those green cabinets on the street, because they’re so much slower and breakdown far too easily.

Instead, our broadband uses fibre optic cables that run directly into your home, allowing us to give you brilliantly fast speeds with amazing reliability.</p>
<p style={{fontSize:"30px"}} className='my-3 description text-start'>Instead, our broadband uses fibre optic cables that run directly into your home, allowing us to give you brilliantly fast speeds with amazing reliability.</p>
<h3 className='my-5 text-start' ><Link className='text-dark   p-3  my-5' style={{borderRadius:"20px",border:"1px solid #c1c3c7"}} to={"/more"}>Find out more about full fibre
</Link></h3>
      </div>
      
    </div>
  )
}

export default Full
