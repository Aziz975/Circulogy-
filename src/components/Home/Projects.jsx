const projects = [
  { title: "E-Commerce Website", category: "E-Commerce" },
  { title: "Business Website", category: "Corporate" },
  { title: "Education Platform", category: "Education" },
];

export default function Projects() {
  return (
    <section id="portfolio" className="bg-white pb-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#079d89]">Our Work</p>
            <h2 className="mt-2 text-[28px] font-bold tracking-[-1px] text-[#182321]">Featured Projects</h2>
          </div>
          <a href="#" className="hidden text-[10px] font-bold text-[#079d89] sm:block">View All Projects →</a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className={`relative h-[155px] overflow-hidden ${index === 0 ? "bg-[#d8e5e0]" : index === 1 ? "bg-[#172725]" : "bg-[#d8e1ef]"}`}>
                <div className="absolute left-[13%] top-[15%] h-[105px] w-[75%] rounded-md border border-white/40 bg-black/20 shadow-lg" />
                <div className="absolute left-[22%] top-[27%] h-[75px] w-[60%] rounded bg-white/10" />
                <div className="absolute bottom-2 left-4 h-8 w-8 rounded-full bg-green-700/60" />
                <div className="absolute bottom-2 right-4 h-8 w-8 rounded-full bg-green-700/60" />
              </div>

              <div className="p-4">
                <h3 className="text-[12px] font-bold text-[#1b2523]">{project.title}</h3>
                <p className="mt-1 text-[10px] text-slate-400">{project.category}</p>
                <a href="#" className="mt-3 inline-block text-[10px] font-bold text-[#079d89]">View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}