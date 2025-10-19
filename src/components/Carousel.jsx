import React from 'react'
import Rate from '../pichers/product/Rate.png'

function Carousel({ dataprops }) {
  const { name, material, Description, img, price } = dataprops

  return (
    <div className="flex flex-col items-center gap-3 max-w-[300px] w-full">
      <img
        src={img}
        alt={name}
        className="w-full h-auto aspect-square object-cover rounded-[10px] cursor-pointer
"
      />

      <div className="w-full">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col text-[#3e3e3e] text-sm md:text-base font-medium">
            <div>{name}</div>
            <div>{material}</div>
          </div>
          <div className="text-[#3e3e3e] font-medium md:text-lg">{price}$</div>
        </div>

        <h4 className="mt-1 mb-1 text-[#7c7c7c] text-xs md:text-sm font-medium">
          {Description}
        </h4>

        <img src={Rate} alt="rate" className="w-[80px] h-auto" />
      </div>
    </div>
  )
}

export default Carousel
