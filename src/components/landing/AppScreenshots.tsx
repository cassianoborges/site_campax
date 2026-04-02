import { useState } from "react";

const screens = [
  {
    id: 1,
    src: "/img/print1.jpeg",
    title: "Acesso por Token",
    description:
      "Familiares recebem um código exclusivo de 6 dígitos para acessar a transmissão com privacidade e segurança.",
  },
  {
    id: 2,
    src: "/img/print2.jpeg",
    title: "Área Administrativa",
    description:
      "Funerárias gerenciam velórios, usuários e transmissões em uma interface simples e intuitiva.",
  },
  {
    id: 3,
    src: "/img/print3.jpeg",
    title: "Transmissão ao Vivo",
    description:
      "Câmera ao vivo direto do velório, com identificação do falecido e mensagem de condolências.",
  },
];

const AppScreenshots = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-background" id="demonstracao">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Demonstração
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veja o sistema em ação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma plataforma desenvolvia para ser simples, segura e acessível para
            qualquer familiar, de qualquer lugar.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-secondary/20 blur-2xl scale-110 -z-10" />

              {/* Phone frame */}
              <div className="relative w-[240px] sm:w-[280px] md:w-[300px] rounded-[2.5rem] border-4 border-border/60 bg-card shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-b-2xl z-10" />

                {/* Screen image */}
                <div className="relative h-[480px] sm:h-[560px] md:h-[600px] overflow-hidden">
                  {screens.map((screen, i) => (
                    <img
                      key={screen.id}
                      src={screen.src}
                      alt={screen.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                        i === active
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-card/80 backdrop-blur-sm flex items-center justify-center gap-4">
                  <div className="w-12 h-1 rounded-full bg-border" />
                </div>
              </div>

              {/* Dot navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 h-2.5 bg-secondary"
                        : "w-2.5 h-2.5 bg-border hover:bg-secondary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full">
            {screens.map((screen, i) => (
              <button
                key={screen.id}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl border p-4 md:p-5 transition-all duration-300 group ${
                  i === active
                    ? "border-secondary/60 bg-secondary/10 shadow-lg shadow-secondary/10"
                    : "border-border/50 bg-card hover:border-secondary/30 hover:bg-secondary/5"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Number badge */}
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      i === active
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-secondary/20"
                    }`}
                  >
                    {screen.id}
                  </span>

                  <div>
                    <h3
                      className={`font-semibold text-base mb-1 transition-colors ${
                        i === active ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {screen.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
