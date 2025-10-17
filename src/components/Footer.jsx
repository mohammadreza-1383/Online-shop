import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Union from '../pichers/heder/Union.svg'
import basket from '../pichers/heder/Union2.svg'
import like from '../pichers/heder/Vector (6).svg'

import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
        
        <div className='bg-[#FE8A00] w-full  h-[15px] md:h-[80px] flex justify-between items-center p-[20px]	md:p-[30px]	 '>
           
           <div className='flex justify-between items-center gap-[20px]' >
           <Link className='md:text-[20px] text-[10px] font-medium text-white flex justify-center gap-[10px] items-center' to="/">
  <img src={basket} className="w-[14] h-auto " />
  <p4>5 Items added to Cart</p4>
</Link>
            
<Link className='md:text-[20px] text-[10px] font-medium text-white flex justify-center gap-[10px] items-center' to="/">
  <img src={like} className="w-[14] h-auto " />
  <p4>2 Wish list</p4>
</Link>
            

           </div>
            <Link className='md:text-[20px] text-[10px] font-medium text-white flex justify-center gap-[10px] items-center' to="/">
  <img src={Union} className="w-[14] h-auto " />
  <p4>85$</p4>
</Link>
            
            
            
            </div>
        
        </>)
}

export default Footer