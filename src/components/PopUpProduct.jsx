import React, { useState } from 'react'
import Rate from '../pichers/product/Rate.png'
import union from '../pichers/popup/Union.svg'
import union2 from '../pichers/popup/Union2.svg'
function PopUpProduct({ product, onClose }) {
    const [activeButton, setActiveButton] = useState(null);

    const buttons = ["S", "M", "L", "XL", "XXL"];    
  return (
    <div className="fixed top-[15px] right-[15px] bottom-[15px] w-[600px]  overflow-y-auto max-[526px]:w-[180px]  max-[769px]:w-[336px] max-[1025px]:w-[400px]
 bg-white shadow-2xl p-6 z-50 transition-all duration-300 rounded-[10px] flex flex-col justify-between items-start gap-[30px] max-[526px]:gap-[20px]
 max-[320px]:p-[10px] 
 ">

      <button
        className="font-black absolute top-4 right-4 text-black hover:text-red-500 bg-[#e6e6e6] rounded-[40%] pr-[14px] pb-[10px] pt-[10px] pl-[14px]"
        onClick={onClose}
      >
        ✕
      </button>

      <div className='w-[320px] flex justify-center items-center gap-[30px] max-[526px]:gap-[20px] flex-col max-[526px]:w-[140px]  max-[769px]:w-[236px] max-[1025px]:w-[190px] 
      max-[320px]:w-[100px] max-[320px]:pt-[20px] max-[525px]:w-[90px] max-[525px]:pt-[20px] max-[768px]:w-[180px] max-[768px]:pt-[20px] max-[1024px]:w-[360px] max-[1024px]:pt-[20px]
      '>
    <img src={product.img} alt=""   className="cursor-pointer w-[320px] max-[320px]:h-[100px] max-[525px]:h-[90px] max-[768px]:h-[180px] max-[1024px]:h-[360px] h-[320px] object-cover rounded-[10px] max-[526px]:w-[140px] max-[526px]:h-[140px] max-[769px]:w-[236px] max-[769px]:h-[236px] max-[1025px]:w-[360px] max-[1025px]:h-[360px]"/>
    <div className='w-full'>
        <div className='flex justify-between items-center gap-[30px] max-[768px]:gap-[20px]'>
<div className='flex justify-center items-start  flex-col md:text-[16px] md:font-medium md:text-[#3e3e3e] text-[8px] font-medium text-[#3e3e3e]'>
    <div>{product.name}</div>
    <div> {product.material}</div>
</div>
<div className='md:text-[20px] md:font-medium md:text-[#3e3e3e] text-[8px] font-medium text-[#3e3e3e]'>{product.price}$</div>
        </div>
   <h4 className='mt-[5px] mb-[5px] md:text-[14px] md:font-medium md:text-[#7c7c7c] text-[8px] font-medium text-[#7c7c7c]'>
    {product.Description}
    </h4>
    <img src={Rate} alt="" />
    </div>
    </div>
    
    <div className='flex justify-center items-center rounded-[5px]  w-[150px] max-[426px]:w-[100px] border-[1px] border-[#d9d9d9] gap-[12px] mt-[20px]'>
<button className=' py-[5px] px-[10px] max-[426px]:py-[0px] max-[426px]:px-[0px] flex justify-center items-center  max-[426px]:pl-[10px]'>  -</button>
<p className='border-x-[1px] border-[#d9d9d9] py-[5px] px-[10px] ' >01</p>
<button className=' py-[5px] px-[10px]  max-[426px]:py-[0px] max-[426px]:px-[0px] max-[426px]:pr-[10px]   flex justify-center items-center'>+  </button>

    </div>

<div className='w-[260px] flex justify-between items-center gap-[10px] 
max-[526px]:gap-[5px] mt-[30px] mb-[150px] max-[526px]:w-[80px]


'>
  
    {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => setActiveButton(index)}
          className={`w-[42px] h-[42px] 
            max-[360px]:w-[30px] max-[360px]:h-[30px]
            max-[360px]:text-[11px]
            max-[360px]:px-[5px]
             max-[526px]:w-[30px] max-[360px]:h-[30px]
            max-[526px]:text-[11px]
            max-[526px]:px-[5px]
            
            flex justify-center items-center rounded-md	border-[1px] border-[#FE8A00]
            ${
              activeButton === index
                ? "bg-[#FE8A00] text-white"
                : "bg-white text-black"
            }`}
        >
          {btn}
        </button>
      ))}
</div>


<div className='flex flex-col justify-center items-start gap-[20px] mb-[70px]'>
<div className='flex justify-start items-center gap-[10px]'>
    <img src={union} alt="" />
    <div className='flex flex-col justify-center items-start'>
        <p className='text-[16px] font-medium text-black '>Delivery limit</p>
        <p className='text-[16px] font-medium text-[#7f7f7f]'>Free delivery within 50 km’s.</p>
    </div>
</div>
<div className='flex justify-start items-center gap-[10px]'>
    <img src={union2} alt="" />
    <div className='flex flex-col justify-center items-start'>
        <p className='text-[16px] font-medium text-black '>Return Policy</p>
        <p className='text-[16px] font-medium text-[#7f7f7f]'>With-in 5days of product delivery.</p>
    </div>
</div>
</div>


<div className='flex  justify-start items-center gap-[20px] mb-[10px]'>
    <button className='px-[20px] py-[10px] text-[14px] text-[#FE8A00] rounded-[31px] border-[1px] border-[#FE8A00]'>Add to cart</button>
    <button onClick={onClose} className='text-[14px] text-[#7f7f7f] '>Cancel</button>
</div>
    </div>
  )
}

export default PopUpProduct
