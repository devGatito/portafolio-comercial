// src/components/FeatureCards.jsx

import { useRef, useState } from "react";

const cards = [
  {
    title: "Live Pricing",
    
    description:
      "Experience truly live pricing. Unlike other tools, there are no delays—get instant, real-time quotes every time.",
    cta: "Preview live pricing",
  },
  {
    title: "Analyst estimates",
    
    description:
      "Access analyst forecasts, expectations and market estimates in one focused view.",
  },
  {
    title: "Company financials",
   
    description:
      "Explore company financial data, reports and performance metrics.",
  },
  {
    title: "Peer analysis",
   
    description:
      "Compare companies against peers and understand relative performance.",
  },
  {
    title: "Historical earnings",
   
    description:
      "Review historical earnings and discover how performance has evolved.",
  },
  {
    title: "Insider transactions",
   
    description:
      "Track insider activity and relevant transactions across companies.",
  },
  {
    title: "Email updates",
    description:
      "Receive important market and company updates directly in your inbox.",
  },
];

export default function FeatureCards() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -5,
      y: x * 7,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white">
      {/* Luz ambiental */}
      <div className="pointer-events-none absolute left-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-red-950/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            <span className="relative mr-2 text-white/45">
              One
              <span className="absolute left-0 top-1/2 h-px w-full bg-white/60" />
            </span>

            a few more things.
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
            There's even more to discover. Everything you need to accelerate
            your workflow.
          </p>
        </div>

        {/* Perspective */}
        <div
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative"
          style={{
            perspective: "1400px",
          }}
        >
          <div
            className="flex h-[360px] gap-2 transition-transform duration-300 ease-out"
            style={{
              transform: `
                rotateX(${tilt.x}deg)
                rotateY(${tilt.y}deg)
                translate3d(${tilt.y * 1.5}px, ${tilt.x * 1.5}px, 0)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((card, index) => {
              const isActive = active === index;
              

              return (
                <article
                  key={card.title}
                  onMouseEnter={() => setActive(index)}
                  className={[
                    "group relative cursor-pointer overflow-hidden",
                    "rounded-xl border border-white/[0.06]",
                    "bg-[#0b0b10]",
                    "transition-[flex,transform,opacity,background-color]",
                    "duration-700 ease-[cubic-bezier(.16,1,.3,1)]",
                    isActive
                      ? "flex-[4.2] bg-[#111117]"
                      : "flex-[0.72] opacity-75 hover:opacity-100",
                  ].join(" ")}
                  style={{
                    transform: isActive
                      ? "translateZ(30px)"
                      : "translateZ(0px)",
                  }}
                >
                  {/* Gradient interno */}
                  <div
                    className={[
                      "absolute inset-0 transition-opacity duration-700",
                      isActive ? "opacity-100" : "opacity-20",
                    ].join(" ")}
                    style={{
                      background:
                        index === 0
                          ? `
                            radial-gradient(
                              circle at 20% 100%,
                              rgba(142, 76, 69, .30),
                              transparent 44%
                            ),
                            linear-gradient(
                              145deg,
                              #0d0d13 10%,
                              #131016 100%
                            )
                          `
                          : `
                            radial-gradient(
                              circle at 50% 70%,
                              rgba(255,255,255,.12),
                              transparent 28%
                            )
                          `,
                    }}
                  />

                  {/* Shine vertical */}
                  <div
                    className={[
                      "pointer-events-none absolute inset-0",
                      "transition-opacity duration-700",
                      isActive ? "opacity-100" : "opacity-40",
                    ].join(" ")}
                  >
                    <div className="absolute left-1/2 top-0 h-full w-[45%] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent blur-xl" />
                  </div>

                  {/* Título vertical cuando está cerrado */}
                  <div
                    className={[
                      "absolute left-1/2 top-5",
                      "origin-top-left whitespace-nowrap",
                      "transition-all duration-500",
                      isActive
                        ? "pointer-events-none opacity-0"
                        : "opacity-100",
                    ].join(" ")}
                    style={{
                      writingMode: "vertical-rl",
                    }}
                  >
                    <span className="text-[11px] font-medium tracking-wide text-white/75">
                      {card.title}
                    </span>
                  </div>

                  {/* Contenido expandido */}
                  <div
                    className={[
                      "relative z-10 flex h-full flex-col",
                      "p-6 transition-all duration-500",
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-5 opacity-0",
                    ].join(" ")}
                  >
                    <h3 className="text-lg font-medium">
                      {card.title}
                    </h3>

                    <div className="mt-auto max-w-sm">
                      <p className="text-sm leading-6 text-white/55">
                        {card.description}
                      </p>

                      {card.cta && (
                        <button className="mt-5 flex items-center gap-2 text-xs font-medium text-white/80 transition hover:text-white">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15">
                            ↗
                          </span>

                          {card.cta}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Icono inferior */}
                  <div
                    className={[
                      "absolute bottom-5 transition-all duration-500",
                      isActive
                        ? "right-5 opacity-0"
                        : "left-1/2 -translate-x-1/2 opacity-60",
                    ].join(" ")}
                  >
                    
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Forma inferior decorativa */}
      <div className="pointer-events-none absolute bottom-[-170px] left-1/2 h-[300px] w-[120%] -translate-x-1/2 rotate-[-5deg] rounded-[50%] border-t border-white/30 bg-gradient-to-b from-white/[0.08] via-white/[0.01] to-transparent blur-[1px]" />
    </section>
  );
}