import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'

import video from '../assets/homeVideo.mp4'
import CardsHome from "../shared/components/CardsHome";

const Home = () => {
  return (
    <>
      <video muted autoPlay loop className="w-full max-h-180 object-cover">
        <source src={video} />
      </video>
      <section>
        <p className="text-3xl font-bold mb-10 text-center">Cada prenda, una historia</p>
        <div className="flex gap-[1em]">
            <div >
              <CardsHome />
            </div>
            <div>
              <CardsHome />
            </div>
            <div>
              <CardsHome />
            </div>
        </div>
      </section>
      <section className="w-full">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-160 max-w-full">
          <SwiperSlide><img src="https://media.es.wired.com/photos/66d094b8573dbae1acd0c70e/16:9/w_2560%2Cc_limit/GettyImages-1392983528.jpg" /></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Home