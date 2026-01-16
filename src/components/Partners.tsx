import React from "react";

interface Partner {
  name: string;
  logo: string;
}

const partners: Record<string, Partner[]> = {
  ecommerce: [
    {
      name: "Lazada",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/lazada.png",
    },
    {
      name: "Shopee",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/shoppe.png",
    },
    {
      name: "Tiki",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/tiki.png",
    },
    {
      name: "Sendo",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/sendo.png",
    },
    {
      name: "Tiktok",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/tiktok-shop.png",
    },
  ],
  brands: [
    {
      name: "CocaCola",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/coca.png",
    },
    {
      name: "Nestle",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/nestle.png",
    },
    {
      name: "Bomdin",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/bomdin.png",
    },
    {
      name: "Kissa",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/kissa.png",
    },
    {
      name: "JapanHC",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/japan.png",
    },
    {
      name: "HoaThienPhu",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/hoathienphu.png",
    },
    {
      name: "Shilena",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/shilena.png",
    },
  ],
  logistics: [
    {
      name: "GHN",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/ghn.png",
    },
    {
      name: "Ahamove",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/ahamove.png",
    },
  ],
  advertising: [
    {
      name: "Chinmedia",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/chinmedia.png",
    },
    {
      name: "Google",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/google.png",
    },
    {
      name: "Facebook",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/facebook.png",
    },
    {
      name: "Coccoc",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/coccoc.png",
    },
    {
      name: "Zalo",
      logo: "https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/zalo.png",
    },
  ],
};

const categories = [
  { key: "ecommerce", display: "E-commerce platforms" },
  { key: "brands", display: "Strategic Brands" },
  { key: "logistics", display: "Third Party Logistics" },
  { key: "advertising", display: "Advertising Partners" },
];
const Partners: React.FC = () => {
  return (
    <section id="partners" className="scroll-mt-20 py-20 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-800">
            Our Strategic <span className="text-teal-600">Partners</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto text-xs md:text-base">
            By collaborating with top-tier e-commerce platforms, renowned
            brands, third-party logistics providers, and trusted media partners,
            we provide holistic solutions that drive sustainable development for
            your business.
          </p>
        </div>
        {/* Các nhóm đối tác */}
        <div className="space-y-18">
          {categories.map((category) => (
            <div key={category.key}>
              <h3 className="text-zinc-500 uppercase tracking-[0.2em] text-sm md:text-lg font-bold mb-10 text-center">
                {category.display}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-center justify-center">
                {partners[category.key]?.map(
                  (partner: Partner, index: number) => (
                    <div
                      key={index}
                      className="group relative w-full h-24 md:h-28 flex items-center justify-center p-4 bg-white border-2 border-zinc-100 rounded-xl border border-zinc-100 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-1"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain scale-125 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
