import React,{useEffect} from 'react'
import eggy from "../assets/img/blackegg.svg"
import "../component/a.css"
function Login() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='container d-flex justify-content-center  align-content-center my-5 m-auto  ' style={{background: "#fffe53",borderRadius:"20px",padding:"150px",fontFamily:"serif"}}>
     <div className='row bg-white  align-items-center justify-content-around  ' style={{borderRadius:"20px"}}>
     <div className='col-12 col-md-6  p-md-4'>
      <div className='d-flex flex-column   align-items-start  text-start'>
        <h1 className='my-3 title' style={{fontSize:"75px",fontWeight:"bold"}}>Log in</h1>
        <h3 className='my-3 fs-5 fs-md-4  des'>Not a Cuckoo customer? Sign up today</h3>
        <input type="text my-3" placeholder='Email' style={{borderRadius:"10px",border:"1px solid gray",outline:"none",paddingLeft:"5px"}} />
        <button className='my-3 botton ' style={{background:"blue",borderRadius:"10px",color:"white",}}>Email me a link to sign in</button>
      </div>
     </div>
     <div className='col-4 d-none d-md-flex'>
<img src={eggy} width={150} />
     </div>
     </div>
    </div>
  )
}

export default Login
