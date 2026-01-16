import { SignUpForm } from "@/components/signup-form";

const ContactForm = () => {
  return (
    <div
      id="contact-form"
      className="relative scroll-mt-14 flex min-h-svh w-full items-center justify-center p-6 md:p-16 overflow-hidden bg-zinc-50"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(150% 100% at 50% 50%, #ffffff 20%, #14b8a6 100%)`,
        }}
      />
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* cột trái: Title & Description */}
        <div className="text-left space-y-5 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
            Contact <span className="text-teal-600">With Us</span>
          </h2>
          <p className="text-sm md:text-lg text-zinc-600 leading-relaxed">
            Ready to scale your e-commerce business? Get in touch with our
            experts to discover tailored solutions for your brand's growth.
          </p>
        </div>
        {/* cột phải: Form Container */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm transition-all duration-500 hover:scale-[1.01]">
            <SignUpForm className="shadow-2xl border-white/50 backdrop-blur-sm bg-white/90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

<div className="min-h-screen w-full bg-white relative">
  {/* Teal Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
      `,
      backgroundSize: "100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>;
