import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Untuk navigasi
import "swiper/css/pagination"; // Untuk pagination

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Waktu antar slide (dalam milidetik)
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Mengaktifkan tombol navigasi
        modules={[Navigation, Pagination, Autoplay]} // Menambahkan Autoplay module
        className="hero-carousel"
      >
        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://assets.goal.com/images/v3/bltb57083179125d400/Indonesia_16-9.jpg?auto=webp&format=pjpg&width=3840&quality=60")',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-4xl font-bold">
                Semangat Garuda, Timnas Indonesia!
              </h1>
              <p className="text-lg mt-4">
                Mari dukung perjuangan mereka di ajang internasional.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/86/2024/05/21/Timnas-Indonesia-U-23-2806553373.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-4xl font-bold">Bersatu untuk Indonesia!</h1>
              <p className="text-lg mt-4">
                Keberhasilan timnas adalah kebanggaan kita semua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://assets.goal.com/images/v3/blt1e66b9e004b26e1f/Untitled%20design%20-%202024-06-11T205323.902.png?auto=webp&format=pjpg&width=3840&quality=60")',
              backgroundPosition: "top", // Memastikan gambar berada di tengah
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-4xl font-bold">Garuda Terbang Tinggi!</h1>
              <p className="text-lg mt-4">
                Dukung timnas Indonesia dalam setiap langkah mereka.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
