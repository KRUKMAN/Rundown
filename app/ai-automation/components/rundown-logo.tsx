type RundownDigitalLogoProps = {
  className?: string;
};

export function RundownDigitalLogo({ className = "" }: RundownDigitalLogoProps) {
  return (
    <div className={`inline-flex items-center gap-5 md:gap-8 md:scale-110 ${className}`}>
      <div
        className="relative flex items-center justify-center w-24 h-24 md:w-36 md:h-36 rounded-2xl md:rounded-3xl border-[6px] md:border-[8px] border-[#109e48]"
        aria-hidden
      >
        <span className="font-mono font-bold text-[#109e48] text-5xl md:text-7xl tracking-tighter translate-x-[-0.05em] translate-y-[-0.05em]">
          &gt;<span className="-ml-1">_</span>
        </span>
      </div>

      <div className="flex flex-col justify-between h-[5.5rem] md:h-[8.5rem] py-1">
        <div className="flex items-baseline">
          <span className="text-white font-sans font-bold text-5xl md:text-7xl tracking-tight leading-[0.9]">
            RUNDOWN
          </span>
          <div className="w-3 h-3 md:w-5 md:h-5 bg-white rounded-sm ml-1 md:ml-2 mb-1 md:mb-2" />
        </div>
        <span className="text-white font-sans font-bold text-5xl md:text-7xl tracking-tight leading-[0.9]">
          DIGITAL
        </span>
      </div>
    </div>
  );
}
