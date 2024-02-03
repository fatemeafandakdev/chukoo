import React from 'react'
import pinkp from "../assets/img/egg.jpg"
function Betteroption({title,description,name}) {
  return (
    <div className='col-12 col-lg-4 '>
<div className='d-flex flex-column border-3 my-3 p-4 ' style={{background:`url(${pinkp})`,backgroundOrigin:"center",backgroundSize:"cover"}}>
<span className='fs-1' style={{height:"100px"}}>{title}</span>
<p className='fs-5'>{description}</p>
<span className='fs-3'>{name}</span>
</div>

      </div>
  )
}

export default Betteroption
