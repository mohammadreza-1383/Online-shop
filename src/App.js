import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import './App.css';
import User from './components/User';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import { Count } from './context/Count';
import { useState } from 'react';
import HandleForm from './components/HandleForm';
import { Provider } from 'react-redux';
import { store } from './stors/Store';
import Heder from './components/Heder';
import Footer from './components/Footer';
import OffHeder from './components/OffHeder';
import Home from './pages/Home';
function App() {
  const [num,setNum]=useState(0)
  return (
   <>
   <Provider store={store}>
 <Count.Provider value={{num,setNum}}>
   <Router>
<OffHeder/>

<main className='flex justify-center items-center w-full'>
  <div className='w-[1400px] bg-[#f9f9f9] p-[40px] max-[1024px]:p-[0px]'>
  <Heder />
    <Routes>
    
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/form' element={<HandleForm/>} />
     
      <Route path='/about' element={<About/>} />
      <Route path='/profile/:d/:w' element={<Profile/>} />
      <Route path='*' element={<div>not found</div>} />
    </Routes>
    </div>
    </main>
    <Footer/>
   </Router>
    </Count.Provider>
    </Provider>
   </>
  );
}

export default App;
 