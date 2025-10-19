import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function OffHeder() {
  return (
    <>
    
    <div className='bg-[#FE8A00] h-[10px] w-full md:h-[60px]  flex justify-between items-center p-[17px]	md:p-[27px] '>
        <div className='md:text-[16px] text-[8px] font-medium text-white flex justify-center items-center gap-[10px] '>
        <FontAwesomeIcon icon={faPhone} className="" />
        <p className="">+98 996 0196 148
        </p>


        </div>
        <div className='md:text-[16px] md:font-medium md:text-white text-[8px] font-medium text-white'>Get 50%  Off on Selected Items   |   Shop Now</div>
        <div></div>
        
         
        </div>
    
    </>)
}

export default OffHeder