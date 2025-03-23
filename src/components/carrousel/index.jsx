import style from "./Carrousel.module.css"

import sonoradinamita from "../../assets/networks/sonoradinamita.jpg";
import sonoradinamita2 from "../../assets/networks/sonoradinamita2.jpg"


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import damasGratis from "../../assets/networks/damasgratis.jpg";
import callejeroFino from "../../assets/networks/callejeroFino.jpg";
import thelaplanta from "../../assets/networks/thelaplanta.jpg";
import magonuevaluna from "../../assets/networks/magonuevaluna.jpg";
import combolocoysergiotorres from "../../assets/networks/combolocoysergiotorres.jpg"



export const Carrousel = () =>{
 return (
    <div className="container">
      <h1 className={style.heading}>Redes sociales</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows:false,
          
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        breakpoints={{
          320: { slidesPerView: 2 },  // Celulares
          768: { slidesPerView: 2 },  // Tablets
          1024: { slidesPerView: 4}, // Pantallas grandes
        }}
      >
        <SwiperSlide  className={style.swiperBack}  >
          <img src={damasGratis} alt="slide_image"    className={style.image}  />
        </SwiperSlide>
        <SwiperSlide  className={style.swiperBack}  >
          <img src={callejeroFino} alt="slide_image" className={style.image}  />
        </SwiperSlide>
        <SwiperSlide  className={style.swiperBack}  >
          <img src={thelaplanta} alt="slide_image" className={style.image}  />
        </SwiperSlide>
        <SwiperSlide  className={style.swiperBack}  >
          <img src={magonuevaluna} alt="slide_image" className={style.image}  />
        </SwiperSlide>
        <SwiperSlide  className={style.swiperBack}  >
          <img src={combolocoysergiotorres} alt="slide_image" className={style.image}  />
        </SwiperSlide>
        <SwiperSlide  className={style.swiperBack}  >
          <img src={sonoradinamita} alt="slide_image"   className={style.image} />
        </SwiperSlide>
        <SwiperSlide  className={style.swiperBack}  >
          <img src={sonoradinamita2} alt="slide_image" className={style.image} />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

