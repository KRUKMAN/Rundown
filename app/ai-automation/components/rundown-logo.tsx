type RundownDigitalLogoProps = {
  className?: string;
};

export function RundownDigitalLogo({ className = "" }: RundownDigitalLogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-[clamp(1rem,2vw,2rem)] flex-wrap sm:flex-nowrap ${className}`}
    >
      <div
        className="relative flex items-center justify-center w-[clamp(4.5rem,10vw,6.5rem)] h-[clamp(4.5rem,10vw,6.5rem)] rounded-2xl md:rounded-3xl border-[6px] md:border-[8px] border-[#109e48] shrink-0"
        aria-hidden
      >
        <span className="font-mono font-bold text-[#109e48] text-[clamp(2.5rem,6vw,3.5rem)] tracking-tighter translate-x-[-0.05em] translate-y-[-0.05em]">
          &gt;<span className="-ml-1">_</span>
        </span>
      </div>

      <div className="flex flex-col justify-between h-[clamp(4.5rem,10vw,7.5rem)] py-1">
        <div className="flex items-baseline">
          <span className="text-white font-sans font-bold text-[clamp(2.5rem,6vw,3.5rem)] tracking-tight leading-[0.9]">
            RUNDOWN
          </span>
          <div className="w-[clamp(0.65rem,1.5vw,1rem)] h-[clamp(0.65rem,1.5vw,1rem)] bg-white rounded-sm ml-1 md:ml-2 mb-1 md:mb-2" />
        </div>
        <span className="text-white font-sans font-bold text-[clamp(2.5rem,6vw,3.5rem)] tracking-tight leading-[0.9]">
          DIGITAL
        </span>
      </div>
    </div>
  );
}
