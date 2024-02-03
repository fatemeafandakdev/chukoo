import React ,{useState}from 'react'
import arrowb from "../assets/img/arrowb.png"
function Option({title,description,button,id}) {
    const [show,setShow]=useState(false)

const change=()=>{
    if(show===false){
    setShow(true)
    }else{
        setShow(false)
    }
}

  return (
    <div className='container p-2 my-3  ' key={id} style={{backgroundColor:"white",borderRadius:"15px"}}>
        <div className='container '>
        <div className='d-flex  justify-content-between my-2  '>
       <h2>{title}</h2>
      <img src={arrowb} width={50} onClick={change}/>
      </div>
      { show && 
        <div className='text-start py-3'>
      <p style={{fontSize:"30",transition:"all 1s"}}>{description}</p>
      <span  className="p-2  mt-5 mb-3 " style={{border:"1px solid #bfbaae",borderRadius:"15px",backgroundColor:"#fffe53"}}>{button}</span>
      </div>
      }
     
   
        </div>
     
    </div>
  )
}

export default Option
