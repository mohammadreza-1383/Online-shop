import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function EmblaCarousel({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  })

  useEffect(() => {
    if (!emblaApi) return
    const timer = setInterval(() => emblaApi.scrollNext(), 3000)
    return () => clearInterval(timer)
  }, [emblaApi])

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {React.Children.map(children, (child) => (
          <div className="
          flex-[0_0_calc(50%-8px)]     /* موبایل: ۲ آیتم با کمی فاصله */
          sm:flex-[0_0_calc(33.333%-8px)]  /* تبلت: ۳ آیتم */
          md:flex-[0_0_calc(25%-8px)]      /* دسکتاپ: ۴ آیتم */
          p-2
          box-border
        ">
          {child}
        </div>
        
        ))}
      </div>
    </div>
  )
}
