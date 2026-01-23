import {
  CpuChipIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import CountUp from "../components/CountUp";

export default function Application() {
  return (
    <div className="relative min-h-screen bg-black text- overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/2026.png"
          alt=""
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/0" />
      </div>

      {/* Floating Tech Icons */}
      <CpuChipIcon className="absolute top-24 left-16 w-16 text-[#0e0abf]/40 animate-pulse" />
      <ShieldCheckIcon className="absolute bottom-40 right-20 w-20 text-[#ffc916]/30 animate-pulse" />
      <SparklesIcon className="absolute top-1/2 right-1/3 w-12 text-white/20 animate-ping" />

      import CountUp from "../components/CountUp";

{/* HERO */}
<section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">

  {/* Text */}
  <div>
    <h1 className="text-5xl font-bold text-[#ffc916] leading-tight">
      SkillCraft Internship
      <span className="block text-white text-3xl mt-2">
        Program 2025
      </span>
    </h1>

    <p className="mt-6 text-white/70 text-lg max-w-xl">
      A hands-on, elite technology internship designed to produce
      industry-ready engineers, innovators, and security professionals.
    </p>
  </div>

  {/* Glass Hero Card */}
  <div className="
    bg-black/60 
    backdrop-blur-xl 
    border border-white/10 
    rounded-3xl 
    p-10 
    shadow-[0_0_80px_rgba(255,255,255,0.06)]
  ">
    <p className="text-sm text-white/50 uppercase tracking-wider mb-6">
      Program Overview — 2025
    </p>

    <div className="grid grid-cols-3 gap-6 text-center">
      <div>
        <h2 className="text-4xl font-bold text-[#0e0abf]">
          <CountUp end={50} />
        </h2>
        <p className="text-xs text-white/60 mt-2 tracking-wide">
          Applicants
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#ffc916]">
          <CountUp end={20} />
        </h2>
        <p className="text-xs text-white/60 mt-2 tracking-wide">
          Trained
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#0e0abf]">
          <CountUp end={14} />
        </h2>
        <p className="text-xs text-white/60 mt-2 tracking-wide">
          Successful
        </p>
      </div>
    </div>
  </div>

</section>

<section className="relative max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-10">

  {/* Cybersecurity Track */}
  <div className="
    bg-black/60 
    backdrop-blur 
    border border-[#ffc916]/20 
    rounded-2xl 
    p-8 
    transition 
    hover:border-[#ffc916] 
    hover:shadow-[0_0_40px_rgba(255,201,22,0.15)]
  ">
    <ShieldCheckIcon className="w-10 text-[#ffc916] mb-4" />

    <h2 className="text-xl font-semibold text-white mb-3">
      Cybersecurity & Network Security
    </h2>

    <ul className="text-white/70 space-y-2 text-sm">
      <li>• Cybersecurity</li>
      <li>• Network Security</li>
      <li>• Related ICT security fields</li>
    </ul>
  </div>

  {/* Software Track */}
  <div className="
    bg-black/60 
    backdrop-blur 
    border border-[#0e0abf]/20 
    rounded-2xl 
    p-8 
    transition 
    hover:border-[#0e0abf] 
    hover:shadow-[0_0_40px_rgba(14,10,191,0.2)]
  ">
    <CpuChipIcon className="w-10 text-[#0e0abf] mb-4" />

    <h2 className="text-xl font-semibold text-white mb-3">
      Computer Science & Software Engineering
    </h2>

    <ul className="text-white/70 space-y-2 text-sm">
      <li>• Computer Science</li>
      <li>• Software Engineering</li>
      <li>• Related computing disciplines</li>
    </ul>
  </div>

</section>


      {/* ELIGIBILITY */}
<section className="relative max-w-5xl mx-auto px-6 mb-32">
  <div className="
    bg-black/60
    backdrop-blur-xl
    border border-white/10
    rounded-3xl
    p-10
    shadow-[0_0_60px_rgba(255,255,255,0.04)]
  ">

    {/* Title */}
    <h2 className="text-2xl font-bold text-white mb-8 tracking-wide">
      Eligibility Criteria
    </h2>

    {/* Criteria Grid */}
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-white/75 text-sm">
      {[
        "Cameroonian citizen",
        "Level 3 or Final Year student",
        "Minimum GPA of 3.0",
        "Seeking academic or industrial internship",
        "Active in community or tech spaces",
        "Strong interest in technology",
        "Foundational knowledge in chosen track",
        "Available to start in April",
      ].map((item) => (
        <div key={item} className="flex items-start gap-3">
          <span className="text-[#ffc916] mt-1">•</span>
          <p>{item}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <a
        href="#apply-form"
        className="
          inline-block 
          bg-[#ffc916] 
          text-black 
          font-bold 
          px-12 py-4 
          rounded-full 
          tracking-wide
          shadow-[0_0_30px_rgba(255,201,22,0.35)]
          hover:bg-[#0e0abf] 
          hover:text-white 
          hover:shadow-[0_0_40px_rgba(14,10,191,0.4)]
          transition-all duration-300
        "
      >
        Apply Now
      </a>
    </div>

  </div>
</section>


{/* FORM */}
<section id="apply-form" className="relative max-w-5xl mx-auto px-6 pb-32">
  <div className="
    bg-black/60 
    backdrop-blur-xl 
    border border-white/10 
    rounded-3xl 
    p-10
    shadow-[0_0_60px_rgba(255,255,255,0.05)]
  ">

    {/* Title */}
    <h2 className="text-2xl font-bold text-white mb-8 tracking-wide">
      Application Form
    </h2>

    <form className="space-y-6">

      {/* Text Inputs */}
      {["Full Name", "Email Address"].map((label) => (
        <input
          key={label}
          type={label === "Email Address" ? "email" : "text"}
          placeholder={label}
          className="
            w-full 
            bg-black/40 
            text-white 
            placeholder-white/40
            border border-white/15 
            rounded-xl 
            px-4 py-3
            focus:outline-none 
            focus:border-[#ffc916]
            focus:ring-2 focus:ring-[#ffc916]/40
            transition
          "
        />
      ))}

      {/* File Upload */}
      <div className="relative">
        <input
          type="file"
          className="
            w-full 
            text-sm text-white/70
            file:bg-[#0e0abf]
            file:text-white
            file:border-0
            file:px-4
            file:py-2
            file:rounded-lg
            file:cursor-pointer
            hover:file:bg-[#ffc916]
            hover:file:text-black
            transition
          "
        />
      </div>

      {/* Portfolio */}
      <input
        type="url"
        placeholder="Portfolio (optional)"
        className="
          w-full 
          bg-black/40 
          text-white 
          placeholder-white/40
          border border-white/15 
          rounded-xl 
          px-4 py-3
          focus:outline-none 
          focus:border-[#0e0abf]
          focus:ring-2 focus:ring-[#0e0abf]/40
          transition
        "
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="
          w-full 
          bg-[#ffc916] 
          text-black 
          font-bold 
          py-4 
          rounded-xl 
          tracking-wide
          hover:bg-[#0e0abf] 
          hover:text-white 
          shadow-[0_0_30px_rgba(255,201,22,0.25)]
          hover:shadow-[0_0_40px_rgba(14,10,191,0.35)]
          transition-all duration-300
        "
      >
        Submit Application
      </button>

    </form>
  </div>
</section>

     
    </div>
  );
}
