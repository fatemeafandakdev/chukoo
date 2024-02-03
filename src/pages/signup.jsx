import React,{useEffect} from 'react'
import eggy from "../assets/img/blackegg.svg"
import "../component/a.css"
import sign from "../assets/img/signup.jpg"
function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='container d-flex justify-content-center my-5 align-content-center my-5   ' style={{background: "",fontFamily:"serif"}}>
     <div className='row  align-items-center justify-content-around  ' style={{border:"1px solid #bfbcae"}}>
     <div className='col-12 col-md-6  '>
      <div className='d-flex flex-column   align-items-start  text-start'>
        <h1 className='my-3 title' style={{fontSize:"75px",fontWeight:"bold"}}>Sign up</h1>
        <label htmlFor="">Firstname:</label>
        <input type="text my-3" placeholder='Email' style={{borderRadius:"10px",border:"1px solid gray",outline:"none",paddingLeft:"5px"}} />
        <label htmlFor="">Lastname:</label>
        <input type="text my-3" placeholder='Email' style={{borderRadius:"10px",border:"1px solid gray",outline:"none",paddingLeft:"5px"}} />
        <label htmlFor="">Password:</label>
        <input type="text my-3" placeholder='Email' style={{borderRadius:"10px",border:"1px solid gray",outline:"none",paddingLeft:"5px"}} />
        <label htmlFor="">Reapeat pass:</label>
        <input type="text my-3" placeholder='Email' style={{borderRadius:"10px",border:"1px solid gray",outline:"none",paddingLeft:"5px"}} />
        <button className='my-3 botton ' style={{background:"blue",borderRadius:"10px",color:"white",}}>Sign up</button>
      </div>
     </div>
     <div className='col-6 d-none d-md-flex' style={{height:"400px"}}>
<img src={sign} className='w-100'style={{height:"400px"}}  />
     </div>
     </div>
    </div>
  )
}

export default Signup