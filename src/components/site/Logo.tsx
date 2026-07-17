export function Logo() {
  return (
    <div className="flex items-center animate-logo-glow">
      <img
        src="/zentra-logo.png"
        alt="Veloz"
        className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 object-contain brightness-[1.15] contrast-[1.05] transition-all duration-300 hover:scale-105 hover:brightness-[1.25] hover:drop-shadow-[0_0_24px_rgba(212,175,55,0.45)]"
      />
    </div>
  );
}
