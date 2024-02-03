import React ,{useRef,useEffect}from 'react'
import master from "../src/assets/img/master.WEBM"
import edds from "../src/assets/img/good.avif"
import "./component/a.css"
function Ourmission() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const vidRef=useRef();
    useEffect(() => { vidRef.current.play(); },[]);
  return (
    <div className='container-fluid'> 
      <div className='container my-5  ' style={{backgroundColor:"#fffe53",fontFamily:"serif",borderRadius:"20px"}} >
        <div className='row'>
            <div className='col-12 col-lg-6 px-5'>
            <h1 className='my-5 title text-start  ' style={{fontSize:"80px",fontWeight:"bolder"}}>Broadband can be way, way, way better</h1>
        <p style={{fontSize:"25px"}} className='my-3 mb-2 description text-start  ' >From top to bottom, front to back, it really can be something to feel good about. Call us Cuckoo, but that’s what we believe.</p>
            </div>
            <div className='col-12 col-md-6  d-none d-lg-block'>
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
       
      </div>
      <div className='container ' style={{fontFamily:'serif',borderRadius:'20px'}}>
      <div className='row justify-content-between '>
        <div className='col-12 col-lg-6 px-3'  >
        <h1 className='my-5 title text-start  ' style={{fontSize:"80px",fontWeight:"bolder"}}>Simpler, faster, fairer</h1>
        <p style={{fontSize:"25px"}} className='my-3 mb-2 description text-start  ' >The broadband industry doesn't have the best of reputations, thanks to its history of terrible service, complex deals and sky-rocketing prices.

And, well, that's just not good enough.

So we're doing it differently, by making it simpler, fairer and faster. And because our customer service is head and shoulders above the rest, it makes our customers feel good too.

That’s why we call it fast, fair, feel-good broadband.

</p>
        </div>
        <div className='col-12 col-lg-6'>
<img src={edds} className='w-100'/>
        </div>
      
        </div>
      </div>
     
    </div>
  )
}

export default Ourmission

