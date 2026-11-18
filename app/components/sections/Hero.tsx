
import AnimatedWord from "~/components/ui/AnimatedWord";
import { heroWords } from "~/data/hero";
import ScrollIndicator from "~/components/ui/ScrollIndicator";
export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative flex min-h-svh w-full
        flex-col items-center
        overflow-hidden bg-white
        px-4 py-8 text-[#171717]
        sm:px-8 sm:py-10
        lg:px-12 lg:py-14
      "
    >
      {/* Brand */}
      <div
        className="
          select-none rounded-full
          border-[2px] border-black
          px-5 py-2
          text-[28px] font-bold
          leading-none tracking-[-0.065em]
          sm:text-[34px]
          lg:border-[3px] lg:text-[44px]
        "
      >
        somoscierra.
      </div>

      {/* Content */}
      <div
        className="
          flex w-full flex-1 flex-col
          items-center justify-center
          text-center
          
        "
      >
    <h1
  className="
    flex w-full max-w-[1400px]
    flex-col items-center
    gap-3 text-center font-medium
    text-[clamp(1rem,5.4vw,2.8rem)]
    leading-[1.5] tracking-[-0.055em]
    md:gap-2
    md:text-[clamp(1rem,4.5vw,4.75rem)]
    md:leading-[1.6]
  "
>
  {/* Creation */}
  <span className="block whitespace-nowrap">
    Creamos{" "}
    <AnimatedWord
      items={heroWords.creation}
      offset={1800}
    />
    ,
  </span>

  {/* Development */}
  <span className="block whitespace-nowrap">
    desarrollamos{" "}
    <AnimatedWord
      items={heroWords.development}
      offset={3200}
    />
  </span>

  {/* Connection */}
  <span className="block whitespace-nowrap">
    y conectamos{" "}
    <AnimatedWord
      items={heroWords.connection}
      offset={4800}
    />
    .
  </span>
</h1>
      </div>

      {/* Bottom label */}
     <ScrollIndicator target="#servicios" />
    </section>
  );
}
