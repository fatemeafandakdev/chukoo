import React from 'react'
import rocket from "../assets/img/r.png"
import cup from "../assets/img/c.png"
import hand from "../assets/img/h.png"
import "./a.css"


function Customer() {
  return (
    <div className='container-fluid my-5 row justify-content-center'   >
      <div className='d-flex justify-content-center   ' style={{flexWrap:"wrap"}} >
        <div className="hh mx-2 py-3" style={{width:"280px"}} >
            <div className='d-flex  flex-column p-3 my-2 my-lg-0 align-content-center ' style={{ borderRadius:'20px', border :"2px solid #d1d7e0",backgroundColor:"#f7f8fa"}}>
                <img src={rocket} width={120 } className='mb-3 m-auto' />
                <h2 className='mb-3 fw-bold '>Speeds up to 900Mb </h2>
                <p style={{height:"80px"}}>Full fibre speeds that easily handle all the streaming, gaming and WFHing you can throw at it.</p>
            </div>
        </div>
        <div className="hh mx-2 py-3" style={{width:"280px"}}>
        <div className='d-flex  flex-column p-3 my-2 my-lg-0  align-content-center' style={{ borderRadius:'20px', border :"2px solid #d1d7e0",backgroundColor:"#f7f8fa"}}>
        <img src={cup} width={120 } className='mb-3  m-auto ' />
                <h2 className='mb-3 fw-bold '>Voted #1 for  service </h2>
                <p style={{height:"80px"}}>FWe’ve topped MoneySavingExpert’s   service... service twice easily handle all goodod!</p>
        </div>
        </div>
        <div className="hh mx-2 py-3" style={{width:"280px"}}>
            <div className='d-flex  flex-column p-3 my-2 my-lg-0 align-content-center' style={{ borderRadius:'20px', border :"2px solid #d1d7e0",backgroundColor:"#f7f8fa"}}>
            <img src={hand} width={120 } className='mb-3 m-auto' />
                <h2 className='mb-3 fw-bold'>Fair prices, always </h2>
                <p style={{height:"80px"}}>No out-of-contract price hikes or hidden fees. Plus, our bills show you exactly what you're paying </p>
            </div>
            </div>
            <div className="hh mx-2 py-3" style={{width:"280px"}}>
            <div className='d-flex  flex-column p-3 my-2 my-lg-0 align-content-center' style={{ borderRadius:'20px', border :"2px solid #d1d7e0",backgroundColor:"#f7f8fa"}}>
            <img src={hand} width={120 } className='mb-3 m-auto' />
                <h2 className='mb-3 fw-bold'>Fair prices, always </h2>
                <p style={{height:"80px"}}>No out-of-contract price hikes or hidden fees. Plus, our bills show you exactly what you're paying </p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Customer
