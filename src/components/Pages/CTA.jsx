import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#08a995] py-10 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/80">Ready to Start?</p>
          <h2 className="mt-2 text-[27px] font-bold tracking-[-1px]">Let's Build Something Great Together</h2>
          <p className="mt-1 text-[11px] text-white/75">Have an idea or project in mind? Let's turn it into a digital experience that makes an impact.</p>
        </div>

        <a href="#" className="flex shrink-0 items-center gap-2 rounded-md bg-white px-7 py-3.5 text-[10px] font-bold text-[#12312d] transition-all hover:bg-slate-100">
          Get in Touch <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}