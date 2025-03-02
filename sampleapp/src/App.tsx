import { Routes,Route } from 'react-router'
import Header from './components/Header'
import Searchlist from './components/SearchList'
import './App.css'
import './selectseat.css'
import Wallet from './components/Wallet'
import Bookingseats from './components/Bookingseats'
import Busdetails from './components/Customerdetails'
import UserHome from './components/UserHome'
import MyBooking from './components/MyBooking'


const App = () => {  
  
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Searchlist/> }></Route>
        <Route path='/busseat' element={<Bookingseats/>}></Route>
        <Route path='/wallet' element={<Wallet/>}></Route>
        <Route path='/addlist' element={<Busdetails/>}></Route>
        <Route path='/backaddlist' element={<Bookingseats/>}></Route>
        <Route path='/bookingoffers'></Route>
        <Route path='/homepage' element={<Searchlist/>}></Route>
        <Route path='login/userProfile' element={<UserHome/>}></Route>
        <Route path='/userprofile' element={<UserHome/>}></Route>
        <Route path='/mybooking' element={<MyBooking/>}></Route>
      </Routes>
     
    
      {/* <Wallet/> */}
      {/* <Login/> */}
      
    </div>
  )
}

export default App
