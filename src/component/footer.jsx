import React from 'react'
import facebook from "../assets/img/f.png"
import twitter from "../assets/img/x.png"
import youtube from "../assets/img/y.png"
import b from "../assets/img/b.png"

function Footer() {
  return (
    < div className='container-fluid mt-5' style={{backgroundColor:"#fffe53"}}>
      <div className="row">
        <div className="col-12 col-md-5"> 
        <h1 className='col-12 p-5  fw-bolder  text-start '>Fast, fair, feel-good broadband</h1>
        </div>
        <div className="col-12 col-md-7">
<div className='d-flex p-5  justify-content-around gx-3' style={{listStyle:"none",textAlign:"start",lineHeight:"40px"}}>
<div >
    <li style={{color:"#807567"}}>Company</li>
    <li>About</li>
    <li>Careers</li>
    <li>Refer a Friend</li>
    <li>The Loyalty Tax</li>
</div>
<div>
    <li style={{color:"#807567"}}>Help & Contact</li>
    <li>Support</li>
    <li>Contact us</li>
    <li>Blog</li>
    <li>Press</li>
    <li>Hearing Support</li>
</div>
<div>
   <li style={{color:"#807567"}}>Useful links</li>
   <li>Terms & Conditions</li>
   <li>Privacy Policy</li>
   <li>Complaints Code</li>
   <li>Call Charges</li>
   <li>Prices & Charge list</li> 
</div>
</div>
        </div>
        <div className='col-8'>
            <div className="d-flex  p-5">
                <img src={facebook} width={60} className= 'p-3'/>
                <img src={youtube} width={60} className='p-3'/>
                 <img src={twitter} width={60} className='p-3'/>
                <img src={b} width={60} className='p-3'/> 


            </div>
            
            
             </div>
      </div>
    </div>
  )
}

export default Footer

