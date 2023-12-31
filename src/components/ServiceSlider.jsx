/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// icons
import {
  RxRocket,
  RxArrowTopRight,
  RxComponent1,
  RxComponent2,
} from 'react-icons/rx';

import { SwiperSlide, Swiper } from 'swiper/react';
//import swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { Navigation, Pagination } from 'swiper/modules';


import { RiDeviceFill, RiPagesFill } from 'react-icons/ri';
import { FaPaintBrush } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// data
const serviceData = [
  {
    icon: <RiPagesFill className="animate-pulse" />,
    title: 'Single Page Applications (SPA)',
    description:
      'Developing SPAs to create dynamic , fluid UXs by loading content without need for full page reloads, resulting in a more engaging application.',
  },
  {
    icon: <RxComponent2 className="animate-pulse" />,
    title: 'Component-Based Architecture',
    description:
      'Implementing modular and reusable components to build scalable UIs, promoting code organization and development efficiency.',
  },
  {
    icon: <RiDeviceFill className="animate-pulse" />,
    title: 'Responsive websites',
    description:
      'Crafting UIs that seamlessly adapt and function across variuos devices and screen sizes, ensuring an optimal user experience on desktops, tablets and smartphones.',
  },

  {
    icon: <FaPaintBrush className="animate-pulse" />,
    title: 'UI Design',
    description:
      'Creating visually appealing and intuitive User Interfaces that align with brand idenity , using design principles, color schemes,typography and layout to enhance the overall look.',
  },

  {
    icon: <RxRocket className="animate-pulse" />,
    title: 'Performance Optimization',
    description:
      'Enhancing website speed and efficiency through code optimization,image compression and other techniques, resulting in improved overall performance.',
  },
];
function ServiceSlider() {
  return (
    <Swiper
    pagination={{
      clickable : true
    }}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      modules={[Navigation, Pagination]}
      className="h-[240px] sm:h-[340px] "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link
              to="/work"
              className=" group flex h-full cursor-pointer gap-x-6 rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,168,0.15)] sm:flex-col sm:gap-x-0"
            >
              {/* icon */}
              <div className="mb-4 text-4xl text-accent/80 sm:text-3xl lg:text-4xl ">
                {item.icon}
              </div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg sm:text-base lg:text-lg xl:text-xl">
                  {item.title}
                </div>
                <p className="max-w-[350px] text-sm font-thin leading-normal lg:text-base xl:text-sm xxl:text-base">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl ">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ServiceSlider;
