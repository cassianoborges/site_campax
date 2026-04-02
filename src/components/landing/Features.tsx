import { Video, Bot, Shield, BarChart3, Camera, Link as LinkIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Video,
    title: "Transmissão em Alta Qualidade",
    description:
      "Streaming com baixa latência usando nossa rede de +30 servidores globais para garantir que cada momento chegue sem atrasos.",
  },
  {
    icon: Bot,
    title: "AgentAI Assistente",
    description:
      "Inteligência artificial que guia o funcionário na criação de eventos, monitora a qualidade do sinal e gera links automaticamente.",
  },
  {
    icon: Shield,
    title: "Privacidade Garantida",
    description:
      "Acesso via link privado ou senha, garantindo que apenas convidados possam participar da cerimônia.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description:
      "Dados de audiência e logs de transmissão para controle interno e melhoria contínua do serviço.",
  },
  {
    icon: Camera,
    title: "Gestão de Câmeras",
    description:
      "Configuração simplificada de hardware e integração direta com os servidores de streaming.",
  },
  {
    icon: LinkIcon,
    title: "Convites Automáticos",
    description:
      "Criação automática de convites digitais para envio via WhatsApp aos familiares.",
  },
];

const delayMap = ["delay-100", "delay-200", "delay-300", "delay-100", "delay-200", "delay-300"];

const Features = () => {
  const heading = useScrollAnimation();
  const grid = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="recursos" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div
          ref={heading.ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 reveal ${heading.isVisible ? "is-visible" : ""}`}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Tecnologia a serviço do acolhimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma plataforma completa para gerenciar transmissões de velórios com
            eficiência e sensibilidade.
          </p>
        </div>

        {/* Features — alternating layout (no equal grid) */}
        <div
          ref={grid.ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border/40 rounded-2xl overflow-hidden"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card p-8 group hover:bg-secondary/5 transition-all duration-300 reveal ${delayMap[index]} ${grid.isVisible ? "is-visible" : ""}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>

              {/* Number — subtle */}
              <span className="text-xs font-mono text-muted-foreground/40 tracking-widest mb-3 block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
