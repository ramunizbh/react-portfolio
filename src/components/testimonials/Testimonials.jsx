import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data= [
  {
    avatar: AVTR1,
    name: 'Ana Santos',
    review: 'Veritatis animi voluptatem rerum cumque repellendus, maiores fuga vel repellat numquam quam reiciendis, aspernatur nam omnis ea laborum sapiente explicabo exercitationem corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR2,
    name: 'Carla Santos',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi voluptatem rerum cumque repellendus, maiores fuga vel repellat numquam quam reiciendis, aspernatur nam omnis ea laborum sapiente explicabo exercitationem corporis.'
  },
  {
    avatar: AVTR3,
    name: 'Fernanda Pereira',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi voluptatem rerum cumque repellendus, aspernatur nam omnis ea laborum sapiente explicabo exercitationem corporis.'
  },
  {
    avatar: AVTR4,
    name: 'Tereza Cristina',
    review: 'Veritatis animi voluptatem rerum cumque repellendus, maiores fuga vel repellat numquam quam reiciendis, aspernatur nam omnis ea laborum sapiente explicabo exercitationem corporis.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review de Clientes</h5>      
      <h2>Testemunhos</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review, index})=>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">  
                  <img src={avatar}/>
                </div>
                <h5 className='cliente__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }                       
      </Swiper>
    </section>
  )
}

export default Testimonials