import React ,{useEffect}from 'react'
import magnify from "../assets/img/magnify1.avif"
import tag from "../assets/img/egg.png"
import "../component/a.css"
function More() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='container-fluid'>
       <div className='row justify-content-between   mt-0  py-3 fs-5 text-center      ' style={{backgroundColor:"white",borderBottom:"1px solid gray"}}>
    <div className='col-3 col-md-2  '>
        <div className='row  justify-content-center '>
            <span className='col-3 px-2 mx-2' ><img src={tag}  width={40}/></span>
            <span className='col-3 fw-bolder  '>CHUCKOO</span>
        </div>
         </div>
       
 </div>
      <div className='col-12 row justify-content-center my-5' >
      <img src={magnify} className='col-9'  style={{borderRadius:"10px"}}/>
      </div>
      <div className='container'>
        <h1 className='my-5 title text-start ' style={{fontSize:"80px",fontWeight:"bold"}}>What is Full Fibre?</h1>
        <p style={{fontSize:"25px"}} className='my-3 mb-2 description text-start fw-bolder ' >Full fibre broadband (also known as FTTP: Fibre to the Premises) is currently being installed across the whole of the UK. That’s great, but what does it mean? Discover what it actually is in the guide.</p>
        <p style={{fontSize:"25px"}} className='my-3 mb-2 description text-start  ' >Full fibre is a brand spanking-new broadband connection which gives you a dedicated full fibre connection direct into your home.

Essentially, full-fibre broadband changes the way that your broadband connection is taken into your home. It offers faster speeds and a more reliable connection and is a key part of the Governments plans to get more homes and businesses better connected.

If you don’t already have full-fibre broadband installed in your home, you’re probably either using an FTTC (Fibre to the Cabinet) or ASDL (Asymmetric Digital Subscribe Line) broadband connection. These connections get you online using copper cables, either the whole way from the exchange to your home, this is how an ASDL connection works. Or through a fibre-optic cable from the exchange to the cabinet closest to you (the green box in the street) and then a copper cable from there to your home, this is how FTTC broadband works.

With full-fibre broadband, a fibre-optic cable will be connecting you from your home directly to the exchange, no copper whatsoever. We’ve put together an eggy visual to help this make sense….</p>
      </div>
    
    </div>
  )
}

export default More
