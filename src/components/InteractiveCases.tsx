import { useState } from "react";
import { clientCases } from "../data/cases";
import { ClipboardList, Clock, CheckCircle2, Calendar, ShieldAlert } from "lucide-react";

interface InteractiveCasesProps {
  ctaLink: string;
}

function getDirectImageUrl(url: string | undefined, extension: string = "png"): string {
  if (!url) return "";
  if (url.includes("ibb.co/")) {
    const parts = url.split("ibb.co/");
    const id = parts[parts.length - 1];
    return `https://i.ibb.co/${id}/image.${extension}`;
  }
  return url;
}

export default function InteractiveCases({ ctaLink }: InteractiveCasesProps) {
  // State to track active step index for each case
  const [activeStepIndex, setActiveStepIndex] = useState<Record<number, number>>({});

  return (
    <section id="case-studies" className="py-20 bg-[#F9F7F2] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none bg-[#1A1A1A] text-white text-[9px] font-sans font-bold uppercase tracking-[0.25em] mb-6">
            <ClipboardList className="w-3.5 h-3.5 text-[#F9F7F2]" />
            <span>Clinical Transparency</span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#1A1A1A] tracking-tight mb-4">
            Real Dental Implant Outcomes
          </h2>
          <p className="text-[#444] text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Take a clear, clinically honest look at actual treatment results. We believe in complete transparency with zero filters and zero cosmetic edits.
          </p>
        </div>

        {/* Clinical Disclaimer / Graphic Imagery Warning Banner */}
        <div className="mb-20 bg-amber-50/80 border border-amber-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-start gap-4 sm:gap-6 text-left shadow-sm rounded-none max-w-4xl mx-auto">
          <div className="w-10 h-10 rounded-none bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-950 shrink-0 mx-auto md:mx-0">
            <ShieldAlert className="w-5 h-5 text-amber-800" />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1A1A1A]">
              Clinical Disclaimer & Graphic Medical Imagery Warning
            </h4>
            <p className="text-xs text-[#555] font-sans leading-relaxed">
              The following section contains authentic, unfiltered dental and surgical clinical photographs detailing implant procedures. These records are published purely for educational transparency and clinical verification. Viewer discretion is advised for individuals sensitive to surgical medical images.
            </p>
          </div>
        </div>

        {/* 4 Case Studies with Alternating Layout */}
        <div className="space-y-24">
          {clientCases.slice(0, 4).map((c, index) => {
            const isImageLeft = index % 2 === 0;
            const hasSteps = c.images && c.images.length > 0;
            const currentStepIdx = activeStepIndex[c.id] || 0;
            const activeStep = hasSteps ? c.images[currentStepIdx] : null;

            return (
              <div 
                key={c.id} 
                className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 ${
                  isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Showcase Block */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div className="relative border border-[#1A1A1A]/10 shadow-lg bg-white p-4 sm:p-6 rounded-none flex-grow flex flex-col justify-center min-h-[340px]">
                    
                    {!hasSteps ? (
                      /* Before & After Comparison Grid */
                      <div className="grid grid-cols-2 gap-4 my-auto">
                        {/* Before Image */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#1A1A1A]/40">
                              Pre-treatment
                            </span>
                            <span className="text-[9px] font-mono bg-neutral-200 px-1.5 py-0.5 text-[#1A1A1A] font-bold">
                              BEFORE
                            </span>
                          </div>
                          <div className="relative aspect-[4/3] bg-[#EAE7E0] border border-[#1A1A1A]/5 overflow-hidden">
                            <img
                              src={getDirectImageUrl(c.beforeAfter?.beforeUrl || c.coverImage)}
                              alt={c.beforeAfter?.beforeDesc}
                              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <p className="text-[10px] text-[#666] leading-snug italic">
                            {c.beforeAfter?.beforeDesc}
                          </p>
                        </div>

                        {/* After Image */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-emerald-800">
                              Post-restoration
                            </span>
                            <span className="text-[9px] font-mono bg-emerald-800 text-white px-1.5 py-0.5 font-bold">
                              AFTER
                            </span>
                          </div>
                          <div className="relative aspect-[4/3] bg-[#EAE7E0] border border-emerald-700/10 overflow-hidden">
                            <img
                              src={getDirectImageUrl(c.beforeAfter?.afterUrl || c.coverImage)}
                              alt={c.beforeAfter?.afterDesc}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <p className="text-[10px] text-[#666] leading-snug italic">
                            {c.beforeAfter?.afterDesc}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Step-by-Step Clinical Experience Viewer */
                      <div className="space-y-4 my-auto flex flex-col justify-between">
                        <div className="flex justify-between items-center border-b border-[#1A1A1A]/5 pb-2">
                          <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#1A1A1A]/50">
                            Clinical Record Sequence
                          </span>
                          <span className="text-[9px] font-mono bg-[#1A1A1A] text-[#F9F7F2] px-2 py-0.5 font-bold">
                            APPOINTMENT {currentStepIdx + 1} OF {c.images.length}
                          </span>
                        </div>

                        <div className="relative aspect-video bg-[#EAE7E0] border border-[#1A1A1A]/10 overflow-hidden">
                          <img
                            src={getDirectImageUrl(activeStep?.url)}
                            alt={activeStep?.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="space-y-1 bg-[#F9F7F2]/60 p-3 border border-[#1A1A1A]/5">
                          <h4 className="text-xs font-sans font-bold text-[#1A1A1A] uppercase tracking-wide">
                            {activeStep?.title}
                          </h4>
                          <p className="text-[11px] text-[#444] leading-relaxed">
                            {activeStep?.description}
                          </p>
                        </div>

                        {/* Step Navigation Dots/Buttons */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {c.images.map((_, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => setActiveStepIndex(prev => ({ ...prev, [c.id]: sIdx }))}
                              className={`px-2.5 py-1 text-[9px] font-mono font-bold transition-all ${
                                currentStepIdx === sIdx
                                  ? "bg-[#1A1A1A] text-white"
                                  : "bg-neutral-100 text-[#1A1A1A]/60 hover:bg-neutral-200"
                              }`}
                            >
                              Visit {sIdx + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Case Details Content */}
                <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#EAE7E0] text-[#1A1A1A] text-[9px] font-sans font-bold uppercase tracking-wider w-fit">
                    <CheckCircle2 className="w-3 h-3 text-emerald-800" />
                    <span>Verified Patient Record</span>
                  </div>

                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight leading-tight">
                    {c.name}
                  </h3>

                  <div className="space-y-4 font-sans text-sm">
                    <div className="border-b border-[#1A1A1A]/5 pb-3">
                      <span className="block text-[9px] uppercase tracking-[0.15em] font-bold text-[#1A1A1A]/40 mb-1">
                        Diagnosis & Pre-Existing State
                      </span>
                      <p className="text-[#333] text-xs leading-relaxed">{c.diagnosis}</p>
                    </div>

                    <div className="border-b border-[#1A1A1A]/5 pb-3">
                      <span className="block text-[9px] uppercase tracking-[0.15em] font-bold text-[#1A1A1A]/40 mb-1">
                        Clinical Treatment Plan
                      </span>
                      <p className="text-[#333] text-xs leading-relaxed">{c.treatment}</p>
                    </div>

                    <div className="flex gap-4 items-center pt-2">
                      <div className="flex items-center gap-1.5 bg-[#EAE7E0]/50 text-[#1A1A1A] px-3.5 py-1.5 rounded-none text-[10px] font-sans font-bold uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{c.appointments} Clinical Visits</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-[#1A1A1A] text-white font-sans font-bold text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#333] transition-colors duration-200 rounded-none shadow-md"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Request Consult For Similar Case</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
