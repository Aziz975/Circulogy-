import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

function CareerApplication() {
  return (
    <section className="relative overflow-hidden bg-[#f2faf8] px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-[110px]">
      <div className="absolute -bottom-[180px] -left-[100px] h-[380px] w-[380px] rounded-full border border-[#9dd5cf]/30"></div>
      <div className="absolute -bottom-[150px] -left-[50px] h-[270px] w-[270px] rounded-full border border-[#9dd5cf]/25"></div>

      <div className="relative mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <p className="text-[8px] font-bold tracking-[1.3px] text-[#148d7e]">START A CONVERSATION</p>

          <h2 className="mt-5 max-w-[300px] text-[38px] font-medium leading-[0.95] tracking-[-1.8px] text-[#073b3b] sm:text-[44px]">
            Ready to
            <br />
            Make an
            <br />
            <span className="text-[#149986]">Impact?</span>
          </h2>

          <p className="mt-6 max-w-[290px] text-[10px] leading-[1.65] text-[#667d79]">
            Tell us where you see yourself contributing to the circular movement. We're always looking for curious minds who want to build a cleaner, more sustainable India.
          </p>

          <div className="mt-6 text-[7px] font-medium tracking-[1.2px] text-[#8ba19d]">PEOPLE&nbsp;&nbsp;·&nbsp;&nbsp;TECHNOLOGY&nbsp;&nbsp;·&nbsp;&nbsp;IMPACT</div>

          <p className="mt-20 max-w-[120px] text-[7px] font-bold uppercase tracking-[1.2px] text-[#6c817d]">THE NEXT CYCLE STARTS WITH PEOPLE</p>
        </div>

        <form className="rounded-[9px] border border-[#dce9e6] bg-white p-5 shadow-[0_10px_35px_rgba(0,70,60,0.08)] sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[7px] font-bold uppercase text-[#667d79]">FIRST NAME</label>
              <input type="text" placeholder="Enter your first name" className="h-[38px] w-full rounded-[4px] border border-[#dce5e3] px-3 text-[9px] outline-none placeholder:text-[#a2afac] focus:border-[#35a99b]" />
            </div>

            <div>
              <label className="mb-2 block text-[7px] font-bold uppercase text-[#667d79]">LAST NAME</label>
              <input type="text" placeholder="Enter your last name" className="h-[38px] w-full rounded-[4px] border border-[#dce5e3] px-3 text-[9px] outline-none placeholder:text-[#a2afac] focus:border-[#35a99b]" />
            </div>

            <div>
              <label className="mb-2 block text-[7px] font-bold uppercase text-[#667d79]">EMAIL</label>
              <input type="email" placeholder="Enter your email address" className="h-[38px] w-full rounded-[4px] border border-[#dce5e3] px-3 text-[9px] outline-none placeholder:text-[#a2afac] focus:border-[#35a99b]" />
            </div>

            <div>
              <label className="mb-2 block text-[7px] font-bold uppercase text-[#667d79]">POSITION APPLYING FOR</label>
              <select className="h-[38px] w-full rounded-[4px] border border-[#dce5e3] bg-white px-3 text-[9px] outline-none focus:border-[#35a99b]">
                <option>Select a position</option>
                <option>Business Development</option>
                <option>Executive Assistant</option>
                <option>Public Relation</option>
                <option>Partner Onboarding Executive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[7px] font-bold uppercase text-[#667d79]">WHERE DID YOU KNOW ABOUT US?</label>
              <input type="text" placeholder="e.g. LinkedIn, referral, website" className="h-[38px] w-full rounded-[4px] border border-[#dce5e3] px-3 text-[9px] outline-none placeholder:text-[#a2afac] focus:border-[#35a99b]" />
            </div>

            <div>
              <label className="mb-2 block text-[7px] font-bold uppercase text-[#667d79]">DATE OF BIRTH</label>
              <input type="date" className="h-[38px] w-full rounded-[4px] border border-[#dce5e3] px-3 text-[9px] outline-none focus:border-[#35a99b]" />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-[7px] font-bold uppercase text-[#667d79]">UPLOAD CV</label>

            <label className="flex h-[125px] cursor-pointer flex-col items-center justify-center rounded-[5px] border border-dashed border-[#c6dfda] bg-[#fbfdfc] transition-colors hover:border-[#35a99b]">
              <input type="file" className="hidden" />
              <span className="text-[25px] text-[#35a99b]"><IoCloudUploadOutline /></span>
              <span className="mt-2 text-[9px] font-semibold text-[#405d58]">Drop your CV here</span>
              <span className="mt-1 text-[7px] text-[#9aa9a5]">PDF, DOC or DOCX</span>
              <span className="mt-3 rounded-[3px] border border-[#dce8e5] px-3 py-1.5 text-[7px] font-bold text-[#42605b]">Browse Files</span>
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[290px] text-[7px] leading-[1.5] text-[#899a96]">
              By submitting, you agree that Circulogy may use your information to review and respond to your application.
            </p>

            <button type="submit" className=" animate-bounce h-[37px] rounded-[6px] bg-[#078b78] px-6 text-[9px] font-bold text-white transition-all duration-300 hover:bg-[#056e60]">
              Apply Now&nbsp;&nbsp;→
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CareerApplication;