import {
  MapPin,
  Phone,
  MessageSquare,
  Smartphone,
  Mail,
  Globe,
} from "lucide-react";

const locations = [
  {
    title: "HCM Office",
    address: "643 Dien Bien Phu Str., Ward 1, Dist. 3, HCMC",
  },
  {
    title: "Ha Noi Office",
    address:
      "A30-TT2, Van Quan Urban Area, Van Quan Ward, Ha Dong Dist, Ha Noi",
  },
  {
    title: "Thai Branch",
    address: "Draftboard space, #26/-47 Level 12A Wrakarn Building, Bangkok",
  },
  {
    title: "Singapore Branch",
    address: "Bash space, #03-01, 79 Ayer Rajah Crescent, Singapore 139955",
  },
];

const contactInfo = [
  { icon: <Phone size={18} />, label: "Phone", value: "+ (028) 6650 0770" },
  {
    icon: <MessageSquare size={18} />,
    label: "HR/Zalo",
    value: "(+84) 0528 172 347",
  },
  {
    icon: <Smartphone size={18} />,
    label: "Hotline",
    value: "(+84) 909 225 325",
  },
  { icon: <Mail size={18} />, label: "Email", value: "ngoc@ecomeasy.asia" },
  { icon: <Globe size={18} />, label: "Website", value: "www.ecomeasy.asia" },
];

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="scroll-mt-28 bg-zinc-800 text-zinc-300 pt-16 pb-8"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Cột 1: Giới thiệu (4 Columns) */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-7 bg-teal-500 rounded-sm"></span>
              Ecom<span className="text-teal-500">Easy</span>
            </h2>
            <p className="text-xs md:text-sm leading-relaxed mb-6 text-zinc-400">
              We provide comprehensive e-commerce support solutions, helping
              businesses optimize processes and achieve sustainable revenue
              growth.
            </p>
          </div>
          {/* Cột 2: Danh sách văn phòng (5 Columns) */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Our Offices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {locations.map((loc, index) => (
                <div key={index} className="group space-y-2">
                  <h4 className="text-teal-400 font-semibold text-sm">
                    {loc.title}
                  </h4>
                  <div className="flex gap-2">
                    <MapPin
                      size={16}
                      className="text-zinc-500 shrink-0 mt-1 group-hover:text-teal-600 transition-colors"
                    />
                    <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors">
                      {loc.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Cột 3: Thông tin liên hệ (3 Columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="text-zinc-500 group-hover:text-teal-500 transition-colors">
                    {info.icon}
                  </div>
                  <div className="text-sm">
                    <span className="block text-[10px] uppercase text-zinc-500 tracking-wider">
                      {info.label}
                    </span>
                    <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bản quyền (Bottom Bar) */}
        <div className="border-t border-zinc-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>©2026 ecomeasy.asia . All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
