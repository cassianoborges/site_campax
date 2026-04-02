import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from "remotion";

// ── Resolução 16:9 para player web ──────────────────────────────────────────
export const VIDEO_FPS    = 30;
export const VIDEO_WIDTH  = 1920;
export const VIDEO_HEIGHT = 1080;

const INTRO_DURATION  = 110;
const SCENE_DURATION  = 200;
const OUTRO_DURATION  = 110;
export const TOTAL_FRAMES =
  INTRO_DURATION + SCENE_DURATION * 4 + OUTRO_DURATION;

// ── Paleta ───────────────────────────────────────────────────────────────────
const C = {
  navy:   "#1a2744",
  navyDk: "#0f1a33",
  gold:   "#c9954a",
  goldLt: "#e5b97a",
  cream:  "#f5f0e8",
  white:  "#ffffff",
};

// ── Gold divider ──────────────────────────────────────────────────────────────
const GoldLine: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame, [delay, delay + 35], [0, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ width: w, height: 3, backgroundColor: C.gold,
                  borderRadius: 2, margin: "14px 0" }} />
  );
};

// ── Feature bullet ────────────────────────────────────────────────────────────
const Feature: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 120 } });
  const ty = interpolate(p, [0, 1], [30, 0]);
  const op = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14,
                  transform: `translateY(${ty}px)`, opacity: op }}>
      <div style={{ width: 10, height: 10, borderRadius: "50%",
                    backgroundColor: C.gold, flexShrink: 0 }} />
      <span style={{ fontSize: 28, color: C.cream, fontWeight: 500 }}>{text}</span>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// INTRO
// ══════════════════════════════════════════════════════════════════════════════
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoomBg = interpolate(frame, [0, INTRO_DURATION], [1.05, 1], {
    extrapolateRight: "clamp",
  });
  const pulse = Math.sin(frame * 0.07) * 0.015 + 1;

  // icon
  const iconP = spring({ frame: frame - 5, fps, config: { damping: 15, stiffness: 100 } });
  const iconScale = interpolate(iconP, [0, 1], [0.7, 1]);
  const iconOp    = interpolate(iconP, [0, 0.3], [0, 1], { extrapolateRight: "clamp" });

  // title
  const titleP = spring({ frame: frame - 12, fps, config: { damping: 18, stiffness: 120 } });
  const titleTy = interpolate(titleP, [0, 1], [50, 0]);
  const titleOp = interpolate(frame, [12, 30], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // subtitle
  const subP = spring({ frame: frame - 30, fps, config: { damping: 18, stiffness: 120 } });
  const subTy = interpolate(subP, [0, 1], [50, 0]);
  const subOp = interpolate(frame, [30, 48], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // tagline
  const tagP = spring({ frame: frame - 45, fps, config: { damping: 18, stiffness: 120 } });
  const tagTy = interpolate(tagP, [0, 1], [50, 0]);
  const tagOp = interpolate(frame, [45, 63], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ fontFamily: "Georgia, serif" }}>
      {/* Fundo: foto real da chapel */}
      <AbsoluteFill>
        <Img
          src={staticFile("Screenshot_2.png")}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: `scale(${zoomBg})`, transformOrigin: "center center",
          }}
        />
      </AbsoluteFill>

      {/* Overlay */}
      <AbsoluteFill style={{
        background: "linear-gradient(135deg,rgba(10,18,40,0.92) 0%,rgba(15,26,51,0.80) 50%,rgba(10,18,40,0.93) 100%)",
      }} />

      {/* Conteúdo */}
      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        {/* Ícone */}
        <div style={{
          fontSize: 90, marginBottom: 24,
          transform: `scale(${iconScale * pulse})`,
          opacity: iconOp,
        }}>
          🕊️
        </div>

        {/* CAMPAX */}
        <div style={{
          fontSize: 112, fontWeight: 900, color: C.white,
          letterSpacing: 10, textAlign: "center",
          transform: `translateY(${titleTy}px)`, opacity: titleOp,
        }}>
          CAMPAX
        </div>

        <GoldLine delay={25} />

        {/* Velório Online */}
        <div style={{
          fontSize: 56, fontWeight: 300, color: C.goldLt,
          letterSpacing: 5, textAlign: "center",
          transform: `translateY(${subTy}px)`, opacity: subOp,
        }}>
          Velório Online
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 32, color: "rgba(255,255,255,0.65)",
          fontStyle: "italic", textAlign: "center",
          marginTop: 20, lineHeight: 1.7,
          transform: `translateY(${tagTy}px)`, opacity: tagOp,
        }}>
          Acompanhe a cerimônia de despedida com respeito e dignidade
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// CENA COM SCREENSHOT – layout 16:9: imagem esquerda | texto direita
// ══════════════════════════════════════════════════════════════════════════════
const ScreenScene: React.FC<{
  imageSrc: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  accentColor?: string;
}> = ({ imageSrc, badge, title, description, features, accentColor = C.gold }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const float = Math.sin(frame * 0.06) * 6;

  // imagem
  const imgP  = spring({ frame: frame - 15, fps, config: { damping: 15, stiffness: 100 } });
  const imgSc = interpolate(imgP, [0, 1], [0.75, 1]);
  const imgOp = interpolate(imgP, [0, 0.3], [0, 1], { extrapolateRight: "clamp" });

  // badge
  const badgeOp = interpolate(frame, [8, 26], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // título
  const titleP  = spring({ frame: frame - 22, fps, config: { damping: 18, stiffness: 120 } });
  const titleTy = interpolate(titleP, [0, 1], [50, 0]);
  const titleOp = interpolate(frame, [22, 40], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  // descrição
  const descP  = spring({ frame: frame - 35, fps, config: { damping: 18, stiffness: 120 } });
  const descTy = interpolate(descP, [0, 1], [50, 0]);
  const descOp = interpolate(frame, [35, 53], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(120deg,${C.navyDk} 0%,${C.navy} 55%,#1e3060 100%)`,
      display: "flex", flexDirection: "row",
      alignItems: "center", fontFamily: "Arial, sans-serif",
    }}>
      {/* ── Esquerda: screenshot ───────────────────────────────────────── */}
      <div style={{
        flex: "0 0 42%", display: "flex",
        alignItems: "center", justifyContent: "center", paddingLeft: 70,
      }}>
        <div style={{
          transform: `scale(${imgSc}) translateY(${float}px)`,
          opacity: imgOp,
        }}>
          <div style={{
            width: 320, borderRadius: 36, overflow: "hidden",
            boxShadow: `0 30px 80px rgba(0,0,0,0.75),0 0 0 4px ${accentColor}`,
            backgroundColor: "#000",
          }}>
            <Img src={imageSrc} style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div style={{ width: 2, height: "55%", backgroundColor: C.gold,
                    opacity: 0.35, flexShrink: 0 }} />

      {/* ── Direita: texto ─────────────────────────────────────────────── */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", paddingInline: 70,
      }}>
        {/* Badge */}
        <div style={{ opacity: badgeOp, marginBottom: 18 }}>
          <span style={{
            backgroundColor: accentColor, color: C.white,
            padding: "8px 28px", borderRadius: 50,
            fontSize: 26, fontWeight: 700, letterSpacing: 1,
          }}>
            {badge}
          </span>
        </div>

        {/* Título */}
        <div style={{
          fontSize: 62, fontWeight: 800, color: C.white, lineHeight: 1.15,
          marginBottom: 4,
          transform: `translateY(${titleTy}px)`, opacity: titleOp,
        }}>
          {title}
        </div>

        <GoldLine delay={28} />

        {/* Descrição */}
        <div style={{
          fontSize: 30, color: "rgba(255,255,255,0.72)",
          fontStyle: "italic", lineHeight: 1.6, marginBottom: 28,
          transform: `translateY(${descTy}px)`, opacity: descOp,
        }}>
          {description}
        </div>

        {/* Features */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {features.map((feat, i) => (
            <Feature key={i} text={feat} delay={48 + i * 12} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// OUTRO
// ══════════════════════════════════════════════════════════════════════════════
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoomBg = interpolate(frame, [0, OUTRO_DURATION], [1, 1.05], {
    extrapolateRight: "clamp",
  });

  const quoteP  = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 120 } });
  const quoteTy = interpolate(quoteP, [0, 1], [40, 0]);
  const quoteOp = interpolate(frame, [5, 23], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const titleP  = spring({ frame: frame - 18, fps, config: { damping: 18, stiffness: 120 } });
  const titleTy = interpolate(titleP, [0, 1], [50, 0]);
  const titleOp = interpolate(frame, [18, 36], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const subP  = spring({ frame: frame - 30, fps, config: { damping: 18, stiffness: 120 } });
  const subTy = interpolate(subP, [0, 1], [50, 0]);
  const subOp = interpolate(frame, [30, 48], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const ctaP  = spring({ frame: frame - 45, fps, config: { damping: 18, stiffness: 120 } });
  const ctaTy = interpolate(ctaP, [0, 1], [50, 0]);
  const ctaOp = interpolate(frame, [45, 63], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const footOp = interpolate(frame, [58, 76], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ fontFamily: "Georgia, serif" }}>
      <AbsoluteFill>
        <Img
          src={staticFile("Screenshot_2.png")}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: `scale(${zoomBg})`, transformOrigin: "center center",
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{
        background: "linear-gradient(135deg,rgba(10,18,40,0.93) 0%,rgba(15,26,51,0.82) 50%,rgba(10,18,40,0.94) 100%)",
      }} />

      <AbsoluteFill style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        {/* Citação */}
        <div style={{
          fontSize: 38, color: C.goldLt, fontStyle: "italic",
          textAlign: "center", maxWidth: 900, lineHeight: 1.7, marginBottom: 48,
          transform: `translateY(${quoteTy}px)`, opacity: quoteOp,
        }}>
          "Unidos em oração e solidariedade, mesmo à distância."
        </div>

        {/* CAMPAX */}
        <div style={{
          fontSize: 108, fontWeight: 900, color: C.white,
          letterSpacing: 8, textAlign: "center",
          transform: `translateY(${titleTy}px)`, opacity: titleOp,
        }}>
          CAMPAX
        </div>

        <GoldLine delay={24} />

        {/* Velório Online */}
        <div style={{
          fontSize: 46, color: C.goldLt, letterSpacing: 4,
          textAlign: "center", marginBottom: 48,
          transform: `translateY(${subTy}px)`, opacity: subOp,
        }}>
          Velório Online
        </div>

        {/* CTA */}
        <div style={{
          transform: `translateY(${ctaTy}px)`, opacity: ctaOp,
        }}>
          <div style={{
            backgroundColor: C.gold, color: C.white,
            borderRadius: 60, paddingInline: 60, paddingBlock: 22,
            fontSize: 38, fontWeight: 700, letterSpacing: 1,
          }}>
            campax.com.br
          </div>
        </div>

        {/* Rodapé */}
        <div style={{
          fontSize: 26, color: "rgba(255,255,255,0.5)",
          marginTop: 24, opacity: footOp,
        }}>
          Respeito e dignidade em cada cerimônia
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// COMPOSIÇÃO PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════
export const CampaxVideo: React.FC = () => {
  const s1  = INTRO_DURATION;
  const s2  = s1 + SCENE_DURATION;
  const s3  = s2 + SCENE_DURATION;
  const s4  = s3 + SCENE_DURATION;
  const out = s4 + SCENE_DURATION;

  return (
    <AbsoluteFill style={{ backgroundColor: C.navyDk }}>
      <Sequence from={0} durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </Sequence>

      <Sequence from={s1} durationInFrames={SCENE_DURATION}>
        <ScreenScene
          imageSrc={staticFile("print1.jpeg")}
          badge="Acesso Simples"
          title="Token de Acesso"
          description="A família recebe um código exclusivo para acompanhar o velório online com total segurança."
          features={[
            "Código de 6 dígitos único por cerimônia",
            "Acesso restrito à família e amigos",
            "Funciona em qualquer celular",
            "Sem cadastro ou instalação",
          ]}
          accentColor="#c9954a"
        />
      </Sequence>

      <Sequence from={s2} durationInFrames={SCENE_DURATION}>
        <ScreenScene
          imageSrc={staticFile("print2.jpeg")}
          badge="Gestão Completa"
          title="Painel Administrativo"
          description="A funerária controla transmissões, tokens e cerimônias em um painel simples e rápido."
          features={[
            "Login seguro para a funerária",
            "Gerenciamento de múltiplos velórios",
            "Controle total de acessos",
            "Interface intuitiva e rápida",
          ]}
          accentColor="#8a6fc9"
        />
      </Sequence>

      <Sequence from={s3} durationInFrames={SCENE_DURATION}>
        <ScreenScene
          imageSrc={staticFile("print3.jpeg")}
          badge="Ao Vivo"
          title="Transmissão em Tempo Real"
          description="Câmera ao vivo da cerimônia diretamente no celular da família, onde quer que esteja."
          features={[
            "Stream ao vivo de alta qualidade",
            "Nome, cidade e data da cerimônia",
            "Mensagem de homenagem personalizada",
            "Integração com câmera IP",
          ]}
          accentColor="#4caf86"
        />
      </Sequence>

      <Sequence from={s4} durationInFrames={SCENE_DURATION}>
        <ScreenScene
          imageSrc={staticFile("print_suporte.png")}
          badge="Suporte Humanizado"
          title="Atendimento via WhatsApp"
          description="Equipe Campax configura tudo e envia o link exclusivo para a família em minutos."
          features={[
            "Suporte rápido e empático",
            "Link exclusivo gerado na hora",
            "Fácil compartilhamento com a família",
            "Disponível 24 horas por dia",
          ]}
          accentColor="#4caf50"
        />
      </Sequence>

      <Sequence from={out} durationInFrames={OUTRO_DURATION}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
