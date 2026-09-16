import { Monitor, ShoppingCart, Palette, Megaphone, BarChart3, Settings } from "lucide-react";

const services = [
  { icon: Monitor, title: "Web Development", text: "Modern, scalable and high-performance websites." },
  { icon: ShoppingCart, title: "E-Commerce Development", text: "Powerful online stores that drive sales." },
  { icon: Palette, title: "UI/UX Design", text: "User-centered designs that create real impact." },
  { icon: Megaphone, title: "Digital Marketing", text: "Result-driven marketing strategies for your business." },
  { icon: BarChart3, title: "SEO", text: "Improve visibility and ranking on search engines." },
  { icon: Settings, title: "Custom Software Solutions", text: "Tailored solutions for unique business needs." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#079c88]">Our Services</p>
        <h2 className="mt-2 text-[30px] font-bold tracking-[-1px] text-[#182321] lg:text-[32px]">Digital Solutions Built for Your Business</h2>
        <p className="mt-2 max-w-[760px] text-[13px] leading-5 text-slate-500">We combine technology, design and strategy to create digital experiences that deliver real business results.</p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group min-h-[135px] rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#82d8ca] hover:shadow-[0_12px_35px_rgba(13,120,105,0.08)]">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e3f8f4] text-[#079f8c]">
                  <Icon size={19} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-[#192421]">{title}</h3>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">{text}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-[#079f8c]">
                    Learn More <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}