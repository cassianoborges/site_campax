import { CheckCircle2, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "Configure a Câmera",
    description:
      "Conecte sua câmera ao sistema. O AgentAI verifica automaticamente a qualidade do sinal e estabilidade.",
  },
  {
    number: "02",
    title: "Crie o Evento",
    description:
      "O assistente inteligente guia você na criação do velório, pedindo apenas informações essenciais.",
  },
  {
    number: "03",
    title: "Compartilhe o Link",
    description:
      "Links de acesso privado são gerados automaticamente para envio aos familiares via WhatsApp.",
  },
  {
    number: "04",
    title: "Transmita com Qualidade",
    description:
      "Nossa rede de servidores garante transmissão estável e em tempo real para todos os espectadores.",
  },
];

const benefits = [
  "Setup em menos de 5 minutos",
  "Suporte 24/7",
  "Treinamento incluso",
  "SLA de 99.9%",
];

const HowItWorks = () => {
  const left = useScrollAnimation({ threshold: 0.1 });
  const right = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — sticky description */}
          <div
            ref={left.ref as React.RefObject<HTMLDivElement>}
            className={`lg:sticky lg:top-28 reveal-left ${left.isVisible ? "is-visible" : ""}`}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Como Funciona
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Simplicidade em cada etapa
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Nossa plataforma foi desenvolvida para que funcionários de funerárias
              possam configurar transmissões de forma rápida e sem conhecimento
              técnico.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 reveal delay-${(index + 1) * 100} ${left.isVisible ? "is-visible" : ""}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Vertical timeline */}
          <div
            ref={right.ref as React.RefObject<HTMLDivElement>}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border" aria-hidden />

            <div className="space-y-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex gap-6 group reveal delay-${(index + 1) * 100} ${right.isVisible ? "is-visible" : ""}`}
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full border-2 border-border bg-background flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-300">
                    <span className="font-display text-sm font-bold text-secondary/60 group-hover:text-secondary transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8 last:pb-0">
                    <div className="card-elegant p-5 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-base text-foreground">
                          {step.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
