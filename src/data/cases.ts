import { ClientCase, FAQItem } from "../types";

export const clientCases: ClientCase[] = [
  {
    id: 1,
    name: "Patient Case 1: Single Molar Restoration",
    subtitle: "Upper Left First Molar Replacement",
    diagnosis: "Missing Upper Left First Molar leading to chewing difficulty, bite misalignment, and adjacent teeth drifting.",
    treatment: "Single-tooth dental implant placement with a custom-milled screw-retained ceramic crown over 6 digital planning sessions & clinical appointments.",
    appointments: 6,
    completed: true,
    coverImage: "https://ibb.co/8ghSQtcb",
    images: [
      {
        id: "step1",
        title: "Appointment 1: 3D Scan & Pre-Op Planning",
        description: "Comprehensive dental assessment using high-resolution digital scanning to evaluate remaining bone volume and design the customized surgical guide.",
        url: "https://ibb.co/p65bGxbj",
        fallbackText: "Initial bone scan and digital assessment of the missing upper left molar region."
      },
      {
        id: "step2",
        title: "Appointment 2: Micro-Surgical Implant Placement",
        description: "Precise surgical placement of a premium biocompatible titanium fixture into the upper left first molar osteotomy using a customized dental guide.",
        url: "https://ibb.co/RkNVBq59",
        fallbackText: "X-ray visualization confirming the highly accurate positioning of the titanium implant fixture."
      },
      {
        id: "step3",
        title: "Appointment 3: Healing Cap Fitting & Soft Tissue Shaping",
        description: "Placement of a customized healing abutment (collar) to guide the shape of the gum line while the titanium fixture integrates with the jawbone.",
        url: "https://ibb.co/yFm9xyq2",
        fallbackText: "Healing cap placement to cultivate natural, aesthetic gum emergence profile."
      },
      {
        id: "step4",
        title: "Appointment 4: Osseointegration Check & Abutment Connection",
        description: "Clinical and radiographic verification of complete osseointegration (titanium fused to bone), followed by connection of the permanent titanium support abutment.",
        url: "https://ibb.co/vCyyLVNh",
        fallbackText: "Verification of structural integration and attachment of the permanent connector."
      },
      {
        id: "step5",
        title: "Appointment 5: Digital Scan & Shade Matching",
        description: "Next-generation intraoral optical impression scanning of the custom abutment. High-accuracy shade matching is performed to match adjacent natural teeth.",
        url: "https://ibb.co/HpLprWr4",
        fallbackText: "Intraoral scan and shade profile capturing for the dental ceramic laboratory."
      },
      {
        id: "step6",
        title: "Appointment 6 (Part A): Laboratory Crown Try-In",
        description: "First clinical fit-check of the bespoke laboratory-milled ceramic crown, ensuring optimal contact points, bite distribution, and natural morphology.",
        url: "https://ibb.co/N2b0msdw",
        fallbackText: "Clinical examination and bite calibration of the custom-crafted crown."
      },
      {
        id: "step7",
        title: "Appointment 6 (Part B): Final Screw-Retained Crown Placement",
        description: "Torquing the finished crown to medical specifications and sealing the access hole with aesthetic composite. Perfect restore of molar function and patient smile.",
        url: "https://ibb.co/8ghSQtcb",
        fallbackText: "Final completed ceramic molar restoration seamlessly integrating with adjacent teeth."
      }
    ],
    beforeAfter: {
      beforeUrl: "https://ibb.co/p65bGxbj",
      afterUrl: "https://ibb.co/8ghSQtcb",
      beforeDesc: "Empty space with bone recession",
      afterDesc: "Fully integrated premium custom molar crown"
    }
  },
  {
    id: 2,
    name: "Patient Case 2: Lower Molar Replacement",
    subtitle: "Replacing Missing Lower Right 6",
    diagnosis: "Missing lower right first molar (Tooth #46 / LR6) resulting in chewing compensation, minor bite stress on surrounding teeth, and local bone volume recession.",
    treatment: "Guided micro-surgical placement of a biocompatible titanium implant root, followed by custom anatomical abutment modeling and a high-strength ceramic molar crown restoration.",
    appointments: 4,
    completed: true,
    coverImage: "https://ibb.co/wHjxHQX",
    images: [
      {
        id: "case2-step1",
        title: "Step 1: Clinical Assessment & 3D Imaging",
        description: "Detailed 3D CBCT bone scan and intraoral optical mapping to evaluate jawbone density and plan the optimal entry vector for the implant post.",
        url: "https://ibb.co/DPCLjyJM",
        fallbackText: "Initial high-precision digital assessment of the missing lower right molar zone."
      },
      {
        id: "case2-step2",
        title: "Step 2: Guided Implant Surgical Placement",
        description: "Precise guided surgical insertion of a medical-grade titanium root fixture into the prepared bone channel, ensuring high primary stability and comfort.",
        url: "https://ibb.co/274KHs41",
        fallbackText: "Clinical view showing the precise insertion of the biocompatible titanium post."
      },
      {
        id: "case2-step3",
        title: "Step 3: Healing Evaluation & Optical Scanning",
        description: "Evaluating tissue healing and taking high-resolution digital optical impressions of the healing abutment to model a bespoke ceramic crown.",
        url: "https://ibb.co/fYYW3vpL",
        fallbackText: "Evaluation of the healing abutment and the precision digital tooth impression scan."
      },
      {
        id: "case2-step4",
        title: "Step 4: Final Custom Crown Placement",
        description: "A custom-milled, color-matched ceramic molar crown is securely torqued onto the implant. Full bite strength, tooth alignment, and a seamless smile are restored.",
        url: "https://ibb.co/wHjxHQX",
        fallbackText: "Final completed ceramic molar restoration in place, blending perfectly with natural teeth."
      }
    ],
    beforeAfter: {
      beforeUrl: "https://ibb.co/DPCLjyJM",
      afterUrl: "https://ibb.co/wHjxHQX",
      beforeDesc: "Missing lower right first molar with bone exposure",
      afterDesc: "Fully restored, natural-looking ceramic crown"
    }
  },
  {
    id: 3,
    name: "Case 3: Dual-Implant Bridge Support",
    subtitle: "Multiple Missing Lower Left Teeth",
    diagnosis: "Two adjacent missing lower left teeth causing notable masticatory strain and bite collapse.",
    treatment: "Dual-implant titanium posts supporting a custom-designed three-unit porcelain bridge, preserving adjacent teeth from grinding.",
    appointments: 5,
    completed: true,
    coverImage: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80",
    images: [],
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
      afterUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80",
      beforeDesc: "Extensive empty sector with minor tissue collapse.",
      afterDesc: "Secure 3-unit bridge restoration over dual supportive implants."
    }
  },
  {
    id: 4,
    name: "Case 4: Full Arch 'All-on-4' Treatment",
    subtitle: "Full Upper Arch Rehabilitation",
    diagnosis: "Failing upper dentition from advanced stage periodontitis with widespread mobility and bone loss.",
    treatment: "Complete upper arch extraction and immediate fixed prosthetic restoration supported securely on 4 titanium implant posts.",
    appointments: 6,
    completed: true,
    coverImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    images: [],
    beforeAfter: {
      beforeUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      afterUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
      beforeDesc: "Periodontally compromised teeth with severe jawbone loss.",
      afterDesc: "Fully customized fixed implant-supported porcelain hybrid bridge."
    }
  }
];

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is a dental implant, and how does it work?",
    answer: "A dental implant is a small biocompatible titanium post that acts as an artificial tooth root. It is surgically placed into your jawbone where the missing tooth was. Over a few months, the bone fuses with the titanium post (osseointegration), creating a highly durable foundation. Once integrated, a custom-crafted ceramic crown is attached to the post, matching your natural teeth perfectly."
  },
  {
    category: "Process",
    question: "How long does the entire dental implant process take?",
    answer: "The process usually spans 3 to 6 months to allow the implant to fully fuse with your jawbone. For Client 1, we successfully restored their molar in 6 strategic appointments, covering diagnostic planning, implant placement, healing checks, digital intraoral scanning, customized crown calibration, and final placement."
  },
  {
    category: "Comfort",
    question: "Does getting a dental implant hurt?",
    answer: "Most patients report very little discomfort during and after the procedure. It is performed under local anesthesia, so you will feel no pain. Afterward, mild soreness can occur which is easily managed with standard over-the-counter pain medication."
  },
  {
    category: "Durability",
    question: "How long do dental implants last?",
    answer: "With proper care and good oral hygiene, dental implants can last a lifetime! The crown attached to the implant typically lasts 15 to 25 years before needing normal wear-and-tear replacement, but the titanium root implant itself is permanent."
  },
  {
    category: "Eligibility",
    question: "Am I a suitable candidate for dental implants?",
    answer: "In general, anyone healthy enough to undergo a routine dental extraction or oral surgery can get an implant. You must have sufficient bone density to support the titanium fixture and healthy gums free of active periodontal disease."
  }
];
