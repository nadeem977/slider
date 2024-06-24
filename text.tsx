import React, { useRef, useEffect } from 'react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css';

const WelcomeScreen: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiperInstance = document.querySelector('.swiper')?.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className='min-h-screen h-full w-full bg-[#F8F8F8] relative'>
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((_, i) => (
          <SwiperSlide key={i} className='setheitslidr mt-auto bg-white w-full flex items-center justify-center'>
            Slide {i + 1}
          </SwiperSlide>
        ))}

      
      <div className='border-t-[2px] border-gray-300 h-[92px]'>
      <button ref={prevRef} className="custom-prev-button absolute bottom-5 left-5 bg-blue-500 text-white px-4 py-2 rounded opacity-70 hover:opacity-100 transition-opacity">
        Prev
      </button>
      <button ref={nextRef} className="custom-next-button absolute bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded opacity-70 hover:opacity-100 transition-opacity">
        Next
      </button>
      </div>
      </Swiper>
    </div>
  );
}

export default WelcomeScreen;


