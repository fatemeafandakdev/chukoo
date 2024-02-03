

import './App.css'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import More from './pages/more'
import Find from './pages/find'
import Pay from './pages/pay'
import Login from './pages/login'
import Signup from './pages/signup'
import About from './pages/about'
import Band from './pages/band'
import Support from './pages/support'
import Check from './pages/check'
import Ourmission from './ourmission'
function App() {
  
  return (
   
  <div className='  ' style={{backgroundColor:"white"}}> 
 <Routes>
<Route path={"/"}  element={<Home/>}/>
<Route path={"/more"}  element={<More/>}/>
<Route path={"/find"}  element={<Find/>}/>
<Route path={"/ourmission"}  element={<Ourmission/>}/>
<Route path={"/pay"}  element={<Pay/>}/>
<Route path={"/about"}  element={<About/>}/>
<Route path={"/support"}  element={<Support/>}/>
<Route path={"/login"}  element={<Login/>}/>
<Route path={"/signup"}  element={<Signup/>}/>
<Route path={"/band"}  element={<Band/>}/>
 </Routes>
 <Routes>
 <Route path={"/check"}  element={<Check/>}/>
 </Routes>
    </div>

   
  )
}

export default App
