import React from 'react'
import Rate from '../pichers/product/Rate.png'
function Carousel(props) {
    const {id , name , material , Description , img , price}=props.dataprops
  return (
    <>
    
    <div className='flex justify-center items-center gap-[30px] max-[526px]:gap-[20px] flex-col '>
    <img src={img} alt=""   className="w-[320px] h-[320px] object-cover rounded-[10px] "/>
    <div className='w-full'>
        <div className='flex justify-between items-center gap-[30px] max-[768px]:gap-[20px]'>
<div className='flex justify-center items-start  flex-col md:text-[16px] md:font-medium md:text-[#3e3e3e] text-[8px] font-medium text-[#3e3e3e]'>
    <div>{name}</div>
    <div> {material}</div>
</div>
<div className='md:text-[20px] md:font-medium md:text-[#3e3e3e] text-[8px] font-medium text-[#3e3e3e]'>{price}$</div>
        </div>
   <h4 className='mt-[5px] mb-[5px] md:text-[14px] md:font-medium md:text-[#7c7c7c] text-[8px] font-medium text-[#7c7c7c]'>
    {Description}
    </h4>
    <img src={Rate} alt="" />
    </div>
    </div>
    
        </>
  )
}

export default Carousel