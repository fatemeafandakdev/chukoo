import React from 'react'
import Data3 from './data3'
import Betteroption from './betteroption'
function Better() {
  return (
    <div className='container'>
      <h1 className='my-5 title ' style={{fontSize:"80px",fontWeight:"bold"}}>Making the internet better for... well, everyone</h1>
      <div className='row justify-content-center '>
     {Data3.map((itemss,index)=>{
       return <Betteroption key={index}  {...itemss}/>
     })}


      </div>
    </div>
  )
}

export default Better
