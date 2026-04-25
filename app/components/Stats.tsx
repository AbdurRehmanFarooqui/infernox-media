export default function Sats(){
      const stats = [
    { number: "200+", label: "Long Form  \nVideos Edited" },
    { number: "999+", label: "Short Form\nVideos Edited" },
    { number: "300+", label: "Satisfied Clients\nWorldwide" },
  ];
    return(
        <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <h2 className="text-xl md:text-2xl font-conthrax-book max-w-xs leading-snug">
            A strong online presence isn't optional anymore
          </h2>
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-5xl font-conthrax-book font-bold mb-2 hover:scale-120 hover:text-[#7B00FF] duration-500 cursor-pointer">{stat.number}</span>
                <span className="text-white text-xs md:text-sm whitespace-pre-line leading-relaxed font-conthrax-book">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
    )
}