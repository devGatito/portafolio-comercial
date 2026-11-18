import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


interface ScrollIndicatorProps {
  target?: string;
  label?: string;
}

export default function ScrollIndicator({
  target = "#servicios",
  label = "Explorar nuestros servicios",
}: ScrollIndicatorProps) {
  return (
    <a
      href={target}
      aria-label={label}
      className="
        group inline-flex size-11 shrink-0
        items-center justify-center
        rounded-full border border-black/15
        bg-white text-[#171717]
        transition-colors duration-300
        hover:border-black hover:bg-black
        hover:text-white
        focus-visible:outline-2
        focus-visible:outline-offset-4
        md:size-14
      "
    >
      <HugeiconsIcon
        icon={ArrowRight02Icon}
        strokeWidth={1.7}
        className="
           size-5 rotate-90 md:size-6
    motion-safe:animate-[scroll-arrow_1.8s_ease-in-out_infinite]
    group-hover:[animation-play-state:paused]
        "
      />
    </a>
  );
}