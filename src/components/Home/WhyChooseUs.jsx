import { Users, FileCheck2, ShieldCheck, BarChart3 } from "lucide-react";

const reasons = [
  { icon: Users, title: "Client Focused", text: "We understand your goals and work as your growth partner." },
  { icon: FileCheck2, title: "Transparent Process", text: "Clear communication at every stage." },
  { icon: ShieldCheck, title: "Quality First", text: "We follow best practices to deliver reliable solutions." },
  { icon: BarChart3, title: "Results Driven", text: "Our focus is on measurable growth and long-term success." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#079d89]">Why Choose Us</p>
        <h2 className="mt-2 text-[29px] font-bold tracking-[-1px] text-[#182321]">Why Businesses Choose AYNEX</h2>

        <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#078d7b] text-white">
                <Icon size={19} />
              </div>
              <h3 className="mt-3 text-[12px] font-bold text-[#1a2522]">{title}</h3>
              <p className="mt-1 max-w-[190px] text-[11px] leading-4 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}