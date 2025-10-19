import React, { useState } from 'react'
import baner from '../pichers/home/ad-group.png'
import { PRODUCTS } from '../data/product'
import Carousel from '../components/Carousel'
import PopUpProduct from '../components/PopUpProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <img
        src={baner}
        alt="banner"
        className="mt-10 select-none w-full max-w-[1400px] mx-auto"
        draggable="false"
      />

      <div className="max-[426px]:w-[320px] max-[869px]:w-[760px] max-[1300px]:w-[1024px] overflow-hidden mt-16 px-2 max-w-[1400px] mx-auto max-[426px]:mb-[40px] max-[869px]:mb-[60px] max-[1300px]:mb-[80px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
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
      </div>

      {selectedProduct && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"></div>
          <PopUpProduct
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        </>
      )}
    </>
  )
}
