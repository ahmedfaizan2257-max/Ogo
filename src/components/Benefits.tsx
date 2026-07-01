import { HeartPulse, ShieldAlert, Smile, Utensils } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Utensils className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Restore Effortless Chewing",
      description: "Unlike loose dentures, implants fuse securely to your jawbone. Eat steak, apples, nuts, and your favorite foods with absolute confidence and zero discomfort."
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Prevent Bone Loss",
      description: "A missing tooth causes jawbone deterioration over time. Implants mimic natural roots, stimulating bone growth and preserving your natural facial structure."
    },
    {
      icon: <Smile className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Flawless Natural Aesthetics",
      description: "Each crown is individually milled and custom color-matched to your surrounding teeth, ensuring a seamless, indistinguishable smile that radiates confidence."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Protect Surrounding Teeth",
      description: "Unlike traditional dental bridges that require grinding down adjacent healthy teeth, implants stand independently, conserving your overall oral health."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-[#EAE7E0] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none bg-[#1A1A1A] text-white text-[9px] font-sans font-bold uppercase tracking-[0.25em] mb-6">
            <span>Why Dental Implants?</span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#1A1A1A] tracking-tight mb-4">
            The Gold Standard for <br />
            <span className="italic font-normal block mt-1">Oral Restoration</span>
          </h2>
          <p className="text-[#444] text-base leading-relaxed font-sans max-w-xl mx-auto">
            Traditional alternatives like dentures and bridges are temporary. Dental implants offer a permanent, natural-feeling oral solution designed to preserve long-term health.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F9F7F2] border border-[#1A1A1A]/10 rounded-none p-8 hover:shadow-xl hover:border-[#1A1A1A]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center mb-6 border border-[#1A1A1A]/10">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#555] text-xs font-sans leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

