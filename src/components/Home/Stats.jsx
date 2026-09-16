const stats = [
  { number: "100+", label: "Projects" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="border-t border-white/10 bg-[#061817] text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-3 px-6 lg:px-8">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`py-7 ${index !== 0 ? "border-l border-white/15 pl-7 lg:pl-10" : ""}`}>
            <div className="text-[27px] font-semibold tracking-[-1px]">{stat.number}</div>
            <div className="mt-1 text-[11px] text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}