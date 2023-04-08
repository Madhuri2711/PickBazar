import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';


const Slider = () => {
    const sliderimg = [
        {img : './image/offer-5.png'},
        {img : './image/offer-4.png'},
        {img : './image/offer-3.png'},
        {img : './image/offer-6.webp'},
        {img : './image/offer-1.webp'},
    ]
  
  return (
   <>

<div className=' py-4 px-4 slider'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
         navigation
        
         
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log()}
      onSwiper={(swiper) => console.log()}
    >
    
        {
            sliderimg.map((item) => {
                return(
                    <SwiperSlide> <img src={item.img} className='col-12' height={200} alt=''></img>  </SwiperSlide>
                )
            })
        }
      
    
    
    </Swiper>
        </div>

   </>
  )
}

export default Slider
