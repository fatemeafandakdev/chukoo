import React,{useState} from 'react'

function Guideoption({img,link,id}) {
  const [selected, setSelected] = useState(null);
  return (
      <div className='col-8 col-xl-5 mx-1   my-3' key={id}
      onMouseEnter= {()=> setSelected(id)}
      onMouseLeave={()=> setSelected(null)}>
      
      
    <div className='d-flex flex-column align-items-center  ' style={{overflow:"hiden",height:"300px"}}>
        <img className='w-100 text-center' src={img} 
       style={ selected===id? { height:"200px",borderRadius:"5px", transition:"all 1s",transform:"scale(1.03)"} : { height:"200px",borderRadius:"5px", transition:"all 1s",transform:"scale(1)"}}
         / >
        
        
        <span className='fs-3 p-1'>Guide</span>
        <button style={{borderRadius:"25px ",border:"1px solid #c1c3c7"}}>{link}</button>
</div>
    </div>
  )
}

export default Guideoption
