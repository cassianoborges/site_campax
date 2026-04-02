const stats = [
  { value: "30+", label: "Servidores Globais" },
  { value: "99.9%", label: "Disponibilidade" },
  { value: "24/7", label: "Suporte Técnico" },
  { value: "500+", label: "Transmissões/Mês" }
];

const Stats = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
