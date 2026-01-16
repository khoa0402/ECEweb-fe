import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import CSS của Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banners = [
  {
    id: 1,
    image: "https://ecomeasy.asia/wp-content/uploads/2018/06/home-bg1-3.png",
  },
  {
    id: 2,
    image: "https://ecomeasy.asia/wp-content/uploads/2018/06/home-bg2-3.png",
  },
  {
    id: 3,
    image:
      "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/about-img1.png",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-[300px] md:h-[500px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {Banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="relative w-full h-full bg-cover bg-center pl-12"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              {banner.id === 3 && (
                <div className="absolute inset-0 bg-black/50"></div>
              )}
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-6">
                <div className="flex gap-4">
                  <span className="w-1 md:w-1.5 h-12 md:h-30 bg-teal-600 rounded-full"></span>
                  <h1 className="text-xl md:text-5xl font-bold drop-shadow-2xl mb-7 leading-tight">
                    Connecting Businesses{" "}
                    <span className="text-teal-400">&</span> <br /> Elevating
                    Ecommerce
                  </h1>
                </div>
                <p className="text-xs md:text-base max-w-3xl drop-shadow-md">
                  With superior technology and a passionate expert team, we help
                  you streamline operations and maximize profits. Our smart
                  platform connects you directly with top-tier affiliates and
                  influencers, empowering your brand to reach target customers
                  faster and more effectively than ever on social media.
                </p>
                <a href="#contact-form">
                  <button className="mt-8 px-4 py-2 text-[10px] md:px-6 md:py-3 md:text-[15px] text-zinc-200 bg-teal-600 hover:bg-teal-800 rounded-full font-bold shadow-lg transition-all duration-200 ease-in-out active:scale-90 active:shadow-inner active:bg-teal-700">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .swiper-pagination-bullet { width: 12px; height: 12px; background: white !important; opacity: 0.8; }
        .swiper-pagination-bullet-active { width: 14px; height: 14px; border-radius: 6px; background: #2dd4bf !important; }
      `}</style>
    </div>
  );
};

export default Hero;
