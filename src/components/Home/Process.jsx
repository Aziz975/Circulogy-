import { MessageCircle, ClipboardList, Code2, BarChart3 } from "lucide-react";

const process = [
  { number: "01", icon: MessageCircle, title: "Discuss", text: "We understand your goals and requirements." },
  { number: "02", icon: ClipboardList, title: "Plan", text: "We create a clear strategy and project roadmap." },
  { number: "03", icon: Code2, title: "Develop", text: "We turn ideas into a functional digital solution." },
  { number: "04", icon: BarChart3, title: "Deliver", text: "We launch, optimize and support your project." },
];

export default function Process() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#079d89]">Our Process</p>
        <h2 className="mt-2 text-[28px] font-bold tracking-[-1px] text-[#182321]">How We Work</h2>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(({ number, icon: Icon, title, text }) => (
            <div key={number} className="relative flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#078d7b] text-white">
                <Icon size={17} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-400">{number}</span>
                  <h3 className="text-[12px] font-bold text-[#182321]">{title}</h3>
                </div>
                <p className="mt-1 text-[10px] leading-4 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}