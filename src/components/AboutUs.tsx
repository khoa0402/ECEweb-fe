import { AppWindow, CircleDollarSign, Rocket, Users } from "lucide-react";

const Info = [
  {
    icon: <Rocket size={22} />,
    title: "Position & Vision",
    description:
      "EcomEasy is a leading E-commerce solutions company whose focus is on continually finding new ways to make e-commerce easier to make your business more successful.",
  },
  {
    icon: <Users size={22} />,
    title: "Team capabilities and technology philosophy",
    description:
      "Comprising a team with in-depth knowledge of e-commerce operations, a belief in the strong growth of online sales, and a deep understanding of using technology to drive market trends and reduce business costs, our solutions are comprehensive and bridge the gap between customers and businesses in the simplest way possible.",
  },
  {
    icon: <AppWindow size={22} />,
    title: "Comprehensive service ecosystem",
    description:
      "Our service scope ranges from listing goods on leading e-commerce platforms such as Lazada, Shopee, Tiki, Sendo... to providing advertising channels on Chin Media, Facebook, Google, Coccoc, Zalo... and supporting logistics services including warehouse management and delivery with reputable shipping and warehousing partners such as GHN, Ahamove...",
  },
  {
    icon: <CircleDollarSign size={22} />,
    title: "Marketing and Performance",
    description:
      "We focus specifically on e-commerce marketing and sales to create the most efficient marketing-to-sales process for businesses.",
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="scroll-mt-20 py-14 bg-zinc-200/50">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl  font-bold text-zinc-800">
            About <span className="text-teal-600">Us</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Info.map((info, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.8rem] p-0.5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-transparent to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-white rounded-[1.7rem] p-6 z-10 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-zinc-100 text-zinc-800 rounded-full group-hover:bg-zinc-900 group-hover:text-teal-400 transition-all duration-500 shadow-sm">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-sm md:text-lg text-zinc-800 group-hover:text-teal-700 transition-colors">
                    {info.title}
                  </h3>
                </div>
                <p className="text-zinc-500 group-hover:text-zinc-800 leading-relaxed text-xs md:text-sm text-justify">
                  {info.description}
                </p>
                <div className="mt-4 w-0 h-0.5 bg-teal-500/30 group-hover:w-12 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
