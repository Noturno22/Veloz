export function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/zentra-logo.png"
        alt="Veloz"
        className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 object-contain brightness-[1.15] contrast-[1.08] saturate-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 hover:brightness-[1.25] hover:drop-shadow-[0_4px_24px_rgba(212,175,55,0.5)] dark:brightness-[1.3] dark:contrast-[1.1] dark:saturate-[1.1] dark:drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)] dark:hover:brightness-[1.4] dark:hover:drop-shadow-[0_4px_32px_rgba(212,175,55,0.6)]"
      />
    </div>
  );
}
