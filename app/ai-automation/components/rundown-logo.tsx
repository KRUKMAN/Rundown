type RundownDigitalLogoProps = {
  className?: string;
};

export function RundownDigitalLogo({ className = "" }: RundownDigitalLogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-[clamp(0.3rem,0.6vw,0.55rem)] flex-wrap sm:flex-nowrap ${className}`}
    >
      <div
        className="relative flex items-center justify-center w-[clamp(1.9rem,3vw,2.5rem)] h-[clamp(1.9rem,3vw,2.5rem)] rounded-md md:rounded-lg border-[2.5px] md:border-[3px] border-[#109e48] shrink-0"
        aria-hidden
      >
        <span className="font-mono font-bold text-[#109e48] text-[clamp(1.05rem,2.3vw,1.45rem)] tracking-tighter translate-x-[-0.05em] translate-y-[-0.05em]">
          &gt;<span className="-ml-1">_</span>
        </span>
      </div>

      <div className="flex flex-col justify-between h-[clamp(2rem,3.3vw,2.7rem)] py-0.5">
        <div className="flex items-baseline">
          <span className="text-white font-sans font-bold text-[clamp(1.05rem,2.3vw,1.45rem)] tracking-tight leading-[0.9]">
            RUNDOWN
          </span>
          <div className="w-[clamp(0.3rem,0.55vw,0.45rem)] h-[clamp(0.3rem,0.55vw,0.45rem)] bg-white ml-1 md:ml-1.5 mb-1 md:mb-1.5" />
        </div>
        <span className="text-white font-sans font-bold text-[clamp(1.05rem,2.3vw,1.45rem)] tracking-tight leading-[0.9]">
          DIGITAL
        </span>
      </div>
    </div>
  );
}
