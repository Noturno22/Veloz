export function Logo() {
  return (
    <div className="flex items-center animate-logo-glow">
      <img
        src="/zentra-logo.png"
        alt="Veloz"
        className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 object-contain brightness-[1.3] contrast-[1.1] saturate-[1.1] drop-shadow-[0_2px_16px_rgba(255,255,255,0.35)] transition-all duration-300 hover:scale-105 hover:brightness-[1.4] hover:drop-shadow-[0_2px_32px_rgba(212,175,55,0.6)]"
      />
    </div>
  );
}
