import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import GradeIcon from "@mui/icons-material/Grade";

export const SchoolSlider = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center flex-col w-full h-3/4">
        <div className="text-4xl font-bold ">
          Current Vacancies in Different Schools
        </div>
        <div className=" text-2xl mt-2 ">Find schools that deserve you!</div>
        <div className="w-4/5 mt-10 ">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-1/2 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/g5eq25ZmNcY42DmCIA2VPdcsXPqx1uuO5XHnOxrOPDd7Nk9K2765100238857006701-2.jpg?fit=1850%2C940&ssl=1&resize=770%2C250&crop=0%2C0%2C770px%2C250px"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      International School of Hyderabad
                    </div>
                    <div className="font-bold text-lg flex justify-start">
                      <div className="">
                        <PlaceIcon /> Hyderabad
                      </div>
                      <div className="text-center ml-5 flex justify-center items-center">
                        <GradeIcon className="text-yellow-500 " /> 0
                      </div>
                    </div>
                  </div>
                  <div class="px-6 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <SchoolIcon /> CBSE Board
                    </span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-1/2 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/06/gps-bus-1.png?fit=500%2C500&ssl=1&resize=576%2C327&crop=0%2C0%2C576px%2C327px"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      Orchids School of International
                    </div>
                    <div className="font-bold text-lg flex justify-start">
                      <div className="">
                        <PlaceIcon /> Bengaluru
                      </div>
                      <div className="text-center ml-5 flex justify-center items-center">
                        <GradeIcon className="text-yellow-500" /> 0
                      </div>
                    </div>
                  </div>
                  <div class="px-6 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <SchoolIcon /> ICSE Board
                    </span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-1/2 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/download.png?fit=444%2C113&ssl=1&resize=576%2C327&crop=0%2C0%2C576px%2C327px"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      Orchids School of International
                    </div>
                    <div className="font-bold text-lg flex justify-start">
                      <div className="">
                        <PlaceIcon /> Bengaluru
                      </div>
                      <div className="text-center ml-5 flex justify-center items-center">
                        <GradeIcon className="text-yellow-500" /> 0
                      </div>
                    </div>
                  </div>
                  <div class="px-6 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <SchoolIcon /> CBSE Board
                    </span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-1/2 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/download.jpeg?fit=305%2C165&amp;ssl=1&amp;resize=576%2C327&amp;crop=0%2C0%2C576px%2C327px"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      DELHI PUBLIC SCHOOL – AMALAPURAM{" "}
                    </div>
                    <div className="font-bold text-lg flex justify-start">
                      <div className="">
                        <PlaceIcon /> AMALAPURAM
                      </div>
                      <div className="text-center ml-5 flex justify-center items-center">
                        <GradeIcon className="text-yellow-500" /> 0
                      </div>
                    </div>
                  </div>
                  <div class="px-6 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <SchoolIcon /> CBSE Board
                    </span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-1/2 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/download.jpeg?fit=305%2C165&amp;ssl=1&amp;resize=576%2C327&amp;crop=0%2C0%2C576px%2C327px"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      Delhi Public School, Rajahmundry
                    </div>
                    <div className="font-bold text-lg flex justify-start">
                      <div className="">
                        <PlaceIcon /> Rajahmundry
                      </div>
                      <div className="text-center ml-5 flex justify-center items-center">
                        <GradeIcon className="text-yellow-500" /> 0
                      </div>
                    </div>
                  </div>
                  <div class="px-6 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <SchoolIcon /> CBSE Board
                    </span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
