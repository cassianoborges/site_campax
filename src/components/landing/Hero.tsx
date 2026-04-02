import { Button } from "@/components/ui/button";
import { Play, Shield, Globe, Wifi } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Geometric background shapes — no blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] border border-white/5 rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute top-0 right-0 w-[28vw] h-[28vw] border border-white/5 rounded-full translate-x-1/4 -translate-y-1/6" />
        <div className="absolute bottom-0 left-0 w-[32vw] h-[32vw] border border-white/5 rounded-full -translate-x-1/3 translate-y-1/3" />
        {/* Horizontal accent line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
              <span className="text-primary-foreground/80 text-xs md:text-sm font-medium">
                +30 servidores globais · 99.9% disponibilidade
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-primary-foreground leading-[1.15] mb-6 animate-slide-up">
              Presente quando a distância{" "}
              <span className="text-secondary relative">
                não pode separar
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg text-primary-foreground/65 max-w-xl mb-10 animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              Plataforma B2B de transmissão ao vivo para velórios. Permita que
              familiares participem de cerimônias com segurança, respeito e
              alta qualidade técnica — de qualquer lugar do mundo.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 mb-14 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a href="#contato">
                <Button
                  variant="hero"
                  size="xl"
                  className="transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Agendar Demonstração
                </Button>
              </a>
              <a href="#como-funciona">
                <Button
                  variant="hero-outline"
                  size="xl"
                  className="group transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Play className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  Ver Como Funciona
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-3 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2 text-primary-foreground/65">
                <Shield className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Conformidade LGPD</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/65">
                <Globe className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Baixa Latência Global</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/65">
                <Wifi className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">AgentAI Integrado</span>
              </div>
            </div>
          </div>

          {/* Right — Visual app mockup card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <div className="relative w-full max-w-lg">
              {/* Glow ring */}
              <div className="absolute inset-4 rounded-2xl bg-secondary/15 blur-2xl -z-10" />

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">
                {/* Live indicator bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase">
                      Ao Vivo
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-primary-foreground/50" />
                    <span className="text-primary-foreground/50 text-xs">247 visualizando</span>
                  </div>
                </div>

                {/* Main screen area — vídeo promocional */}
                <div className="relative overflow-hidden bg-black">
                  <video
                    src="/campax-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  />
                </div>

                {/* Info row */}
                <div className="px-4 py-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-foreground/90 text-sm font-semibold">
                      Cerimônia de Despedida
                    </span>
                    <span className="text-xs text-secondary font-medium bg-secondary/15 px-2 py-0.5 rounded-full">
                      Privado
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-primary-foreground/50 text-xs">Link seguro · LGPD</span>
                  </div>
                </div>

                {/* Token input mockup */}
                <div className="px-4 pb-4">
                  <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 flex items-center justify-between gap-3">
                    <span className="text-primary-foreground/40 text-xs tracking-widest font-mono">
                      ● ● ● ● ● ●
                    </span>
                    <button className="text-xs text-secondary font-semibold hover:underline">
                      Acessar
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating badge — viewers */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border/60 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-secondary/30 border-2 border-card" />
                  ))}
                </div>
                <span className="text-xs font-medium text-foreground">+247 conectados</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
