import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

// const ImgDate = [

//     {
//         src:"/25th-high.png",
//         alt:"25th画像高解像",
//     },
//     {
//         src:"/fv-25th.jpg",
//         alt:"25th画像",
//     },
//     {
//         src:"/fv_red.jpg",
//         alt:"舞台赤",
//     },
//     {
//         src:"/fv_black.jpg",
//         alt:"舞台黒",
//     },
//     {
//         src:"/fv_light.jpg",
//         alt:"舞台ライティング",
//     },
//     {
//         src:"/fv_orange.jpg",
//         alt:"舞台オレンジ",
//     },
// ]


export default function Slider () {

    return (
        <div className="mx-auto w-5/6">
            <div className=''>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{ 
                    delay: 2000,
                    disableOnInteraction: false 
                }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className="">
                        <Image
                            src="/fv_1.jpg"
                            alt="25thImage"
                            className="firstview"
                            width={1440}
                            height={50}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src="/fv_2.jpg"
                            alt="25thImage"
                            className="firstview"
                            width={1440}
                            height={50}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src="/fv_3.jpg"
                            alt="25thImage"
                            className="firstview"
                            width={1440}
                            height={50}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src="/fv_4.jpg"
                            alt="25thImage"
                            className="firstview"
                            width={1440}
                            height={50}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <Image
                            src="/fv_5.jpg"
                            alt="25thImage"
                            className="firstview"
                            width={1440}
                            height={50}
                            priority
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}