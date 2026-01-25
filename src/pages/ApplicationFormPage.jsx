import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-black via-[#0e0abf] to-black p-12">
        <div className="h-full flex flex-col justify-center text-white">
          <h3 className="text-4xl font-bold mb-6 text-[#ffc916]">
            SkillCraft Internship Application
          </h3>

          <p className="text-lg text-white/80 mb-10 max-w-md">
            Take the next step toward building real-world skills, leadership
            experience, and a strong tech foundation.
          </p>

          <div className="space-y-4">
            {[
              "100% sponsored internship program",
              "Hands-on training & mentorship",
              "Real-world projects & assessments",
              "Career growth opportunities",
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <Check className="w-6 h-6 mr-3 text-[#ffc916]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full">

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/kamlewa1.svg" alt="SkillCraft Logo" className="w-20 h-20" />
            <span className="text-xl font-bold text-[#ffc916]">
              SkillCraft
            </span>
          </div>

          <h2 className="text-3xl font-bold text-black mb-2">
            Application Form
          </h2>
          <p className="text-gray-600 mb-8">
            Please fill in all required details carefully
          </p>

          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-[#0e0abf]
                           focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-[#0e0abf]
                           focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* School */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                           bg-white
                           focus:ring-2 focus:ring-[#0e0abf]
                           focus:border-transparent outline-none transition"
                required
              >
                <option value="">Select your institution</option>
                <option>University of Buea</option>
                <option>Catholic University Institute of Buea</option>
                <option>University of Bamenda</option>
                <option>University of Yaounde I</option>
                <option>Other</option>
              </select>
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload CV (PDF only)
              </label>
              <input
                type="file"
                accept=".pdf"
                className="w-full text-sm
                           file:bg-[#0e0abf]
                           file:text-white
                           file:border-0
                           file:px-4
                           file:py-2
                           file:rounded-lg
                           hover:file:bg-[#ffc916]
                           hover:file:text-black
                           transition"
                required
              />
            </div>

            {/* Leadership */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leadership Experience
              </label>
              <textarea
                rows="4"
                placeholder="Describe a situation where you demonstrated leadership skills"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-[#0e0abf]
                           focus:border-transparent outline-none transition resize-none"
                required
              />
            </div>

            {/* Why Internship */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why should we select you?
              </label>
              <textarea
                rows="4"
                placeholder="Explain how this internship will benefit you and your career"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-[#0e0abf]
                           focus:border-transparent outline-none transition resize-none"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold
                         bg-[#ffc916] text-black
                         hover:bg-[#e1b787]
                         transition"
            >
              Submit Application
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ApplicationFormPage;
