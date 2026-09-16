const testimonials = [
  { quote: "AYNEX delivered a great website for our business. The team was professional and easy to work with.", name: "Rohit Sharma", company: "Founder, Shoply" },
  { quote: "Excellent experience from start to finish. They understood our needs and delivered beyond expectations.", name: "Priya Mehta", company: "Marketing Head, GrowBiz" },
  { quote: "Professional team with strong technical knowledge. Highly recommended.", name: "Aman Khan", company: "CEO, EduNext" },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#079d89]">Testimonials</p>
        <h2 className="mt-2 text-[28px] font-bold tracking-[-1px] text-[#182321]">What Our Clients Say</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-[11px] leading-4 text-slate-500">“{item.quote}”</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[9px] font-bold text-white">{item.name.charAt(0)}</div>
                  <div>
                    <p className="text-[10px] font-bold text-[#1a2522]">{item.name}</p>
                    <p className="text-[9px] text-slate-400">{item.company}</p>
                  </div>
                </div>
                <div className="text-[11px] tracking-[1px] text-amber-400">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}