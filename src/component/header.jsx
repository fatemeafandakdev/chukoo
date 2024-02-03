import React,{useEffect} from 'react'
import master from "../assets/img/master.WEBM"
import img from "../assets/img/header.png"
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {iosStar} from 'react-icons-kit/ionicons/iosStar'
import star from "../assets/img/star.png"
import star2 from "../assets/img/star2.png"
import Check from '../pages/check'
import { useRef } from "react"
function Header() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[]);
  return (
    <div  className='row   px-5  ' style={{backgroundColor:"#fffe53"}}>
       <div className='col-12 col-md-5'>
        
        <div className='row pt-5  justify-content-start'>
            <h1 className='col-12 mt-6 mb-2  fw-bolder  text-start '>Fast, fair, feel-good broadband</h1>
            <h2 className='my-5 text-start col-12'>Full fibre speeds and the best customer service you've ever had.</h2>
           <h2 className='col-12 text-start ' ><Link className='text-white bg-dark  p-3  my-5' style={{borderRadius:"20px"}} to={"/check"}>Check yours speeds</Link></h2>
           <div className='d-flex align-items-center '>
           <img src={star} className='my-4 ' style={{width:40}}/>
           <span className='fs-4 mx-1'>trustpilot</span>
           <img src={star2}/>
           <img src={star2}/>
           <img src={star2}/>
           <img src={star2}/>
           </div>
        </div>
       </div>
       <div className='col-12 col-md-7 d-none d-md-block'>
<video

width="500" height="600"
  src={master}
  ref={ vidRef }
  muted
  autoPlay
  loop 
/>
            </div>
     
    </div>
  )
}

export default Header
