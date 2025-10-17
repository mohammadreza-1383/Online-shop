import React, { useState } from 'react'
import baner from '../pichers/home/ad-group.png'
import { PRODUCTS } from '../data/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Carousel from '../components/Carousel'
import { Autoplay } from 'swiper/modules'
import PopUpProduct from '../components/PopUpProduct'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <img
        src={baner}
        alt=""
        className="mt-[40px] select-none"
        draggable="false"
      />

      <div className=" mt-[70px]">
      <Swiper
  className="!w-full overflow-hidden px-2"
  spaceBetween={20}
  slidesPerView="auto"
  centeredSlides={true}
  loop={true}
  modules={[Autoplay]}
  autoplay={{ delay: 100000, disableOnInteraction: false }}
  breakpoints={{
    0: { slidesPerView: 2 },
    526: { slidesPerView: 3 },
    769: { slidesPerView: 4 },
  }}
>
          {PRODUCTS.map((data) => (
            <SwiperSlide key={data.id}>
              <div onClick={() => setSelectedProduct(data)}>
                <Carousel dataprops={data} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedProduct && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"></div>

            <PopUpProduct
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          </>
        )}
      </div>
    </>
  )
}
