import React ,{useState,useEffect,useRef} from 'react'
import img1 from "../assets/img/Cuckoo.svg"
import "./a.css"
function Score() {



const [precent1,setPrecent1]=useState(0)
const [precent2,setPrecent2]=useState(0)
const [precent3,setPrecent3]=useState(0)
const [precent4,setPrecent4]=useState(0)
const [display,setDisplay]=useState("none")

const ref=useRef(null)


//        const scroll=ref.current
//   let n=scroll.offsetTop
//  let windowscroll=window.scrollY


 const id =useRef(null);
 const clear=()=>{
 window.clearTimeout(id.current)
}
 useEffect(()=>{
window.onscroll=()=>{
  if(window.scrollY>ref.current.offsetTop){
    
    setPrecent1("75")
    setPrecent2("55")
    setPrecent3("30")
    setPrecent4("15")
    setTimeout(() => {
      setDisplay("block")
    }, 800);
    
  }
}
  
  
 },[])

 useEffect(()=>{
   if(precent1===75){
    console.log("dfhdfhfd")
     clear()
   }

 },[precent1])

//  const show=()=>{
 

//   if(windowscroll>n){

//    if(precent1<75){
//     interval = setTimeout(() => {
  
//       setPrecent1(precent1=> precent1+ 1);
    
//     }, 10);
//    }

//   return () => {
//     clearInterval(interval);
//   };

    
  // }
//  }

 
 






  return ( 
    <div className=' container  my-5  ' ref={ref} id="scorebox">
      <span className='title' style={{fontSize:"80px",fontWeight:"bold",}}>Superstar customer service</span>
      <p  className='my-5 description text-start ' style={{fontSize:"40px",lineHeight:'50px'}}>We try and sort any issues before you’re even aware of them. And if you ever need us, get in touch in whatever way works best for you.</p>
      <div className="score m-auto container  d-flex flex-column align-items-center ">
       <div className='mb-4' style={{width:"90%",height:"60px", borderRadius:"5px",backgroundColor:'#f0f5e1',border:"2px solid #c5c7c1"}}>
        <div  style={{width:`${precent1}%`,height:'99%',borderRadius:"5px",backgroundColor:'yellow',position:"relative",transition:"all 1.5s"}}>
 <img src={img1} className='position-absolute  img' style={{top:"20%",right:"5%",display:display}}/>
        </div>
       </div>
       <div className='mb-4' style={{width:"90%",height:"60px", borderRadius:"5px",backgroundColor:'#f0f5e1',border:"2px solid #c5c7c1"}}>
       <div  style={{width:`${precent2}%`,height:'100%',borderRadius:"5px",backgroundColor:'#b8b6a5',position:"relative",transition:"all 1.5s"}}>
 <img src={img1} className='position-absolute  img' style={{top:"20%",right:"5%",display:display}}/>
        </div>
       </div>
       <div className='mb-4' style={{width:"90%",height:"60px", borderRadius:"5px",backgroundColor:'#f0f5e1',border:"2px solid #c5c7c1"}}>
       <div  style={{width:`${precent3}%`,height:'100%',borderRadius:"5px",backgroundColor:'#b8b6a5',position:"relative",transition:"all 1.5s"}}>
 <img src={img1} className='position-absolute  img' style={{top:"20%",right:"5%",display:display}}/>
        </div>
       </div>
       <div className='mb-4' style={{width:"90%",height:"60px", borderRadius:"5px",backgroundColor:'#f0f5e1',border:"2px solid #c5c7c1"}}>
       <div  style={{width:`${precent4}%`,height:'100%',borderRadius:"5px",backgroundColor:'#b8b6a5',position:"relative",transition:"all 1.5s"}}>
 <img src={img1}  className='position-absolute img' style={{top:"20%",right:"5%",display:display}}/>
        </div>
       </div>
    
      </div>
      <span className='fs-4'>Trustpilot scores accurate as of May 2023</span>
    </div>
  )
}

export default Score
