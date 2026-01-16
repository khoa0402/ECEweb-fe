import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import AboutUs from "../components/AboutUs.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Footer from "@/components/Footer.tsx";
import Partners from "@/components/Partners.tsx";
import Services from "@/components/Services.tsx";

const LangDingPage = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Hero />
        <AboutUs />
        <Services />
        <ContactForm />
        <Partners />
        <Footer />
      </div>
    </>
  );
};

export default LangDingPage;
