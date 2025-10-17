import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from '../pichers/heder/6b20415fedac8b4ec9a195f79e28cf4c95c69be1.png'
import Account from '../pichers/heder/user.svg'

function Heder() {
  const [open, setOpen] = useState(false);

  return (
    <>
   <nav className='h-[52px] flex justify-between  items-center gap-[30px] relative'>

    <div className='flex justify-start items-center gap-[30px] max-[768px]:gap-[20px]'>  
    <Link className='select-none' to="/" draggable="false"  >
  <img src={logo} className="w-[54.55px] h-auto max-[425px]:hidden "  draggable="false"/>
</Link>
<Link to="/">
<span className='md:text-[32px] md:font-medium md:text-[#FE8A00]  sm:text-[22px] sm:font-medium sm:text-[#FE8A00] text-[16px] font-medium text-[#FE8A00] ' >Minimal </span>
<span className='md:text-[32px] md:font-medium md:text-[#F61B5A] sm:text-[22px] sm:font-medium sm:text-[#F61B5A] text-[16px] font-medium text-[#F61B5A]'>Shop</span>
<span className='md:text-[32px] md:font-medium md:text-[#FE8A00] sm:text-[22px] sm:font-medium sm:text-[#FE8A00] text-[16px] font-medium text-[#FE8A00]'>ping</span>
</Link>
<div className="hidden lg:flex gap-6 items-center">
<Link className='text-[16px] text-[#4b4b4b] font-normal' to="/">
Categories
</Link>
<Link className='text-[16px] text-[#4b4b4b] font-normal' to="/">
Deals
</Link>
<Link className='text-[16px] text-[#4b4b4b] font-normal' to="/">
What’s New
</Link>
<Link className='text-[16px] text-[#4b4b4b] font-normal' to="/">
Delivery</Link>
</div>
<div className="lg:hidden">
    <button >
      <FontAwesomeIcon icon={faBars} className="text-3xl md:ml-[100px] sm: ml-[40px] max-[375px]:ml-[0px] " onClick={() => setOpen(!open)}/>
    </button>
  </div>
  {open && (
    <div className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 p-4 justify-center items-center lg:hidden">
      <Link to="/">Categories</Link>
      <Link to="/">Deals</Link>
      <Link to="/">What's New</Link>
      <Link to="/">Delivery</Link>
    </div>
  )}
         </div>




<div className='flex justify-between items-center gap-[30px]'>
<Link className='text-[16px] max-[768px]:text-[14px] text-[#4b4b4b] font-normal flex justify-center gap-[10px] items-center' to="/">
  <img src={Account} className="w-[14] h-auto " />
  <p4>Account</p4>
</Link>
<Link className='text-[16px] max-[768px]:text-[14px]  max-[1024px]:mr-[14px] text-[#4b4b4b] font-normal' to="/">
Cart
</Link>
</div>

         </nav>
    </>)
}

export default Heder