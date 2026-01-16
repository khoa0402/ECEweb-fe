import { Menu, X } from "lucide-react";
import { useState } from "react";

const List = [
  { id: 1, name: "About Us", link: "/#about-us" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "Partners", link: "/#partners" },
  { id: 4, name: "Contact Us", link: "/#contact-us" },
];

const Navbar = () => {
  const [openMenu, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!openMenu);

  return (
    <nav className="sticky top-0 z-[100] py-3 bg-teal-400 shadow-md transition-all duration-300">
      <div className="container max-w-6xl px-6 mx-auto relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0 transition-transform active:scale-95">
            <a href="/">
              <img
                src="https://ecomeasy.asia/wp-content/themes/ecomeasy/assets/images/logo.png"
                alt="logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
          {/* Menu */}
          <div className="hidden lg:flex items-center gap-2">
            <ul className="flex gap-1 text-zinc-800 font-semibold">
              {List.map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={item.link}
                    className="block py-2 px-4 rounded-full transition-all duration-300 group-hover:text-white group-hover:bg-teal-600/30"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-zinc-800 p-2 transition-transform duration-300 active:scale-75"
            >
              <div
                className={`transition-transform duration-300 ${
                  openMenu ? "rotate-90" : "rotate-0"
                }`}
              >
                {openMenu ? <X size={28} /> : <Menu size={28} />}
              </div>
            </button>
          </div>
        </div>
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-teal-400 border-t border-teal-300/50 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
            openMenu ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col py-2">
            {List.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 w-full text-center text-zinc-800 font-bold hover:bg-teal-500 hover:text-white transition-colors duration-200 border-b border-teal-300/70"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

{
  /* <div className="flex items-center bg-teal-700/50 rounded-full p-1 border border-teal-500">
              <button className="px-3 py-1 rounded-full bg-white text-teal-600 text-xs font-bold transition-all">
                EN
              </button>
              <button className="px-3 py-1 rounded-full text-white text-xs font-bold hover:bg-teal-500/80 transition-all">
                VN
              </button>
            </div> */
}
{
  /* <div className="w-full flex justify-center py-4">
                <div className="flex items-center bg-teal-700/50 rounded-full p-1 border border-teal-500">
                  <button className="px-3 py-1 rounded-full bg-white text-teal-600 text-xs font-bold transition-all">
                    EN
                  </button>
                  <button className="px-3 py-1 rounded-full text-white text-xs font-bold hover:bg-teal-500/80 transition-all">
                    VN
                  </button>
                </div>
              </div> */
}

export default Navbar;
