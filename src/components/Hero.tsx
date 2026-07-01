import { Calendar, CheckCircle2, Star } from "lucide-react";
import dentalClinicBanner from "../assets/images/patient_treatment_1782861056698.jpg";

interface HeroProps {
  ctaLink: string;
}

export default function Hero({ ctaLink }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#1A1A1A]/10 min-h-[600px] sm:min-h-[700px] flex items-center">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={dentalClinicBanner}
          alt="Premium Dental Clinic"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Elegant overlay to ensure premium high-contrast readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-8">
            <span>Restorative & Cosmetic Dentistry Specialist</span>
          </div>

          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8">
            Regain Your <span className="italic font-normal text-white/90">Natural Smile.</span>
          </h1>

          <p className="text-white/85 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
            Tired of hiding your smile or struggling with missing teeth? Our premium medical-grade implants look, feel, and function exactly like natural teeth—meticulously designed to last a lifetime.
          </p>

          {/* CTA and Action Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#1A1A1A] font-sans font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 hover:bg-neutral-200 transition-colors duration-200 cursor-pointer rounded-none shadow-lg"
              id="hero-cta-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </a>

            <a
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-white font-sans font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 hover:bg-white/10 border border-white/30 transition-colors duration-200"
            >
              <span>View Case Studies</span>
            </a>
          </div>

          {/* Trust Markers */}
          <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white mb-1">99%</span>
              <span className="text-[9px] uppercase font-sans tracking-[0.15em] font-extrabold text-white/60">Success Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white mb-1">15+</span>
              <span className="text-[9px] uppercase font-sans tracking-[0.15em] font-extrabold text-white/60">Years Exp</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white mb-1">100%</span>
              <span className="text-[9px] uppercase font-sans tracking-[0.15em] font-extrabold text-white/60">Biocompatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

