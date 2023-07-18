import {  useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
const PopularInstructor = () => {
  const [popular, setPopular] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/popular')
    .then(res => res.json())
    .then(info => setPopular(info));
  }, []);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mt-10 md:mt-10'>
        <h2 className='text-center txt-xl md:text-3xl uppercase border-y-4 py-2 md:py-4 text-yellow-400'>Popular Instructors</h2>
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
          { popular.map(each => (
          <SwiperSlide key={each._id}>
            <div className='grid my-4 gap-2 justify-center items-center'>
            <img className="swiper-image" src={each.instructorPic} alt={each.instructorName} />
            <p className='text-orange-600'>{each.instructorName}</p>
          <Link to='/instructors' className='btn btn-primary btn-md mx-auto'>See Instructors</Link>
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

export default PopularInstructor;