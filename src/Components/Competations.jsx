import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import GradeIcon from "@mui/icons-material/Grade";

// export const SchoolSlider = () => {
//   return (
//
//   );
// };

export const Competations = () => {
  return (
    <div className="flex flex-col justify-center items-center h-550px">
      <div className="flex justify-center items-center flex-col w-full h-3/4">
        <div className="text-4xl font-bold ">Live Competitions</div>
        <div className=" text-xl mt-2 ">Participate in different events</div>
        <div className="w-4/5 mt-10 ">
          {" "}
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
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
                    class="w-full h-3/4 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/chess-1.jpg?ssl=1"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      Masterful Moves for Champions: Unleash Your Strategic
                      Brilliance!
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-3/4 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/Chess_Tournaments_00-1024x585-1.webp?ssl=1"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      Chess Tournaments For Kids
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-3/4 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/Spelling-bee-2020-scaled-1.jpg?ssl=1"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      Spell Bee Competition
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="h-80 rounded overflow-hidden shadow-xl hover:shadow-2xl transition ">
                <a href="">
                  <img
                    class="w-full h-3/4 object-cover hover:scale-110 transition duration-500 cursor-pointer "
                    src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/code-challenge-banner.png?ssl=1"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4 flex flex-col">
                    <div class="font-bold text-xl mb-2">
                      A Free Kids Coding Challenge
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};
