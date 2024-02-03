import React,{useEffect} from 'react'
import tag from "../assets/img/egg.png"
function Check() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    < div className='bg-white'> 
    <div className='row justify-content-between   mt-0  py-3 fs-5 text-center      ' style={{backgroundColor:"white",borderBottom:"1px solid gray"}}>
    <div className='col-3 col-md-2  '>
        <div className='row  justify-content-center '>
            <span className='col-3 px-2 mx-2' ><img src={tag}  width={40}/></span>
            <span className='col-3 fw-bolder  '>CHUCKOO</span>
        </div>
         </div>
       
 </div>
 <div className='container my-4'>
  <h2>Choose your home</h2>
 <div className='d-flex flex-column  align-content-center  '>
<div className=' p-4  rounded-3 w-75  m-auto text-start my-3 'style={{border:"1px solid #dedad1 ",borderRadius:"10px",boxShadow:"0 1px 1px #dedad1"}} >Enter your password</div>
<div className=' p-4 pb-5  rounded-3 w-75  m-auto text-start  my-3' style={{border:"1px solid #dedad1 ",borderRadius:"10px",boxShadow:"0 1px 1px #dedad1"}}>Start typing your postcode...</div>
<h2 className='my-5'>What type of property do you live in?</h2>
<div className='row justify-content-between  w-75 m-auto '>
<div className="col-3 py-4" style={{border:"1px solid #dedad1 ",borderRadius:"10px"}}>I own
the property</div>
<div className="col-3 py-4" style={{border:"1px solid #dedad1 ",borderRadius:"10px"}}>
I'm renting for
a year or less
</div>
<div className="col-3 py-4" style={{border:"1px solid #dedad1 ",borderRadius:"10px"}}>
I'm renting for
more than a year
</div>
</div>
 </div>
 </div>
 </div>
  )
}

export default Check
