
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import PersonalCare from './PersonalCare/PersonalCare'
import Transportation from './Transportation/Transportation'
import MedicineSupport from './MedicineSupport/MedicineSupport'
import Login from './Login/Login'
import Registration from './RegistrationPage/Registration'
import Modail from './Modail/Modail'
function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/><HomePage/><Footer/></>}/>
        <Route path='/Modail' element={<Modail/>}/>
        <Route path='/personalcare' element={<><Navbar/><PersonalCare/><Footer/></>}/>
        <Route path='/transportation'element={<><Navbar/><Transportation/><Footer/></>}/>
        <Route path='/medicine' element={<><Navbar/><MedicineSupport/><Footer/></>}/>
        <Route path='/login' element={<><Navbar/><Login/></>}/>
        <Route path='/register' element={<><Navbar/><Registration/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
