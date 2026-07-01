import { CalendarRange, Hammer, Microscope, ScanEye, Smile } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <ScanEye className="w-5 h-5 text-[#1A1A1A]" />,
      number: "01",
      title: "Digital Consultation & 3D Imaging",
      description: "We use advanced CBCT cone beam scans to capture a 3D model of your jawbone, ensuring ultra-precise planning before any procedure."
    },
    {
      icon: <Hammer className="w-5 h-5 text-[#1A1A1A]" />,
      number: "02",
      title: "Guided Implant Placement",
      description: "Under sterile, comfortable local anesthesia, our surgeon secures the medical-grade titanium fixture into its custom-planned location in less than an hour."
    },
    {
      icon: <CalendarRange className="w-5 h-5 text-[#1A1A1A]" />,
      number: "03",
      title: "Osseointegration (Healing Phase)",
      description: "Over 3 to 6 months, your jawbone naturally fuses with the biocompatible titanium post, forming a solid, permanent dental root substitute."
    },
    {
      icon: <Microscope className="w-5 h-5 text-[#1A1A1A]" />,
      number: "04",
      title: "Digital Impression & Abutment Connection",
      description: "We connect the titanium connector abutment and take an optical scan of your mouth—completely avoiding messy traditional dental trays."
    },
    {
      icon: <Smile className="w-5 h-5 text-[#1A1A1A]" />,
      number: "05",
      title: "Bespoke Crown Placement",
      description: "Our dental lab mills your customized, color-matched ceramic molar crown. It is torqued to fit perfectly, restoring full bite strength and beauty."
    }
  ];

  return (
    <section id="treatment-process" className="py-20 bg-[#EAE7E0] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none bg-[#1A1A1A] text-white text-[9px] font-sans font-bold uppercase tracking-[0.25em] mb-6">
            <span>Step-by-Step Experience</span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#1A1A1A] tracking-tight mb-4">
            Your Seamless Journey to a <br />
            <span className="italic font-normal block mt-1">Perfect Smile</span>
          </h2>
          <p className="text-[#444] text-base leading-relaxed font-sans max-w-xl mx-auto">
            We prioritize absolute patient safety, comfort, and predictability. Here is exactly how our team restores your oral health.
          </p>
        </div>

        {/* Process Timeline Stepper */}
        <div className="relative">
          {/* Vertical/Horizontal Connecting line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#1A1A1A]/10 -translate-y-1/2 hidden lg:block -z-10" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[#F9F7F2] border border-[#1A1A1A]/10 rounded-none p-6 shadow-sm hover:border-[#1A1A1A]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  {/* Top Bar with Icon & Step Indicator */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center border border-[#1A1A1A]/10">
                      {step.icon}
                    </div>
                    <span className="font-display text-4xl font-black text-[#1A1A1A]/20 tracking-tight italic">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm uppercase tracking-wide text-[#1A1A1A] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[#555] font-sans text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

