import React,{useEffect} from 'react'
import Header from '../component/header'
import Customer from '../component/customer'
import Score from '../component/score'
import Full from '../component/full'
import Question from '../component/question'
import Guide from '../component/guide'
import Member from '../component/member'
import Better from '../component/better'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=' container-fluid  '  style={{backgroundColor:"fff",fontFamily:"serif"}}>
<Navbar/>
      <Header/>
      <Customer/>
<Score/>
<Full/>
<Question/>
<Guide/>
<Member/>
<Better/>
<Footer/>
    </div>
  )
}

export default Home
