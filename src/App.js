import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Profile from './pages/Profile';
import { useState } from 'react';
import HandleForm from './components/HandleForm';
import { Provider } from 'react-redux';
import { store } from './stors/Store';
import Heder from './components/Heder';
import Footer from './components/Footer';
import OffHeder from './components/OffHeder';
import Home from './pages/Home';
import { ShopContextProvider } from './context/shopContext';
import Login from './pages/Login';
function App() {
  const [num,setNum]=useState(0)
  return (
   <>
   <ShopContextProvider>
   <Router>
<OffHeder/>

<main className='flex justify-center items-center w-full'>
  <div className='w-[1400px] bg-[#f9f9f9] p-[40px] max-[1024px]:p-[0px]'>
  <Heder />
    <Routes>
    
      <Route path='/' element={<Home/>} />
      <Route path='/form' element={<HandleForm/>} />
     
      <Route path='/about' element={<About/>} />
      <Route path='/profile/:d/:w' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='*' element={<div>not found</div>} />
    </Routes>
    </div>
    </main>
    <Footer/>
   </Router>
   </ShopContextProvider>
   </>
  );
}

export default App;
 