// import Image from 'next/image'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

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


// export default function Slider () {

//     return (
//         <div className="max-w-screen-2xl w-full mx-auto">
//             <div className=''>
//                 <Swiper
//                 // install Swiper modules
//                 modules={[Navigation, Pagination, Scrollbar, A11y, ]}
//                 // spaceBetween={50}
//                 autoplay = {{
//                     delay:2000
//                 }}
//                 slidesPerView={1}
//                 loop = {true} 
//                 navigation
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//                 // onSwiper={(swiper) => console.log(swiper)}
//                 onSlideChange={() => console.log('slide change')}
//                 >

                    
//                     <SwiperSlide className="">
//                         <Image
//                             src="/25th-high.jpg"
//                             alt="25thImage"
//                             className="firstview"
//                             width={1440}
//                             height={50}
//                             priority
//                         />
//                     </SwiperSlide>
//                     {/* <SwiperSlide className="">
//                         <Image
//                             src="/25th-web.svg"
//                             alt="25thImage"
//                             className="firstview"
//                             width={650}
//                             height={650}
//                             priority
//                         />
//                     </SwiperSlide> */}
//                     <SwiperSlide className="">
//                         <Image
//                             src="/fv_red.jpg"
//                             alt="25thImage"
//                             className="firstview"
//                             width={1440}
//                             height={50}
//                             priority
//                         />
//                     </SwiperSlide>
//                     <SwiperSlide className="">
//                         <Image
//                             src="/fv_black.jpg"
//                             alt="25thImage"
//                             className="firstview"
//                             width={1440}
//                             height={50}
//                             priority
//                         />
//                     </SwiperSlide>
//                     <SwiperSlide className="">
//                         <Image
//                             src="/fv_orange.jpg"
//                             alt="25thImage"
//                             className="firstview"
//                             width={1440}
//                             height={50}
//                             priority
//                         />
//                     </SwiperSlide>
//                     <SwiperSlide className="">
//                         <Image
//                             src="/fv_light.jpg"
//                             alt="25thImage"
//                             className="firstview"
//                             width={1440}
//                             height={50}
//                             priority
//                         />
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </div>
//     )
// }