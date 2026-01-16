import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    id: 1,
    title: "Business Strategy Consultation",
    image:
      "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/dichvu/tu-van-chien-luot.png",
    description:
      "We understand that every business is different. Whether your needs are about raising brand awareness, launching a new product, recruiting new consumers, better online selling strategies or more, we can help you. As we have the advantage of 8 years of e-commerce experience, we will create solutions that are specific and suitable for each individual company.",
  },
  {
    id: 2,
    title: "E-commerce store operation",
    image:
      "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/dichvu/ban-hang-truc-tuyen.png",
    description:
      "We understand that every business is different. Whether your needs are about raising brand awareness, launching a new product, recruiting new consumers, better online selling strategies or more, we can help you. As we have the advantage of 8 years of e-commerce experience, we will create solutions that are specific and suitable for each individual company.",
  },
  {
    id: 3,
    title: "Marketing Strategy Development",
    image:
      "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/dichvu/xay-dung-ke-hoach-truyen-thong.png",
    description:
      "Our expertise is marketing strategy & media buying to deliver the most efficient cost to revenue ratio. To make life simpler for you we also cover delivery fulfilment and financial transaction services.",
  },
  {
    id: 4,
    title: "Logistics, warehousing, and delivery management",
    image:
      "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/dichvu/quan-ly-dich-vu-hau-can-kho-bai.png",
    description:
      "Thanks to Real Time Seller Center System Innovation, we commit to deliver the best quality of fulfillment and delivery services with many expert partners such as GHN, Ahamove… As our client, you can track fulfillment process anytime, anywhere easily through any simple browsers.",
  },
  {
    id: 5,
    title: "Exclusive Technology System for Brands",
    image:
      "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/dichvu/giai-phap-cong-nghe-danh-cho-doanh-nghiep.png",
    description:
      "API, Tracking Technology will allow our Seller Center connecting to connect to E-commerce Platforms driving efficiency. It also helps Business Owners to connect directly with your customers’ orders improving the Customer Experience.",
  },
  {
    id: 6,
    title: "Micro Influencer Marketplace Provider",
    image:
      "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/dichvu/quang-cao-tiep-thi.png",
    description:
      "EcomEasy has developed a global social network with thousands of Social Micro Influencers to drive sales revenue but also Brands’ Image on Social network.",
  },
];

const Services = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="scroll-mt-16 py-16 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-3">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-800">
              Our <span className="text-teal-600">Services</span>
            </h2>
            <div className="w-16 h-1 bg-teal-500 mt-4 rounded-full"></div>
          </div>
          <div className="flex gap-3">
            <button className="prev-btn p-3 rounded-full border border-teal-500 text-teal-600 hover:bg-teal-600 hover:text-white transition-all active:scale-90">
              <ChevronLeft size={20} />
            </button>
            <button className="next-btn p-3 rounded-full border border-teal-500 text-teal-600 hover:bg-teal-600 hover:text-white transition-all active:scale-90">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={false}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm transition-all duration-500 hover:shadow-md">
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-800 mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <div className="flex flex-col h-full">
                    <p
                      className={`text-zinc-500 text-[13px] leading-relaxed text-justify transition-all duration-500 ${
                        expandedId === item.id
                          ? "line-clamp-none"
                          : "line-clamp-3"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Read more button */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="mt-5 flex items-center gap-2 text-teal-600 font-bold text-[11px] uppercase tracking-widest hover:text-teal-800 transition-all active:scale-95"
                  >
                    {expandedId === item.id ? (
                      <>
                        Show Less <ArrowUp size={14} />
                      </>
                    ) : (
                      <>
                        Read More <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
