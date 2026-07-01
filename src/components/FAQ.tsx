import { useState } from "react";
import { faqs } from "../data/cases";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 bg-[#F9F7F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none bg-[#1A1A1A] text-white text-[9px] font-sans font-bold uppercase tracking-[0.25em] mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-[#F9F7F2]" />
            <span>Patient Knowledge Base</span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#1A1A1A] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#444] text-sm sm:text-base font-sans max-w-lg mx-auto">
            Get straightforward, clinically grounded answers to your questions about dental implants.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#1A1A1A]/10 rounded-none overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left p-6 font-semibold text-[#1A1A1A] bg-white hover:bg-[#EAE7E0]/30 transition-colors cursor-pointer rounded-none"
                >
                  <span className="font-display font-bold text-base text-[#1A1A1A] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#1A1A1A]/40 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#1A1A1A]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-[#1A1A1A]/10 bg-[#F9F7F2]" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-[#333] font-sans leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need More Assistance footer inside FAQ */}
        <div className="mt-12 bg-[#EAE7E0] border border-[#1A1A1A]/10 rounded-none p-8 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 text-[#1A1A1A] text-xs font-sans font-bold uppercase tracking-[0.15em] mb-3">
            <span>Have a specific concern or pre-existing state?</span>
          </div>
          <p className="text-[#444] font-sans text-xs max-w-2xl mx-auto leading-relaxed">
            Dr. Ogo Eze offers customized clinical review. Book a free consultation and let us design a personalized, permanent restoration road map for you.
          </p>
        </div>

      </div>
    </section>
  );
}

