import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch('classes.json')
      .then(res => res.json())
      .then(data => {
        setClasses(data);
      });
  }, []);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
        <h2 className='text-center text-3xl'>Popular Classes</h2>
             <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          { classes.map(each => (
          <SwiperSlide key={each.name}>
            <div className='grid my-4 gap-2'>
            <img className="swiper-image" src={each.picture} alt={each.name} />
            <p className='text-orange-600'>{each.name}</p>
            </div>
          </SwiperSlide>
        ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        </div>
    );
};

export default PopularClasses;

{/* classes.map(each => (
          <SwiperSlide key={each.name}>
            <img className="swiper-image" src={each.picture} alt={each.name} />
          </SwiperSlide>
        ))}
        
   */}